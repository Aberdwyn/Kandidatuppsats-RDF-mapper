d = {"hej": 1}
print(d)

try: 
    d["då"]
except KeyError:
    print(123)