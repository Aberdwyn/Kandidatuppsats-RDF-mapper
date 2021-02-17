#!/usr/bin/env python3
import random
import sys 

surnames = ["John", "Brandon", "Robert", "Terry", "Patrick", "Joe", "Ursula", "Lewis", "David", "Neil", "Robin", "Andrzej", "Anne", "Rick", "Raymond", "George", "Steven", "Roger", "Margaret", "Janny", "Madeleine", "Guy", "Mercedes", "Diana", "Scott", "Tamora", "Cassanra", "Michael", "Cornelia", "Katharine", "Susan", "Lois", "Mark", "Trudi", "Victoria", "Sarah", "Janet", "Madeline", "Tad", "Laini", "Holly", "Gail", "Patricia", "Alix"]
lastnames = ["Tolkien", "Sanderson", "Jordan", "Pratchet", "Rothfuss", "Abercrombie", "Le Guin", "Caroll", "Eddings", "Gaiman", "Hobb", "Sapkowski", "McCaffrey", "Riordan", "Brooks", "Feist", "Martin", "Erikson", "Zelazny", "Weis", "Wurts", "L'Engle", "Kay", "Lackey", "Jones", "Lynch", "Pierce", "Clare", "Sullivan", "Funke", "Kerr", "Cooper", "Bujold", "Lawrence", "Canavan", "Schwab", "Maas", "Arden", "Morris", "Jemisin", "Williams", "Taylor", "Black", "Carriger", "Addison", "McKillip", "Harrow"]
def generate_author():
    """Returns a string of a surname and a lastname fitting for an author randomly picked from pre-defined lists of surnames and lastnames."""
    return surnames[random.randint(0, len(surnames) - 1)] + " " + lastnames[random.randint(0, len(surnames) - 1)]


fantasy_adj = ["Golden", "Black", "White", "Dark", "Holy", "Final", "Warded", "Neverending", "Endless", "Enormous", "Magical", "Crystal", "Last", "Wild", "Diamond", "Lost", "Great", "Shining", "Deadly", "Evil", "Mysterious", "Dragonbone", "Radiant", "Glimmering"]
fantasy_noun = ["Company", "Lord", "Empire", "King", "Queen", "Prince", "Princess", "Prism", "Story", "Tale", "Ship", "Journey", "Army", "Horde", "Theft", "Sword", "Storm", "Staff", "Wheel", "Cave", "Wish", "Unicorn", "Dragon", "Apprentice", "Pawn", "Assassin", "Ranger", "Paladin", "Cleric", "Wizard", "Quest", "Oath", "Errand", "Throne", "Chair", "Curse", "Crown", "Way", "Name", "Game", "City", "Garden"]
fantasy_genetive = ["Magic's", "Assassin's", "King's", "Queen's", "Wizard's", "Knight's", "Steven's", "Fool's", "Hero's"]
fantasy_what_is_this = ["Darkness", "Chaos", "Death", "Plague", "Kings", "Swords", "Time", "Magic", "the Forest", "Radiance", "the Moon", "the World", "Wind", "Flame", "the Stars", "Thrones", "Glass", "Thorns", "the Empire", "Blood", "the Queen", "Ages", "Shadows"]
def generate_book_title():
    """Returns a string title."""
    d20 = random.randint(0, 20)
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
def generate_books(nr):
    """Generate a number of books equal to nr saves them in a dictionary."""
    for n in range(int(nr)):
        author = generate_author()
        book = generate_book_title()
        if author in books:
            books[author] += [book]
        else:
            books[author] = [book]


def write_books_to_file():
    """Writes the generated books to a file."""
    with open("../data/graphql-data.js", "w") as file:
        file.write('const books = [\n')
        for author in books:
            for book in books[author]:
                file.write('    {\n')
                file.write('        title: "' + book + '",\n')
                file.write('        author: "' + author + '",\n')
                #TODO: related books here. how do i find their ID?
                file.write('    },\n')
        file.write('];\n')
        #make variable exportable
        file.write('export { books };')
        file.close()

if __name__ == '__main__':
    try: 
        generate_books(sys.argv[1])
        write_books_to_file()
    except IndexError:
        print("Provide a number of books to generate.")