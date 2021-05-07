import copy
from mako.template import Template
import re
from schema_utils import *
import rdflib

def apply_rdf_template(filename, results):
    """Transform a provided RDF mapping schema into a valid Mako template and apply results.
    
    This is a very simple translation that doesn't offer much in terms of customization. But basically,
    it holds to the initial idea of keeping the RDF mapping file/template format very simple. E.g.:
    <Person/{Person.id} a :Person ;
         :name "{Person.name}" .

    where Person.id and Person.name refer to field in the GraphQL schema mapping. Since this is not a valid
    format that can easily be interpretted by anu existing template system this function applies a transformation
    on the mapping to produce a valide Mako template compatible with the format we get as results.

    Not supported:
    - Variable list fields: Do we need to add conditionals to the generated tmeplate for this?
    """
    rdf_mapping_schema = open(filename, "r").read()

    # Rename all variables according to the 'collection_field' format
    # Pass a function instead of a pattern to sub()
    f = lambda p: f"${{result['{get_collection_name(p.group(1))}_{p.group(2)}']}}"
    print(f)
    s = re.sub(r'\{(.+)\.(.+)\}', f, rdf_mapping_schema)
    
    template_string = "% for result in data:\n" + s + "\n% endfor"
    # Check out the generate template
    print("Template string:")
    print(template_string)
    print()

    #save rdf turtle prefixes in a string
    prefixes = ""
    for result in re.findall(r'\@.*?[\r\n]', template_string):
        prefixes += result
    
    #remove rdf turtle prefixes from template
    template_string = re.sub(r'\@.*?[\r\n]', "", template_string)
    
    template = Template(template_string)
    rdf_data = template.render(data=results)

    with open("./rdf.nt", "w") as file:
        file.write(prefixes)
        file.write(rdf_data)



    g = rdflib.Graph()
    g.parse("rdf.nt", format='n3')

    import pprint
    for stmt in g:
        pprint.pprint(stmt)


    return rdf_data