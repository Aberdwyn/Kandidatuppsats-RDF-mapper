#!/usr/bin/env python3
import random
import sys 

author_surnames = ["John", "Brandon", "Robert", "Terry", "Patrick", "Joe", "Ursula", "Lewis", "David", "Neil", "Robin", "Andrzej", "Anne", "Rick", "Raymond", "George", "Steven", "Roger", "Margaret", "Janny", "Madeleine", "Guy", "Mercedes", "Diana", "Scott", "Tamora", "Cassanra", "Michael", "Cornelia", "Katharine", "Susan", "Lois", "Mark", "Trudi", "Victoria", "Sarah", "Janet", "Madeline", "Tad", "Laini", "Holly", "Gail", "Patricia", "Alix"]
author_lastnames = ["Tolkien", "Sanderson", "Jordan", "Pratchet", "Rothfuss", "Abercrombie", "Le Guin", "Caroll", "Eddings", "Gaiman", "Hobb", "Sapkowski", "McCaffrey", "Riordan", "Brooks", "Feist", "Martin", "Erikson", "Zelazny", "Weis", "Wurts", "L'Engle", "Kay", "Lackey", "Jones", "Lynch", "Pierce", "Clare", "Sullivan", "Funke", "Kerr", "Cooper", "Bujold", "Lawrence", "Canavan", "Schwab", "Maas", "Arden", "Morris", "Jemisin", "Williams", "Taylor", "Black", "Carriger", "Addison", "McKillip", "Harrow"]
def generate_author():
    """Returns a string of a surname and a lastname fitting for an author randomly picked from pre-defined lists of surnames and lastnames."""
    return author_surnames[random.randint(0, len(author_surnames) - 1)] + " " + author_lastnames[random.randint(0, len(author_surnames) - 1)]


fantasy_noun1 = ["Company"]
fantasy_adj1 = ["Golden"]
fantasy_adj = ["Golden", "Black", "White", "Dark", "Holy", "Final", "Warded", "Neverending", "Endless", "Flowing", "Steaming", "Enormous", "Magical", "Crystal", "Last", "Wild", "Diamond", "Lost", "Great", "Shining", "Deadly", "Evil", "Mysterious", "Dragonbone", "Radiant", "Glimmering"]
fantasy_noun = ["Company", "Lord", "Rule", "Horseman", "Empire", "King", "Queen", "Prince", "Princess", "Prism", "Story", "Tale", "Ship", "Journey", "Army", "Horde", "Theft", "Sword", "Storm", "Staff", "Wheel", "Cave", "Wish", "Unicorn", "Dragon", "Apprentice", "Pawn", "Assassin", "Ranger", "Paladin", "Cleric", "Wizard", "Quest", "Oath", "Errand", "Throne", "Chair", "Curse", "Crown", "Way", "Name", "Game", "City", "Garden"]
fantasy_genetive = ["Magic's", "Assassin's", "King's", "Queen's", "Wizard's", "Knight's", "Steven's", "Fool's", "Hero's"]
fantasy_what_is_this = ["Darkness", "Chaos", "Death", "Plague", "Kings", "Swords", "Time", "Magic", "the Forest", "Radiance", "the Moon", "the World", "Wind", "Flame", "the Stars", "Thrones", "Glass", "Thorns", "the Empire", "Blood", "the Queen", "Ages", "Shadows"]
def generate_book_title():
    """Returns a string title."""
    d20 = random.randint(1, 20)
    if d20 <= 4:
        #genetive noun
         return  fantasy_genetive[random.randint(0, len(fantasy_genetive) - 1)] + " " + fantasy_noun[random.randint(0, len(fantasy_noun) - 1)]
    elif  d20 > 4 and d20 < 13:  
        #The adj noun
        return "The " + fantasy_adj[random.randint(0, len(fantasy_adj) - 1)] + " " + fantasy_noun[random.randint(0, len(fantasy_noun) - 1)]
    elif d20 >= 13:
        #something of something
        return fantasy_noun[random.randint(0, len(fantasy_noun) - 1)] + " of " + fantasy_what_is_this[random.randint(0, len(fantasy_what_is_this) - 1)]


books = {}
book_ids = {}
def generate_books(nr):
    """Generate a number of books equal to nr and saves them in a dictionary."""
    for n in range(int(nr)):
        author = generate_author()
        book = generate_book_title()
        if book in books:
            #a new author for a book cannot have the same name as one already saved for that book
            while author in books[book]:
                author = generate_author()
            books[book] += [author]
        else:
            books[book] = [author]
    counter = 1
    for book in books:
        book_ids[book] = f'Book/{counter}'
        counter += 1


authors = {}
def generate_id_for_authors():
    """Generate an id for every author and saves it in a dictionary."""
    counter = 1
    for book in books:
        for author in books[book]:
            if not author in authors:
                authors[author] = f'Author/{counter}'
                counter += 1


known_relations = {}
def find_relations_among_authors():
    """Finds which authors have written a book together and saves the data in a dictionary."""
    for book in books:
        if len(books[book]) > 1:
            for i in range(len(books[book])):
                known_relations[books[book][i]] = books[book][:i] + books[book][i+1:]


reader_surnames = ["Bob", "Bobby", "Alfred", "Eva", "Adam", "Christina", "Sofia", "Anton", "Martin", "Magdalena", "Olivia", "Emma", "Amelia", "Ava", "Noah", "Liam", "Oliver", "Elijah", "Isabella", "Mia", "Charlotte", "Gianna", "Luna", "Aria", "Harper", "Ella", "Evelyn", "Mila", "Ellie", "Scarlett", "Lily", "Elizabeth", "Hazel", "Mohammed", "Alexander", "Samuel", "Henry", "Ezra", "Julian", "Michael", "Christopher", "Daniel", "Sebastian", "William", "Lucas"]
reader_lastnames = ["Nilsson", "Andersson", "Johansson", "Karlsson", "Larsson", "Olsson", "Persson", "Svensson", "Gustafsson", "Petterson", "Jonsson", "Jansson", "Hansson", "Smith", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Campbell", "Macdonald", "Murray"]
def generate_reader_name():
    """Generate and return a reader name."""
    return reader_surnames[random.randint(0, len(reader_surnames) - 1)] + " " + reader_lastnames[random.randint(0, len(reader_lastnames) - 1)]

readers = {}
def generate_reader(n):
    """Generate and store n Readers."""
    counter = 1
    for i in range(n):
        name = generate_reader_name()
        if not name in readers:
            readers[name] = f'Reader/{counter}'
            counter += 1

reader_favourite_book = {}
reader_knows = {}
def find_reader_relations():
    """Find and store reader relations"""
    for reader in readers:
        d100 = random.randint(1, 100)
        if d100 <= 50:
            reader_favourite_book[readers[reader]] = random.choice(list(book_ids.values()))

        d100 = random.randint(1, 100)
        if d100 <= 5:
            #TODO: fix so that you cannot be friend of yourself
            reader_knows[readers[reader]] = [random.choice(list(authors.values()))] + [random.choice(list(readers.values()))]
        elif d100 > 5 and d100 <= 10:
            reader_knows[readers[reader]] = [random.choice(list(authors.values()))]
        elif d100 > 10 and d100 <= 25:
            reader_knows[readers[reader]] = [random.choice(list(readers.values()))] + [random.choice(list(readers.values()))]
        elif d100 > 25 and d100 <= 50:
            reader_knows[readers[reader]] = [random.choice(list(readers.values()))]


def write_data_to_file():
    """Writes the generated data to a file."""
    with open("./data/graphql-data.js", "w") as file:
        #beginning
        file.write('module.exports = {\n')
        
        #books
        file.write('    "Book": {\n')
        for book in books:
            file.write(f'        "{book_ids[book]}": {{ id: "{book_ids[book]}", title: "{book}", authors: [')
            for author in books[book]:
                file.write(f'{{"id": "{authors[author]}"}}, ')
            file.write(']},\n')
        file.write('    },\n')
        
        #authors
        file.write('    "Author": {\n')
        for author in authors:
            file.write(f'       "{authors[author]}": {{ id: "{authors[author]}", name: "{author}"')
            if author in known_relations:
                file.write(', "knows": [')
                for associate in known_relations[author]:
                    file.write(f' {{ id: "{authors[associate]}" }},')
                file.write(' ]')
            else:
                #some small chance that the authors's knows value is an empty list
                #d20 = random.randint(1, 20)
                #if d20 < 5:
                file.write(', "knows": []')
            file.write(', description: "" },\n')
        file.write('    },\n')

        #readers
        file.write('    "Reader": {\n')
        for reader in readers:
            file.write(f'       "{readers[reader]}": {{ id: "{readers[reader]}", name: "{reader}"')
            #reader knows
            if readers[reader] in reader_knows:
                file.write(f', "knows": [')
                for associate in reader_knows[readers[reader]]:
                    file.write(f' {{ id: "{associate}" }},')
                file.write(' ]')
            else:
                #some small chance that the reader's knows value is an empty list
                #d20 = random.randint(1, 20)
                #if d20 < 5:
                file.write(', "knows": null')
            #reader's favourite book
            if readers[reader] in reader_favourite_book:
                file.write(f', "favourite_book": {{id: "{reader_favourite_book[readers[reader]]}"}}')
            else:
                #some small chance that the reader's favourite book value is an empty string
                #d20 = random.randint(1, 20)
                #if d20 < 5:
                file.write(', "favourite_book": null')
            file.write(', },\n')
        file.write('    },\n')

        #end
        file.write('}\n')
        #make variable exportable
        #file.write('export { books };')
        file.close()


if __name__ == '__main__':
    generate_books(1000)
    generate_id_for_authors()
    find_relations_among_authors()

    generate_reader(500)
    find_reader_relations()
    write_data_to_file()


    """
    try: 
        generate_books(sys.argv[1])
        write_books_to_file()
    except IndexError:
        print("Provide a number of books to generate.")
    """