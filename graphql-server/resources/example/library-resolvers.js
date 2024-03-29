const db  = require('../../modules/data-generator/data/graphql-data.js');

function getResolvers(db){
    return {
        Query: {
            authors: () => Object.values(db["Author"]),
            books: () => Object.values(db["Book"]),
            movies: () => Object.values(db["Movie"]),
            readers: () => Object.values(db["Reader"]),

            author: (parent, args) => db["Author"][args.id],
            book: (parent, args) => db["Book"][args.id],
            movie: (parent, args) => db["Movie"][args.id],
            reader: (parent, args) => db["Reader"][args.id],

            persons: () => {
                let arr = [];
                for(let type of ['Author', 'Reader']){
                    arr = arr.concat(Object.values(db[type]));
                }
                return arr;
            },

            combos: () => {
                let arr = [];
                for(let type of ['Reader', 'Book']){
                    arr = arr.concat(Object.values(db[type]));
                }
                return arr;
            },
        },

        Author: {
            knows: (parent) => {
                // if the parent field is null, return null
                if(parent.knows == null){
                    return null;
                }
                if(Array.isArray(parent.knows)){
                    let obs = [];
                    for(let ob of parent.knows){
                        // if the parent field is null, push null
                        if(ob == null){
                            obs.push(null);
                        } else {
                            let id = ob.id;
                            let field_type = id.split('/')[0];
                            obs.push(db[field_type][id]);
                        }
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
                // if the parent field is null, return null
                if(parent.authors == null){
                    return null;
                }
                if(Array.isArray(parent.authors)){
                    let obs = [];
                    for(let ob of parent.authors){
                        // if the parent field is null, push null
                        if(ob == null){
                            obs.push(null);
                        } else {
                            let id = ob.id;
                            let field_type = id.split('/')[0];
                            obs.push(db[field_type][id]);
                        }
                    }
                    return obs;
                } else {
                    let id = parent.authors['id'];
                    let field_type = id.split('/')[0];
                    return db[field_type][id];
                }
            },
        },
        Movie: {
            producer: (parent) => {
                // if the parent field is null, return null
                if(parent.producer == null){
                    return null;
                }
                if(Array.isArray(parent.producer)){
                    let obs = [];
                    for(let ob of parent.producer){
                        // if the parent field is null, push null
                        if(ob == null){
                            obs.push(null);
                        } else {
                            let id = ob.id;
                            let field_type = id.split('/')[0];
                            obs.push(db[field_type][id]);
                        }
                    }
                    return obs;
                } else {
                    let id = parent.producer['id'];
                    let field_type = id.split('/')[0];
                    return db[field_type][id];
                }
            },
        },
        Reader: {
            favourite_book: (parent) => {
                // if the parent field is null, return null
                if(parent.favourite_book == null){
                    return null;
                }
                if(Array.isArray(parent.favourite_book)){
                    let obs = [];
                    for(let ob of parent.favourite_book){
                        // if the parent field is null, push null
                        if(ob == null){
                            obs.push(null);
                        } else {
                            let id = ob.id;
                            let field_type = id.split('/')[0];
                            obs.push(db[field_type][id]);
                        }
                    }
                    return obs;
                } else {
                    let id = parent.favourite_book['id'];
                    let field_type = id.split('/')[0];
                    return db[field_type][id];
                }
            },
            knows: (parent) => {
                // if the parent field is null, return null
                if(parent.knows == null){
                    return null;
                }
                if(Array.isArray(parent.knows)){
                    let obs = [];
                    for(let ob of parent.knows){
                        // if the parent field is null, push null
                        if(ob == null){
                            obs.push(null);
                        } else {
                            let id = ob.id;
                            let field_type = id.split('/')[0];
                            obs.push(db[field_type][id]);
                        }
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

        Combo: {
            __resolveType: (parent) => parent.id.split('/')[0]
        },
    }
}

module.exports = { getResolvers };