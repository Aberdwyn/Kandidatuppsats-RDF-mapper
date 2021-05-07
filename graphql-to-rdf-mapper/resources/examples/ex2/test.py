import re
import rdflib

s = "@base <http://example.org#> .\n" + "@prefix e: <http://example.org#> . \n" + "<person/Author/14> a <Person> ; \n" + "    e:hasName 'Madeline Arde' . \n"


g = rdflib.Graph()
g.parse( data = s, format='n3')

import pprint
for stmt in g:
    pprint.pprint(stmt)


#print(s)


#print(re.findall(r'\@.*?[\r\n]', s))

print(s)