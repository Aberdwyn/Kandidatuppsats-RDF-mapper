#!/usr/bin/env python3
import random
import sys 

author_surnames = ["Ania", "Mylo", "Ramsey", "Peter", "Anne", "Neil", "Jonathan", "Stephen", "Clive", "Dean", "Susan", "Jane", "Julie", "Debbie", "Johanna", "Jude", "Jayne", "Judith", "Robyn", "Alyssa", "John", "Brandon", "Robert", "Terry", "Patrick", "Joe", "Ursula", "Lewis", "David", "Neil", "Robin", "Andrzej", "Anne", "Rick", "Raymond", "George", "Steven", "Roger", "Margaret", "Janny", "Madeleine", "Guy", "Mercedes", "Diana", "Scott", "Tamora", "Cassanra", "Michael", "Cornelia", "Katharine", "Susan", "Lois", "Mark", "Trudi", "Victoria", "Sarah", "Janet", "Madeline", "Tad", "Laini", "Holly", "Gail", "Patricia", "Alix"]
author_lastnames = ["Ahlborn", "Carbia", "Campbell", "Straub", "Rice", "Gaiman", "Maberry", "King", "Barker", "Koontz", "Cole", "Carr", "Bybee", "Brown", "Philips", "Austen", "Garwood", "Macomber", "Lindsey", "Deveraux", "Krentz", "McNaught", "Tolkien", "Sanderson", "Jordan", "Pratchet", "Rothfuss", "Abercrombie", "Le Guin", "Caroll", "Eddings", "Gaiman", "Hobb", "Sapkowski", "McCaffrey", "Riordan", "Brooks", "Feist", "Martin", "Erikson", "Zelazny", "Weis", "Wurts", "L'Engle", "Kay", "Lackey", "Jones", "Lynch", "Pierce", "Clare", "Sullivan", "Funke", "Kerr", "Cooper", "Bujold", "Lawrence", "Canavan", "Schwab", "Maas", "Arden", "Morris", "Jemisin", "Williams", "Taylor", "Black", "Carriger", "Addison", "McKillip", "Harrow"]
def generate_author():
    """Returns a string of a surname and a lastname fitting for an author randomly picked from pre-defined lists of surnames and lastnames."""
    return author_surnames[random.randint(0, len(author_surnames) - 1)] + " " + author_lastnames[random.randint(0, len(author_surnames) - 1)]


fantasy_adj = ["Golden", "Black", "White", "Dark", "Holy", "Final", "Warded", "Neverending", "Endless", "Flowing", "Steaming", "Enormous", "Magical", "Crystal", "Last", "Wild", "Diamond", "Lost", "Great", "Shining", "Deadly", "Evil", "Mysterious", "Dragonbone", "Radiant", "Glimmering"]
fantasy_noun = ["Company", "Lord", "Rule", "Horseman", "Empire", "King", "Queen", "Prince", "Princess", "Prism", "Story", "Tale", "Ship", "Journey", "Army", "Horde", "Theft", "Sword", "Storm", "Staff", "Wheel", "Cave", "Wish", "Unicorn", "Dragon", "Apprentice", "Pawn", "Assassin", "Ranger", "Paladin", "Cleric", "Wizard", "Quest", "Oath", "Errand", "Throne", "Chair", "Curse", "Crown", "Way", "Name", "Game", "City", "Garden"]
fantasy_genetive = ["Magic's", "Assassin's", "King's", "Queen's", "Wizard's", "Knight's", "Steven's", "Fool's", "Hero's"]
fantasy_what_is_this = ["Darkness", "Chaos", "Death", "Plague", "Kings", "Swords", "Time", "Magic", "the Forest", "Radiance", "the Moon", "the World", "Wind", "Flame", "the Stars", "Thrones", "Glass", "Thorns", "the Empire", "Blood", "the Queen", "Ages", "Shadows"]
def generate_fantasy_title():
    """Returns a string fantasy title."""
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


romance_adj = ["Radiating", "Real", "Honest", "Glowing", "Lustful", "Enticing", "Interesting", "Daring", "Smooth", "Loving", "Beautiful", "Mysterious", "Hungering", "Hot", "Warm", "Caring", "Lusting", "Bound"]
romance_noun = ["Evening", "Moon", "Love", "Charm", "Spell", "Secret", "Canyon", "Shaft", "Pillar", "Wife", "Husband", "Lover", "Man", "Woman", "Attraction", "Hug", "Love", "Kiss", "Pride", "Predjudice", "Delta", "Venus", "Keeps", "Heart", "Longing", "Fault", "Hunger", "Edge", "Sea", "Tranquility", "Fire", "Rule"]
#romance_verb = ["Longing", "Binding", "Leaving", "Loving", "Hating", "Shivering", "Losing", "Pushing", "Walking", "Catching", "Playing", "Holding", "Fighting", "Trusting", "Thrusting"]
#romance_pronoun = ["Her", "Him", "You", "It", "Sofia"]
def generate_romance_title():
    """Returns a string romance title."""
    d69 = random.randint(1, 69)
    if d69 <= 35:
        #the adj noun
        return "The " + romance_adj[random.randint(0, len(romance_adj) - 1)] + " " + romance_noun[random.randint(0, len(romance_noun) - 1)]
    elif d69 > 35:
        #noun of the adj noun
        return romance_noun[random.randint(0, len(romance_noun) - 1)] + " of the " + romance_adj[random.randint(0, len(romance_adj) - 1)] + " " + romance_noun[random.randint(0, len(romance_noun) - 1)]


horror_adj = ["Cold", "Evil", "Unholy", "Perfect", "Innocent", "Dark", "Black", "Troubled", "Still", "Quiet", "Calm", "Scary", "Terrible"]
horror_noun = ["Fear", "Night", "Dark", "Famine", "Night", "Ritual", "Blood", "Corpse", "Death", "Crime", "Murder", "Silence", "Man", "Cross", "Bone", "Train", "Girl", "Woman", "Boy", "Cannibal"]
horror_verb = ["Killing", "Shooting", "Murder", "Silencing", "Drowning", "Following", "Stalking", "Slaughtering", "Crucifying", "Destroying", "Suffering", "Sacrifice"]
def generate_horror_title():
    """Returns a string horror title."""
    d666 = random.randint(1, 666)
    if d666 <= 111:
        #the adj noun
        return  "The " + horror_adj[random.randint(0, len(horror_adj) - 1)] + " " + horror_noun[random.randint(0, len(horror_noun) - 1)]
    elif d666 > 111 and d666 <= 222: 
        #noun of noun
        return  horror_noun[random.randint(0, len(horror_noun) - 1)] + " of " + horror_noun[random.randint(0, len(horror_noun) - 1)]
    elif d666 > 222 and d666 < 444: 
        #the adj noun of verb 
        return "The " + horror_adj[random.randint(0, len(horror_adj) - 1)] + " " + horror_noun[random.randint(0, len(horror_noun) - 1)] + " of " + horror_verb[random.randint(0, len(horror_verb) - 1)]
    elif d666 >= 444 and d666 < 555: 
        #noun of noun
        return horror_noun[random.randint(0, len(horror_noun) - 1)] + " of " + horror_noun[random.randint(0, len(horror_noun) - 1)]
    elif d666 >= 555:
        #verb of the adj noun
        return  horror_verb[random.randint(0, len(horror_verb) - 1)] + " of the " + horror_adj[random.randint(0, len(horror_adj) - 1)] + " " + horror_noun[random.randint(0, len(horror_noun) - 1)]


books = {}
book_ids = {}
book_genres = {}
def generate_books(nr):
    """Generate a number of books equal to nr and saves them in a dictionary."""
    for n in range(int(nr)):
        d6 = random.randint(1, 6)
        #A book cannot be generated with the same name in different genres due to the nature of the data.
        if d6 <= 4:
            book = generate_fantasy_title()
            book_genres[book] = "FANTASY"
        elif d6 == 5:
            book = generate_romance_title()
            book_genres[book] = "ROMANCE"
        elif d6 == 6:
            book = generate_horror_title()
            book_genres[book] = "HORROR"
        author = generate_author()
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

movie_director_surnames = ["Kathryn", "Chloé", "Ava", "Patty", "Greta", "Sofia", "Jane", "Lina", "Sarah", "Claire", "Dee", "Kelly", "Julie", "Martin", "Steven", "Quentin", "Alfred", "Christopher", "Stanley", "Francis Ford", "David", "James", "Ridley", "Tim", "Spike", "Orson", "Clint"]
movie_director_lastnames = ["Bigelow", "Zhao", "DuVernay", "Jenkins", "Gerwig", "Coppola", "Campion", "Wertmüller", "Polley", "Denis", "Rees", "Reichardt", "Dash", "Scorsese", "Spielberg", "Tarantino", "Hitchcook", "Nolan", "Kubrick", "Fincher", "Cameron", "Scott", "Burton", "Lee", "Welles", "Eastwood"]
def generate_director_name():
    """Generate and return a movie director name."""
    return movie_director_surnames[random.randint(0, len(movie_director_surnames) - 1)] + " " + movie_director_lastnames[random.randint(0, len(movie_director_lastnames) - 1)]

movie_producer_surnames = author_surnames + reader_surnames
movie_producer_lastnames = author_lastnames + reader_lastnames
def generate_producer_name():
    """Generate and return a movie producer name."""
    return movie_producer_surnames[random.randint(0, len(movie_producer_surnames) - 1)] + " " + movie_producer_surnames[random.randint(0, len(movie_producer_surnames) - 1)]

movies = []
movie_ids = {}
movie_genres = {}
movie_producers = {}
def generate_movies(nr):
    """Generate a number of movies equal to nr and saves them in a dictionary."""
    for n in range(int(nr)):
        d6 = random.randint(1, 6)
        #A movie cannot be generated with the same name in different genres due to the nature of the data.
        if d6 <= 4:
            movie = generate_fantasy_title()
            movie_genres[movie] = "FANTASY"
            #if movie is a book, take author of book as producer
            if movie in books:
                movie_producers[movie] = authors[books[movie][0]]
            else:
                d20 = random.randint(1, 20)
                if d20 == 1:
                    movie_producers[movie] = None
                elif d20 > 1:
                    movie_producers[movie] = random.choice(list(readers.values()))
        elif d6 == 5:
            movie = generate_romance_title()
            movie_genres[movie] = "ROMANCE"
            d20 = random.randint(1, 20)
            if d20 == 1:
                movie_producers[movie] = None
            elif d20 > 1:
                movie_producers[movie] = random.choice(list(readers.values()))
        elif d6 == 6:
            movie = generate_horror_title()
            movie_genres[movie] = "HORROR"
            d20 = random.randint(1, 20)
            if d20 == 1:
                movie_producers[movie] = None
            elif d20 > 1:
                movie_producers[movie] = random.choice(list(readers.values()))
        movies.append(movie)
    counter = 1
    for movie in movies:
        movie_ids[movie] = f'Movie/{counter}'
        counter += 1

def write_data_to_file():
    """Writes the generated data to a file."""
    with open("./data/graphql-data.js", "w") as file:
        #beginning
        file.write('module.exports = {\n')
        
        #books
        file.write('    "Book": {\n')
        for book in books:
            file.write(f'        "{book_ids[book]}": {{ id: "{book_ids[book]}", title: "{book}", genre: "{book_genres[book]}" , authors: [')
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
                #some small chance that the authors's knows value is an empty list or is null
                d20 = random.randint(1, 20)
                if d20 < 10:
                    file.write(', "knows": []')
                else:
                    file.write(', "knows": null')
            d20 = random.randint(1, 20)
            if d20 >= 3:
                file.write(f', "age": {random.randint(15, 100)}')
            elif d20 == 1:
                #5% chance that age does not exist
                pass
            elif d20 == 2: 
                #5% chance that age is null
                file.write(', "age": null')
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
                #some small chance that the reader's knows value is an empty list or null
                d20 = random.randint(1, 20)
                if d20 < 10:
                    file.write(', "knows": []')
                else:
                    file.write(', "knows": null')
            #reader's favourite book
            if readers[reader] in reader_favourite_book:
                file.write(f', "favourite_book": {{id: "{reader_favourite_book[readers[reader]]}"}}')
            else:
                #some small chance that the reader's favourite book value is an empty string
                #d20 = random.randint(1, 20)
                #if d20 < 5:
                file.write(', "favourite_book": null')
            d20 = random.randint(1, 20)
            if d20 > 4:
                file.write(f', "age": {random.randint(5, 100)}')
            else: 
                file.write(', "age": null')
            file.write(', },\n')
        file.write('    },\n')

        #movies
        file.write('    "Movie": {\n')
        for movie in movies:
            file.write(f'        "{movie_ids[movie]}": {{ id: "{movie_ids[movie]}", title: "{movie}", genre: "{movie_genres[movie]}", producer: {{id: "{movie_producers[movie]}"}}, director: "{generate_director_name()}"}},\n')
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

    generate_reader(5000)
    find_reader_relations()
    generate_movies(500)
    write_data_to_file()


    """
    try: 
        generate_books(sys.argv[1])
        write_books_to_file()
    except IndexError:
        print("Provide a number of books to generate.")
    """