module.exports = {
    "Book": {
        "Book/1": { id: "Book/1", title: "LOTR 1", authors: [{ "id": "Author/1" }, { "id": "Author/2" }] },
        "Book/2": { id: "Book/2", title: "LOTR 2", authors: [{ "id": "Author/1" }] },
        "Book/3": { id: "Book/3", title: "Moment 22", authors: [{ "id": "Author/2" }] },
    },
    "Author": {
        "Author/1": { id: "Author/1", name: "JRR Tolkien", "knows": [ {id: "Police/1" }], description: "Father of modern fantasy" },
        "Author/2": { id: "Author/2", name: "Joseph Heller", "knows": [], description: "Famous for this book only" },
    },
    "Police": {
        "Police/1": { id: "Police/1", name: "Stg Jones", "knows": [], rank: 1 },
        "Police/2": { id: "Police/2", name: "Batman", "knows": [ { id: "Author/1" }, { id: "Author/2" }, { id: "Police/1" }], rank: 2 },
    }
}