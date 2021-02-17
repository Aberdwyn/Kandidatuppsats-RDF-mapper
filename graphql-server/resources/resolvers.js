// data is the global var for storing data
// let data = {
//    "Books" : [],
//    "Authors": [],
//    "...": []   
//}

// load data from file (ie import "db" module). Note data is used to mean two different things below.

const resolvers = {
    Query: {
        listOfBooks: () => {
           let arr = [];
           for(let value of data["Books"]){
               arr.push(value.values()[0]);
           }
           return arr;
        },

        book: (parent, args) => data["Books"][args.id],

    },

    Book: {
        relatedBooks: (parent) => {
            // list or not? authors: [ {id: ""},  {id: ""} ]
            // TODO: Fix also for list
            // parent = {"id": "Book/1", related_to: { id: "Book/2" }, title: "", author: "" }

            let field_id = parent.relatedBooks["id"];
            let field_type = field_id.split("/")[0];
            return data[field_type][field_id];
        },
    },



}

export { resolvers };