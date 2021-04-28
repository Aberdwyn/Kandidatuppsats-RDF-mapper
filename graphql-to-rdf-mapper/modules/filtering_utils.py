from schema_utils import *

def check_filters(doc, graphql_type, graphql_mapping_schema):
    """Check if the incoming document validates against all supplied directive filters."""
    collection_name = get_collection_name(graphql_type.name)
    for field_name, field in graphql_type.fields.items():
        # The doc field name is prefixed with the name of the collection
        doc_field_name = f"{collection_name}_{field_name}"
        named_type = get_named_type(field.type) # special case i object, skip now
        
        # equals
        eq_value = get_directive_values_from_field(graphql_mapping_schema, field, "eq")
        if eq_value:
            if is_list_type(field.type):
                print("WARNING: The @eq directive cannot be applied on lists. Did you mean to use @in?")
                return False
            value = eq_value.get(named_type.name.lower())
            if value != doc.get(doc_field_name):
                return False
        
        # less than
        lt_value = get_directive_values_from_field(graphql_mapping_schema, field, "lt")
        if lt_value:
            if is_list_type(field.type):
                print("WARNING: The @lt directive cannot be applied on lists. Did you mean to use @in?")
                return False
            value = lt_value.get(named_type.name.lower())
            if value <= doc.get(doc_field_name):
                return False
        
        # greater than
        gt_value = get_directive_values_from_field(graphql_mapping_schema, field, "gt")
        if gt_value:
            if is_list_type(field.type):
                print("WARNING: The @gt directive cannot be applied on lists. Did you mean to use @in?")
                return False
            value = gt_value.get(named_type.name.lower())
            if value >= doc.get(doc_field_name):
                return False

        # size
        size_value = get_directive_values_from_field(graphql_mapping_schema, field, "size")
        if size_value:
            if not is_list_type(field.type):
                print("WARNING: The @size directive can only be applied to lists.")
                return False
            size = len(doc.get(doc_field_name))
            value = size_value.get("int")
            if size_value.get("gt"):
                if value >= size:
                    return False
            if size_value.get("lt"):
                if value <= size:
                    return False
            if not size_value.get("gt") and not size_value.get("lt"):
                if value != size:
                    return False

    return True

def apply_filters(collections, graphql_mapping_schema):
    """Remove items from collection that do not match all the fields filter directives."""
    # For every collection
    for type_name, graphql_type in graphql_mapping_schema.type_map.items():
        # Only generate for user defined types
        if not is_user_defined_type(graphql_type):
            continue

        collection_name = get_collection_name(type_name)
        collection = collections[collection_name]
        i = 0
        while i < len(collection):
            doc = collection[i]
            if not check_filters(doc, graphql_type, graphql_mapping_schema):
                del collection[i]
            else:
                i += 1