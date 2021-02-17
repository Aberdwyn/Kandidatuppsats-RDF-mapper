const db  = require('./library-db.js');

function getResolvers(db){
    return {
        Query: {
            listOfAuthors: () => Object.values(db["Author"]),
            listOfBooks: () => Object.values(db["Book"]),
            listOfPolices: () => Object.values(db["Police"]),

            author: (parent, args) => db["Author"][args.id],
            book: (parent, args) => db["Book"][args.id],
            police: (parent, args) => db["Police"][args.id],

            listOfPersons: () => {
                let arr = [];
                for(let type of ['Author', 'Police']){
                    arr = arr.concat(Object.values(db[type]));
                }
                return arr;
            }
        },

        Author: {
            knows: (parent) => {
                if(Array.isArray(parent.knows)){
                    let obs = [];
                    for(let ob of parent.knows){
                        let id = ob.id;
                        let field_type = id.split('/')[0];
                        obs.push(db[field_type][id]);
                    }
                    return obs;
                } else {
                    let id = parent.knows['id'];
                    let field_type = id.split('/')[0];
                    return db[field_type][id];
                }
            },
        },
        Book: {
            authors: (parent) => {
                if(Array.isArray(parent.authors)){
                    let obs = [];
                    for(let ob of parent.authors){
                        let id = ob.id;
                        let field_type = id.split('/')[0];
                        obs.push(db[field_type][id]);
                    }
                    return obs;
                } else {
                    let id = parent.authors['id'];
                    let field_type = id.split('/')[0];
                    return db[field_type][id];
                }
            },
        },
        Police: {
            knows: (parent) => {
                if(Array.isArray(parent.knows)){
                    let obs = [];
                    for(let ob of parent.knows){
                        let id = ob.id;
                        let field_type = id.split('/')[0];
                        obs.push(db[field_type][id]);
                    }
                    return obs;
                } else {
                    let id = parent.knows['id'];
                    let field_type = id.split('/')[0];
                    return db[field_type][id];
                }
            },
        },

        Person: {
            __resolveType: (parent) => parent.id.split('/')[0]
        },

    }
}

module.exports = { getResolvers };