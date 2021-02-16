generate-data.py is used to generate random graphQL data based on fantasy books/authors and write it to a js file.
the titles of the books are based on common patterns found in fantasy titles:
    the adj noun
    genetive noun
    noun of (weird noun)
the author names are randomly picked from a predefined list of fantasy author surnames and lastnames
the related books are all books written by the same author + 0-3 other randomly picked books (for this reason i need know all generated books before writing them to the file)

generate data in the terminal by calling the file + an arg of how many books to generate
the generated books are saved in data/graphql-data.js and can be imported into another js file with 

import { books } from './data/graphql-data.js'