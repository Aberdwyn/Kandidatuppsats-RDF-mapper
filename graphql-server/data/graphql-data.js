const books = [
    {
        title: "Errand of Shadows",
        author: "Cornelia Brooks",
    },
    {
        title: "King of Shadows",
        author: "Sarah Weis",
    },
    {
        title: "City of Radiance",
        author: "Madeline Jordan",
    },
    {
        title: "Curse of the Moon",
        author: "Janet Sanderson",
    },
    {
        title: "Princess of Radiance",
        author: "Rick Feist",
    },
    {
        title: "The Last Princess",
        author: "Sarah Lawrence",
    },
    {
        title: "King's Wizard",
        author: "Gail Zelazny",
    },
    {
        title: "The Magical Apprentice",
        author: "Gail Zelazny",
    },
    {
        title: "Queen's Game",
        author: "Cassanra Lawrence",
    },
    {
        title: "The Warded Lord",
        author: "Terry Gaiman",
    },
    {
        title: "Theft of Ages",
        author: "Terry Gaiman",
    },
    {
        title: "The Endless Assassin",
        author: "Brandon Hobb",
    },
    {
        title: "Empire of the Queen",
        author: "Roger Wurts",
    },
    {
        title: "The Wild Wheel",
        author: "Patricia Jordan",
    },
    {
        title: "Theft of Flame",
        author: "Patricia Jordan",
    },
    {
        title: "Journey of Wind",
        author: "Brandon Tolkien",
    },
    {
        title: "Empire of Death",
        author: "Sarah Lackey",
    },
    {
        title: "Prism of Thrones",
        author: "Janny Pierce",
    },
    {
        title: "The Evil Queen",
        author: "Guy Riordan",
    },
    {
        title: "The Final Story",
        author: "Guy Riordan",
    },
    {
        title: "The Radiant Way",
        author: "Tamora Taylor",
    },
    {
        title: "Way of Flame",
        author: "Janet Sapkowski",
    },
    {
        title: "Crown of Ages",
        author: "Madeline Pierce",
    },
    {
        title: "The Dark Pawn",
        author: "Michael Arden",
    },
    {
        title: "Queen's Assassin",
        author: "Madeline Martin",
    },
    {
        title: "Fool's Princess",
        author: "Janet Lynch",
    },
    {
        title: "Paladin of Kings",
        author: "Alix Riordan",
    },
    {
        title: "Steven's Tale",
        author: "Alix Riordan",
    },
    {
        title: "The Great Way",
        author: "Mercedes Weis",
    },
    {
        title: "The Holy Game",
        author: "Alix Martin",
    },
    {
        title: "Army of Thrones",
        author: "Alix Martin",
    },
    {
        title: "Knight's Crown",
        author: "John Lackey",
    },
    {
        title: "The Deadly Errand",
        author: "John Lackey",
    },
    {
        title: "The Dark Game",
        author: "John Lackey",
    },
    {
        title: "The White Garden",
        author: "John Lackey",
    },
    {
        title: "The Golden Princess",
        author: "John Lackey",
    },
    {
        title: "Cave of the Forest",
        author: "Victoria Tolkien",
    },
    {
        title: "Fool's Story",
        author: "Victoria Tolkien",
    },
    {
        title: "Name of Plague",
        author: "John Hobb",
    },
    {
        title: "The Magical Theft",
        author: "John Hobb",
    },
    {
        title: "King's Wizard",
        author: "John Hobb",
    },
    {
        title: "Quest of Blood",
        author: "John Schwab",
    },
    {
        title: "Knight's King",
        author: "John Sullivan",
    },
    {
        title: "The Golden Horde",
        author: "John Sullivan",
    },
    {
        title: "The Holy Prince",
        author: "Katharine Erikson",
    },
    {
        title: "The Black Prince",
        author: "Tamora Sapkowski",
    },
    {
        title: "Journey of Thorns",
        author: "Tamora Sapkowski",
    },
    {
        title: "The Final Lord",
        author: "Tamora Sapkowski",
    },
    {
        title: "The Lost Army",
        author: "Alix Abercrombie",
    },
    {
        title: "Wizard's Theft",
        author: "David Le Guin",
    },
    {
        title: "Empire of the Empire",
        author: "David Le Guin",
    },
    {
        title: "King's Wizard",
        author: "Roger Morris",
    },
    {
        title: "Garden of Kings",
        author: "Roger Morris",
    },
    {
        title: "The Crystal Army",
        author: "Roger Canavan",
    },
    {
        title: "Steven's Quest",
        author: "Roger Canavan",
    },
    {
        title: "The Dragonbone Ranger",
        author: "Tamora Weis",
    },
    {
        title: "The Last Garden",
        author: "Janet Pratchet",
    },
    {
        title: "Lord of Kings",
        author: "Lois Kerr",
    },
    {
        title: "Knight's Apprentice",
        author: "Lois Kerr",
    },
    {
        title: "The Diamond Throne",
        author: "Lois Kerr",
    },
    {
        title: "The White Apprentice",
        author: "Lois Kerr",
    },
    {
        title: "The Wild Storm",
        author: "Joe Riordan",
    },
    {
        title: "The Last Throne",
        author: "Trudi Carriger",
    },
    {
        title: "The Wild Prince",
        author: "Michael Cooper",
    },
    {
        title: "Empire of Swords",
        author: "Janny Jones",
    },
    {
        title: "Steven's King",
        author: "Janny Jones",
    },
    {
        title: "Steven's Horde",
        author: "Sarah Black",
    },
    {
        title: "Staff of Kings",
        author: "Sarah Black",
    },
    {
        title: "Tale of Radiance",
        author: "Brandon Pierce",
    },
    {
        title: "Crown of Wind",
        author: "Brandon Pierce",
    },
    {
        title: "Lord of the Stars",
        author: "Trudi Williams",
    },
    {
        title: "Fool's Wish",
        author: "Steven Williams",
    },
    {
        title: "The Glimmering Cleric",
        author: "Steven Williams",
    },
    {
        title: "Paladin of Chaos",
        author: "Tamora Riordan",
    },
    {
        title: "Lord of Plague",
        author: "Madeleine Black",
    },
    {
        title: "The Wild Story",
        author: "Tad Bujold",
    },
    {
        title: "The Holy Throne",
        author: "Mercedes Zelazny",
    },
    {
        title: "The Glimmering Assassin",
        author: "Mercedes Williams",
    },
    {
        title: "Fool's Queen",
        author: "Mercedes Williams",
    },
    {
        title: "The Diamond Apprentice",
        author: "Madeline Jones",
    },
    {
        title: "Theft of Swords",
        author: "Holly Weis",
    },
    {
        title: "The Golden Wish",
        author: "Holly Weis",
    },
    {
        title: "Steven's Sword",
        author: "Neil Gaiman",
    },
    {
        title: "Wizard's Storm",
        author: "Ursula Le Guin",
    },
    {
        title: "Name of Plague",
        author: "Ursula Le Guin",
    },
    {
        title: "Assassin's Errand",
        author: "Neil Brooks",
    },
    {
        title: "The Mysterious Storm",
        author: "Diana Kerr",
    },
    {
        title: "The Neverending Lord",
        author: "Diana Kerr",
    },
    {
        title: "Horde of Wind",
        author: "Lois Lynch",
    },
    {
        title: "Knight's Assassin",
        author: "Trudi Rothfuss",
    },
    {
        title: "The Final Curse",
        author: "Michael Wurts",
    },
    {
        title: "Steven's Assassin",
        author: "Michael Wurts",
    },
    {
        title: "Magic's Journey",
        author: "Gail Bujold",
    },
    {
        title: "The Lost Journey",
        author: "Gail Bujold",
    },
    {
        title: "The Neverending Crown",
        author: "Anne Tolkien",
    },
    {
        title: "Prism of Thorns",
        author: "Cassanra Pratchet",
    },
    {
        title: "Hero's Paladin",
        author: "Andrzej Jones",
    },
    {
        title: "The Last Staff",
        author: "Neil Eddings",
    },
    {
        title: "Steven's Apprentice",
        author: "Neil Eddings",
    },
    {
        title: "Curse of Wind",
        author: "Katharine Morris",
    },
    {
        title: "Prism of Swords",
        author: "Guy Sanderson",
    },
    {
        title: "The Radiant Crown",
        author: "Guy Sanderson",
    },
    {
        title: "Name of Flame",
        author: "Sarah Maas",
    },
    {
        title: "The Mysterious Storm",
        author: "Diana Lawrence",
    },
    {
        title: "Assassin of Glass",
        author: "Trudi Funke",
    },
    {
        title: "Oath of Blood",
        author: "Steven Funke",
    },
    {
        title: "The Warded Ship",
        author: "John Erikson",
    },
    {
        title: "Wizard's Empire",
        author: "Michael Taylor",
    },
    {
        title: "Queen's Game",
        author: "Alix Sapkowski",
    },
    {
        title: "Knight's King",
        author: "Alix Sapkowski",
    },
    {
        title: "The Neverending City",
        author: "Margaret Rothfuss",
    },
    {
        title: "Hero's Paladin",
        author: "Margaret Rothfuss",
    },
    {
        title: "The Dragonbone Tale",
        author: "Raymond Eddings",
    },
    {
        title: "The Enormous Wizard",
        author: "Raymond Eddings",
    },
    {
        title: "The Golden Company",
        author: "Cornelia Williams",
    },
    {
        title: "The Crystal Curse",
        author: "Neil Feist",
    },
    {
        title: "Princess of Chaos",
        author: "Lois Schwab",
    },
    {
        title: "King's Princess",
        author: "Lois Schwab",
    },
    {
        title: "Garden of Ages",
        author: "John Lynch",
    },
    {
        title: "King's Prism",
        author: "Trudi Cooper",
    },
    {
        title: "The Wild Army",
        author: "George Lackey",
    },
    {
        title: "Assassin's Ranger",
        author: "Susan Weis",
    },
    {
        title: "King's Journey",
        author: "Cassanra Gaiman",
    },
    {
        title: "The Mysterious Lord",
        author: "Raymond Hobb",
    },
    {
        title: "The Crystal Tale",
        author: "Guy Jones",
    },
    {
        title: "Fool's Ship",
        author: "Anne Feist",
    },
    {
        title: "The Dark Staff",
        author: "Anne Riordan",
    },
    {
        title: "Hero's Cleric",
        author: "Anne Riordan",
    },
    {
        title: "Journey of the Stars",
        author: "Steven Pierce",
    },
    {
        title: "Dragon of Time",
        author: "Steven Pierce",
    },
    {
        title: "The Endless Wizard",
        author: "Steven Pierce",
    },
    {
        title: "Assassin's Sword",
        author: "Rick McCaffrey",
    },
    {
        title: "The Wild Unicorn",
        author: "John Sanderson",
    },
    {
        title: "The Holy Game",
        author: "John Sanderson",
    },
    {
        title: "Ship of Thrones",
        author: "John Sanderson",
    },
    {
        title: "The Last Dragon",
        author: "Victoria Le Guin",
    },
    {
        title: "Magic's Assassin",
        author: "Madeline Erikson",
    },
    {
        title: "Journey of the Moon",
        author: "Gail Tolkien",
    },
    {
        title: "Cleric of the World",
        author: "Gail Tolkien",
    },
    {
        title: "Crown of the Moon",
        author: "Lewis Jordan",
    },
    {
        title: "Pawn of the Empire",
        author: "Cornelia Hobb",
    },
    {
        title: "The Last King",
        author: "Janny Arden",
    },
    {
        title: "Pawn of Time",
        author: "Janny Arden",
    },
    {
        title: "The Wild Curse",
        author: "Janny Arden",
    },
    {
        title: "Princess of the Stars",
        author: "Alix Morris",
    },
    {
        title: "King's Story",
        author: "Alix Morris",
    },
    {
        title: "The Wild Prince",
        author: "Laini Jordan",
    },
    {
        title: "Assassin's Story",
        author: "Anne Pratchet",
    },
    {
        title: "The Endless Unicorn",
        author: "Anne Pratchet",
    },
    {
        title: "The Glimmering Quest",
        author: "Steven Pratchet",
    },
    {
        title: "The Crystal Wish",
        author: "Lois Funke",
    },
    {
        title: "Queen's Chair",
        author: "Holly Canavan",
    },
    {
        title: "Knight's Horde",
        author: "Diana Funke",
    },
    {
        title: "The Shining Oath",
        author: "Robin Caroll",
    },
    {
        title: "The Final Apprentice",
        author: "Gail Pierce",
    },
    {
        title: "Wheel of Plague",
        author: "George Wurts",
    },
    {
        title: "The Black Cleric",
        author: "George Wurts",
    },
    {
        title: "The Enormous Lord",
        author: "Trudi Riordan",
    },
    {
        title: "Tale of Flame",
        author: "Andrzej Sullivan",
    },
    {
        title: "Chair of Death",
        author: "Steven Weis",
    },
    {
        title: "The Glimmering Game",
        author: "Anne Hobb",
    },
    {
        title: "Story of the Empire",
        author: "Brandon Black",
    },
    {
        title: "Theft of Thrones",
        author: "Brandon Black",
    },
    {
        title: "Errand of the Forest",
        author: "Diana Caroll",
    },
    {
        title: "Pawn of Radiance",
        author: "Roger Feist",
    },
    {
        title: "The Final Oath",
        author: "Michael Sullivan",
    },
    {
        title: "Prism of the Queen",
        author: "Lewis L'Engle",
    },
    {
        title: "Company of the Forest",
        author: "Steven Eddings",
    },
    {
        title: "Crown of Time",
        author: "Steven Eddings",
    },
    {
        title: "The Dark Unicorn",
        author: "Cassanra Clare",
    },
    {
        title: "Crown of Plague",
        author: "Diana Sullivan",
    },
    {
        title: "City of Swords",
        author: "Sarah Martin",
    },
    {
        title: "The Endless Lord",
        author: "Raymond Martin",
    },
    {
        title: "Hero's Staff",
        author: "Raymond Martin",
    },
    {
        title: "City of the World",
        author: "Madeleine Schwab",
    },
    {
        title: "The Glimmering Company",
        author: "Laini Riordan",
    },
    {
        title: "King's Cleric",
        author: "Laini Riordan",
    },
    {
        title: "Quest of Time",
        author: "Andrzej Rothfuss",
    },
    {
        title: "Fool's Curse",
        author: "Patricia Bujold",
    },
    {
        title: "Fool's Paladin",
        author: "Ursula Lackey",
    },
    {
        title: "Throne of the Queen",
        author: "Katharine Jemisin",
    },
    {
        title: "Game of Swords",
        author: "Diana Cooper",
    },
    {
        title: "Cleric of Shadows",
        author: "Robert Gaiman",
    },
    {
        title: "Game of Thrones",
        author: "Robert Gaiman",
    },
    {
        title: "The Neverending Unicorn",
        author: "Diana Zelazny",
    },
    {
        title: "Horde of Glass",
        author: "Raymond McCaffrey",
    },
    {
        title: "The Neverending Queen",
        author: "Raymond McCaffrey",
    },
    {
        title: "Oath of Blood",
        author: "Trudi Sullivan",
    },
    {
        title: "Knight's Wheel",
        author: "Scott Martin",
    },
    {
        title: "Wizard's Prism",
        author: "Scott Martin",
    },
    {
        title: "Queen of Shadows",
        author: "Brandon Sanderson",
    },
    {
        title: "The Mysterious Paladin",
        author: "David Lynch",
    },
    {
        title: "The Deadly Sword",
        author: "David Lynch",
    },
    {
        title: "The Crystal Ship",
        author: "Andrzej Wurts",
    },
    {
        title: "Quest of Death",
        author: "Andrzej Cooper",
    },
    {
        title: "Army of Kings",
        author: "David Tolkien",
    },
    {
        title: "The Dragonbone Sword",
        author: "Tamora L'Engle",
    },
    {
        title: "The Mysterious Curse",
        author: "Tamora L'Engle",
    },
    {
        title: "Wizard's Throne",
        author: "Katharine Hobb",
    },
    {
        title: "Paladin of Radiance",
        author: "Katharine Hobb",
    },
    {
        title: "Curse of Magic",
        author: "Sarah Clare",
    },
    {
        title: "Name of Blood",
        author: "Patrick Kerr",
    },
    {
        title: "The Deadly Horde",
        author: "Patrick Kerr",
    },
    {
        title: "Garden of the Empire",
        author: "Michael Jordan",
    },
    {
        title: "The Lost Way",
        author: "Michael Jordan",
    },
    {
        title: "Wheel of Death",
        author: "Mark Bujold",
    },
    {
        title: "Assassin's Prince",
        author: "David Feist",
    },
    {
        title: "Hero's Assassin",
        author: "Janet Cooper",
    },
    {
        title: "Curse of Swords",
        author: "Cassanra Eddings",
    },
    {
        title: "Theft of Radiance",
        author: "Steven Canavan",
    },
    {
        title: "Unicorn of Swords",
        author: "Neil Weis",
    },
    {
        title: "The Magical Prince",
        author: "Sarah Gaiman",
    },
    {
        title: "The Black Way",
        author: "Cassanra Sullivan",
    },
    {
        title: "Hero's Prism",
        author: "Raymond Wurts",
    },
    {
        title: "Chair of Death",
        author: "Raymond Wurts",
    },
    {
        title: "Fool's Way",
        author: "Brandon Clare",
    },
    {
        title: "The Black Princess",
        author: "Brandon Clare",
    },
    {
        title: "Apprentice of Darkness",
        author: "John Kay",
    },
    {
        title: "Steven's Cave",
        author: "Trudi Pierce",
    },
    {
        title: "Quest of Glass",
        author: "George Jordan",
    },
    {
        title: "Theft of the Moon",
        author: "Mark Erikson",
    },
    {
        title: "The Crystal Army",
        author: "Mark Erikson",
    },
    {
        title: "Apprentice of Radiance",
        author: "Mark Erikson",
    },
    {
        title: "Steven's Ship",
        author: "Mark Erikson",
    },
    {
        title: "Lord of Darkness",
        author: "Steven Black",
    },
    {
        title: "Paladin of Time",
        author: "Steven Black",
    },
    {
        title: "Journey of Blood",
        author: "Patrick Lawrence",
    },
    {
        title: "The Shining Wizard",
        author: "Patrick Lawrence",
    },
    {
        title: "The Final Story",
        author: "Guy L'Engle",
    },
    {
        title: "Cleric of Death",
        author: "Janny Abercrombie",
    },
    {
        title: "The Final Cave",
        author: "Trudi Jones",
    },
    {
        title: "Assassin's King",
        author: "Rick Zelazny",
    },
    {
        title: "The Deadly Oath",
        author: "Diana Carriger",
    },
    {
        title: "Company of Wind",
        author: "Diana Carriger",
    },
    {
        title: "The Deadly Assassin",
        author: "Tamora Jones",
    },
    {
        title: "Theft of Radiance",
        author: "Janet Gaiman",
    },
    {
        title: "Magic's Assassin",
        author: "Andrzej Zelazny",
    },
    {
        title: "Wizard of Swords",
        author: "Holly Eddings",
    },
    {
        title: "The Lost Assassin",
        author: "Margaret Zelazny",
    },
    {
        title: "King's Unicorn",
        author: "John Kerr",
    },
    {
        title: "Princess of Chaos",
        author: "Joe Cooper",
    },
    {
        title: "Paladin of Blood",
        author: "Joe Cooper",
    },
    {
        title: "The Warded Way",
        author: "Joe Cooper",
    },
    {
        title: "King of Flame",
        author: "Scott Wurts",
    },
    {
        title: "Hero's Army",
        author: "David Maas",
    },
    {
        title: "The Holy Errand",
        author: "Andrzej Jordan",
    },
    {
        title: "The Lost Empire",
        author: "John Funke",
    },
    {
        title: "Queen's Curse",
        author: "Gail Carriger",
    },
    {
        title: "Unicorn of the World",
        author: "Gail Carriger",
    },
    {
        title: "The Crystal Cleric",
        author: "George Jemisin",
    },
    {
        title: "Journey of the Queen",
        author: "Laini Feist",
    },
    {
        title: "The Shining Oath",
        author: "Patrick Rothfuss",
    },
    {
        title: "Quest of Death",
        author: "Tad Maas",
    },
    {
        title: "Lord of the Empire",
        author: "Janny Cooper",
    },
    {
        title: "The Glimmering Name",
        author: "Janny Cooper",
    },
    {
        title: "The Warded Horde",
        author: "Roger Tolkien",
    },
    {
        title: "The Great Wheel",
        author: "Cassanra Hobb",
    },
    {
        title: "The Evil Wheel",
        author: "Victoria Clare",
    },
    {
        title: "The Evil Apprentice",
        author: "Cornelia Kay",
    },
    {
        title: "Hero's Way",
        author: "Janet Lawrence",
    },
    {
        title: "Knight's Cleric",
        author: "Katharine Eddings",
    },
    {
        title: "Dragon of Kings",
        author: "Brandon Kerr",
    },
    {
        title: "The Enormous Name",
        author: "Madeline Gaiman",
    },
    {
        title: "Wizard's Cleric",
        author: "George Williams",
    },
    {
        title: "The Black Quest",
        author: "Katharine Jordan",
    },
    {
        title: "King's Ship",
        author: "Janet L'Engle",
    },
    {
        title: "The Diamond King",
        author: "Andrzej Hobb",
    },
    {
        title: "Company of Time",
        author: "Andrzej Hobb",
    },
    {
        title: "Sword of the Queen",
        author: "Cornelia Taylor",
    },
    {
        title: "Prism of Ages",
        author: "Joe Sanderson",
    },
    {
        title: "Cleric of Glass",
        author: "Margaret Maas",
    },
    {
        title: "Unicorn of Plague",
        author: "Tad Feist",
    },
    {
        title: "The Deadly Throne",
        author: "Terry Abercrombie",
    },
    {
        title: "The Warded Chair",
        author: "Terry Abercrombie",
    },
    {
        title: "Story of Death",
        author: "Robin Sullivan",
    },
    {
        title: "Curse of Blood",
        author: "Tamora Hobb",
    },
    {
        title: "The Diamond Wizard",
        author: "Laini Schwab",
    },
    {
        title: "Game of Flame",
        author: "Laini Schwab",
    },
    {
        title: "Wizard's Prism",
        author: "Raymond Tolkien",
    },
    {
        title: "Knight's Horde",
        author: "Diana Riordan",
    },
    {
        title: "Princess of Death",
        author: "Janny Hobb",
    },
    {
        title: "Curse of the Stars",
        author: "Holly Taylor",
    },
    {
        title: "The Lost Staff",
        author: "Sarah Pratchet",
    },
    {
        title: "The Holy Horde",
        author: "Michael Kay",
    },
    {
        title: "The Holy Cleric",
        author: "Trudi Eddings",
    },
    {
        title: "Knight's Quest",
        author: "Susan Schwab",
    },
    {
        title: "Queen of the Stars",
        author: "Susan Schwab",
    },
    {
        title: "Curse of Blood",
        author: "Patrick Morris",
    },
    {
        title: "Queen of Blood",
        author: "Patrick Morris",
    },
    {
        title: "The Mysterious Horde",
        author: "David Zelazny",
    },
    {
        title: "The Holy Queen",
        author: "David Zelazny",
    },
    {
        title: "The Deadly Cleric",
        author: "Janet Lackey",
    },
    {
        title: "Assassin of Death",
        author: "Cornelia Bujold",
    },
    {
        title: "The Glimmering Cleric",
        author: "Roger Schwab",
    },
    {
        title: "Empire of Plague",
        author: "Cornelia Arden",
    },
    {
        title: "Apprentice of the Stars",
        author: "Holly Lawrence",
    },
    {
        title: "Unicorn of Magic",
        author: "Holly Lawrence",
    },
    {
        title: "Magic's Garden",
        author: "Katharine Weis",
    },
    {
        title: "Horde of Chaos",
        author: "Janet Abercrombie",
    },
    {
        title: "Magic's Errand",
        author: "Lois Jordan",
    },
    {
        title: "Fool's Paladin",
        author: "Madeleine Jordan",
    },
    {
        title: "King of the World",
        author: "Madeleine Jordan",
    },
    {
        title: "Quest of Plague",
        author: "Gail Sanderson",
    },
    {
        title: "Paladin of Swords",
        author: "Lois Caroll",
    },
    {
        title: "Fool's Wheel",
        author: "Madeleine McCaffrey",
    },
    {
        title: "The Endless Army",
        author: "Anne Lawrence",
    },
    {
        title: "Pawn of Shadows",
        author: "Michael Riordan",
    },
    {
        title: "Army of the World",
        author: "Madeline L'Engle",
    },
    {
        title: "Sword of Darkness",
        author: "Madeline Wurts",
    },
    {
        title: "Game of Shadows",
        author: "Madeline Wurts",
    },
    {
        title: "Name of Death",
        author: "Madeleine Caroll",
    },
    {
        title: "The Endless Curse",
        author: "Raymond Schwab",
    },
    {
        title: "Errand of the Forest",
        author: "Rick Black",
    },
    {
        title: "The Great Company",
        author: "Rick Black",
    },
    {
        title: "Wizard's Unicorn",
        author: "Victoria L'Engle",
    },
    {
        title: "Assassin's Garden",
        author: "Margaret Sullivan",
    },
    {
        title: "The Deadly Tale",
        author: "David Riordan",
    },
    {
        title: "Oath of the Stars",
        author: "David Riordan",
    },
    {
        title: "The Enormous Army",
        author: "Michael Eddings",
    },
    {
        title: "Way of the World",
        author: "Lewis Kay",
    },
    {
        title: "The Diamond Theft",
        author: "Cornelia Le Guin",
    },
    {
        title: "The Dragonbone Army",
        author: "Cornelia Le Guin",
    },
    {
        title: "Paladin of the Forest",
        author: "Tad Morris",
    },
    {
        title: "Theft of the Moon",
        author: "Tad Morris",
    },
    {
        title: "The Holy Story",
        author: "Tad Lynch",
    },
    {
        title: "The Glimmering Crown",
        author: "Lois Hobb",
    },
    {
        title: "Dragon of the Queen",
        author: "Guy Hobb",
    },
    {
        title: "The Neverending Pawn",
        author: "Cornelia Canavan",
    },
    {
        title: "Hero's King",
        author: "Cornelia Canavan",
    },
    {
        title: "The Black Throne",
        author: "Lois Bujold",
    },
    {
        title: "The Lost Empire",
        author: "Katharine Pierce",
    },
    {
        title: "Theft of Shadows",
        author: "Katharine Pierce",
    },
    {
        title: "Prism of Magic",
        author: "Michael Weis",
    },
    {
        title: "Company of Ages",
        author: "Michael Weis",
    },
    {
        title: "The Final Journey",
        author: "Michael Weis",
    },
    {
        title: "The Lost Theft",
        author: "Roger Black",
    },
    {
        title: "The Great Wish",
        author: "Roger Black",
    },
    {
        title: "Name of Thrones",
        author: "Terry Canavan",
    },
    {
        title: "The Last Wheel",
        author: "Terry Canavan",
    },
    {
        title: "The Endless Queen",
        author: "Terry Canavan",
    },
    {
        title: "Fool's Garden",
        author: "Neil Hobb",
    },
    {
        title: "The Holy Ship",
        author: "Robert Funke",
    },
    {
        title: "King's Prince",
        author: "Cornelia Black",
    },
    {
        title: "The Radiant Horde",
        author: "David Sullivan",
    },
    {
        title: "Curse of Thorns",
        author: "Tamora Pierce",
    },
    {
        title: "The Enormous Throne",
        author: "Lewis Weis",
    },
    {
        title: "Knight's Crown",
        author: "Tad Hobb",
    },
    {
        title: "The Final Lord",
        author: "Steven L'Engle",
    },
    {
        title: "Hero's Staff",
        author: "Steven L'Engle",
    },
    {
        title: "Assassin of Magic",
        author: "Steven L'Engle",
    },
    {
        title: "Assassin's Queen",
        author: "Guy Rothfuss",
    },
    {
        title: "The Golden Way",
        author: "Laini Lackey",
    },
    {
        title: "Assassin's Unicorn",
        author: "Cornelia Caroll",
    },
    {
        title: "Unicorn of the Forest",
        author: "Cornelia Caroll",
    },
    {
        title: "The Great Curse",
        author: "Ursula Riordan",
    },
    {
        title: "Curse of Ages",
        author: "Katharine Kay",
    },
    {
        title: "The Warded Crown",
        author: "Joe Erikson",
    },
    {
        title: "The Neverending Staff",
        author: "Joe Erikson",
    },
    {
        title: "The Lost Staff",
        author: "Trudi Tolkien",
    },
    {
        title: "The Dragonbone Journey",
        author: "Trudi Tolkien",
    },
    {
        title: "Wizard's King",
        author: "Robin Funke",
    },
    {
        title: "The Evil Cleric",
        author: "Raymond Maas",
    },
    {
        title: "Unicorn of Thorns",
        author: "Brandon Abercrombie",
    },
    {
        title: "Story of Death",
        author: "Laini Martin",
    },
    {
        title: "The Crystal Tale",
        author: "Laini Martin",
    },
    {
        title: "The Enormous Ranger",
        author: "Neil Jones",
    },
    {
        title: "Prince of the Forest",
        author: "Neil Carriger",
    },
    {
        title: "Company of the Queen",
        author: "Rick Jordan",
    },
    {
        title: "The Wild Curse",
        author: "Rick Jordan",
    },
    {
        title: "Curse of Thorns",
        author: "Patricia Jemisin",
    },
    {
        title: "The Glimmering Garden",
        author: "Patricia Jemisin",
    },
    {
        title: "The Evil Company",
        author: "Neil Taylor",
    },
    {
        title: "Prism of the Queen",
        author: "Neil Taylor",
    },
    {
        title: "The White Pawn",
        author: "Neil Taylor",
    },
    {
        title: "Errand of Radiance",
        author: "Neil Taylor",
    },
    {
        title: "The Last Empire",
        author: "Lewis Cooper",
    },
    {
        title: "Magic's Lord",
        author: "Patrick Taylor",
    },
    {
        title: "Game of Shadows",
        author: "Victoria Taylor",
    },
    {
        title: "Queen's Sword",
        author: "Brandon Weis",
    },
    {
        title: "The Last Crown",
        author: "Patricia Wurts",
    },
    {
        title: "Assassin's Queen",
        author: "Patricia Wurts",
    },
    {
        title: "The Endless Unicorn",
        author: "Patricia Wurts",
    },
    {
        title: "City of the World",
        author: "Brandon Williams",
    },
    {
        title: "The Enormous Errand",
        author: "Anne Sapkowski",
    },
    {
        title: "Game of Darkness",
        author: "Laini Lynch",
    },
    {
        title: "Wish of Chaos",
        author: "Raymond Sanderson",
    },
    {
        title: "Queen's Ship",
        author: "Rick Pratchet",
    },
    {
        title: "The Holy Army",
        author: "George Taylor",
    },
    {
        title: "Ranger of Wind",
        author: "George Taylor",
    },
    {
        title: "Garden of Death",
        author: "Lois Pierce",
    },
    {
        title: "Garden of Swords",
        author: "Lewis Tolkien",
    },
    {
        title: "Prince of the Forest",
        author: "Joe Sapkowski",
    },
    {
        title: "King's Journey",
        author: "Tamora Le Guin",
    },
    {
        title: "Fool's Story",
        author: "George Zelazny",
    },
    {
        title: "Steven's Empire",
        author: "Patrick Tolkien",
    },
    {
        title: "Wizard of Ages",
        author: "Scott McCaffrey",
    },
    {
        title: "Wizard's Paladin",
        author: "Scott McCaffrey",
    },
    {
        title: "Prince of Chaos",
        author: "Mark Gaiman",
    },
    {
        title: "Lord of the Queen",
        author: "Michael Bujold",
    },
    {
        title: "King of Plague",
        author: "Margaret Jordan",
    },
    {
        title: "Assassin of Swords",
        author: "Janet Jemisin",
    },
    {
        title: "The Holy Oath",
        author: "Ursula Jones",
    },
    {
        title: "Story of Magic",
        author: "Ursula Jones",
    },
    {
        title: "Knight's Ranger",
        author: "Cornelia Pierce",
    },
    {
        title: "Curse of Flame",
        author: "Robert Kay",
    },
    {
        title: "The Neverending Theft",
        author: "Roger Taylor",
    },
    {
        title: "Wizard's Errand",
        author: "Brandon Taylor",
    },
    {
        title: "Prince of Thorns",
        author: "Robin Jordan",
    },
    {
        title: "The White Unicorn",
        author: "Trudi Weis",
    },
    {
        title: "The Endless Empire",
        author: "Cassanra Jones",
    },
    {
        title: "King's Princess",
        author: "Madeline Weis",
    },
    {
        title: "Knight's Wish",
        author: "Joe Tolkien",
    },
    {
        title: "The Enormous Story",
        author: "Joe Tolkien",
    },
    {
        title: "The Lost Oath",
        author: "Neil L'Engle",
    },
    {
        title: "Princess of Death",
        author: "Neil L'Engle",
    },
    {
        title: "Queen's Name",
        author: "Robert Eddings",
    },
    {
        title: "The Holy Unicorn",
        author: "David Lawrence",
    },
    {
        title: "The Wild Prism",
        author: "Victoria Arden",
    },
    {
        title: "The Wild Ship",
        author: "Victoria Arden",
    },
    {
        title: "The Black Garden",
        author: "Janet Caroll",
    },
    {
        title: "Wizard's Curse",
        author: "Janet Arden",
    },
    {
        title: "Cave of Death",
        author: "Janet Rothfuss",
    },
    {
        title: "Assassin's City",
        author: "Janet Rothfuss",
    },
    {
        title: "The Enormous Ranger",
        author: "Katharine Schwab",
    },
    {
        title: "The Radiant Chair",
        author: "John Weis",
    },
    {
        title: "The Lost Cave",
        author: "Madeline McCaffrey",
    },
    {
        title: "Chair of Wind",
        author: "Madeline McCaffrey",
    },
    {
        title: "Queen's Journey",
        author: "Cornelia Carriger",
    },
    {
        title: "The Endless Wish",
        author: "Mark Wurts",
    },
    {
        title: "The Holy Princess",
        author: "Madeline Kay",
    },
    {
        title: "Queen's Lord",
        author: "Margaret Erikson",
    },
    {
        title: "The White Apprentice",
        author: "Terry Lackey",
    },
    {
        title: "Assassin of Flame",
        author: "Mark Arden",
    },
    {
        title: "Empire of Kings",
        author: "Lois McCaffrey",
    },
    {
        title: "The Lost Storm",
        author: "Margaret Jemisin",
    },
    {
        title: "Wizard's Wizard",
        author: "Gail L'Engle",
    },
    {
        title: "Staff of the Moon",
        author: "Gail L'Engle",
    },
    {
        title: "Queen's Game",
        author: "Terry Riordan",
    },
    {
        title: "The Shining Curse",
        author: "Roger Clare",
    },
    {
        title: "Name of the World",
        author: "Sarah Pierce",
    },
    {
        title: "Curse of Kings",
        author: "Katharine Le Guin",
    },
    {
        title: "The Wild King",
        author: "Terry Pratchet",
    },
    {
        title: "Hero's Company",
        author: "Roger Riordan",
    },
    {
        title: "The Shining Name",
        author: "Roger Riordan",
    },
    {
        title: "Wish of the World",
        author: "Roger Riordan",
    },
    {
        title: "Journey of Chaos",
        author: "Roger Riordan",
    },
    {
        title: "The Magical Cave",
        author: "Scott Tolkien",
    },
    {
        title: "Crown of Thrones",
        author: "David Gaiman",
    },
    {
        title: "The Mysterious Wizard",
        author: "Raymond Lawrence",
    },
    {
        title: "The Wild Ship",
        author: "Scott Le Guin",
    },
    {
        title: "Wizard's Sword",
        author: "Trudi Hobb",
    },
    {
        title: "Staff of Swords",
        author: "Brandon Cooper",
    },
    {
        title: "The Dragonbone Sword",
        author: "Patricia Sullivan",
    },
    {
        title: "The Last Army",
        author: "Tamora Canavan",
    },
    {
        title: "Steven's Name",
        author: "Tamora Canavan",
    },
    {
        title: "Queen of Swords",
        author: "Trudi Bujold",
    },
    {
        title: "Steven's Ship",
        author: "Susan Gaiman",
    },
    {
        title: "Errand of the Moon",
        author: "Susan Gaiman",
    },
    {
        title: "The Crystal Lord",
        author: "Susan Gaiman",
    },
    {
        title: "The White Prism",
        author: "Robin Schwab",
    },
    {
        title: "The Great Journey",
        author: "Margaret Tolkien",
    },
    {
        title: "Theft of Plague",
        author: "Madeleine Feist",
    },
    {
        title: "The Last Throne",
        author: "Madeleine Feist",
    },
    {
        title: "The Deadly Story",
        author: "Madeleine Feist",
    },
    {
        title: "The Shining Tale",
        author: "George Canavan",
    },
    {
        title: "The Dark Horde",
        author: "Michael Morris",
    },
    {
        title: "Dragon of the World",
        author: "Alix Taylor",
    },
    {
        title: "Wizard's Wizard",
        author: "Alix Taylor",
    },
    {
        title: "Wizard's Game",
        author: "Scott Schwab",
    },
    {
        title: "Queen's Prism",
        author: "Janet Black",
    },
    {
        title: "The Radiant Game",
        author: "Mercedes Sapkowski",
    },
    {
        title: "City of Darkness",
        author: "David Morris",
    },
    {
        title: "Knight's Oath",
        author: "David Morris",
    },
    {
        title: "Crown of Glass",
        author: "Robert Sullivan",
    },
    {
        title: "The Dark City",
        author: "Laini Zelazny",
    },
    {
        title: "The White Empire",
        author: "Tamora Caroll",
    },
    {
        title: "The Holy Sword",
        author: "Scott Lackey",
    },
    {
        title: "The Warded Wish",
        author: "Scott Lackey",
    },
    {
        title: "The Mysterious Prince",
        author: "Scott Abercrombie",
    },
    {
        title: "Paladin of Kings",
        author: "Scott Abercrombie",
    },
    {
        title: "The Endless Prism",
        author: "Andrzej Sanderson",
    },
    {
        title: "Name of the Moon",
        author: "Scott Feist",
    },
    {
        title: "Hero's Staff",
        author: "Neil Lackey",
    },
    {
        title: "The Warded Garden",
        author: "Guy Bujold",
    },
    {
        title: "King's Curse",
        author: "Robin Brooks",
    },
    {
        title: "The Holy Unicorn",
        author: "Robert McCaffrey",
    },
    {
        title: "Magic's Journey",
        author: "Cassanra Wurts",
    },
    {
        title: "Hero's Assassin",
        author: "Joe Kerr",
    },
    {
        title: "Curse of Shadows",
        author: "Joe Kerr",
    },
    {
        title: "The Wild Army",
        author: "Madeleine Wurts",
    },
    {
        title: "Ranger of Time",
        author: "Mercedes Sanderson",
    },
    {
        title: "Assassin's Wheel",
        author: "Mercedes Sanderson",
    },
    {
        title: "Wizard's Journey",
        author: "Janet McCaffrey",
    },
    {
        title: "Company of Shadows",
        author: "Janet McCaffrey",
    },
    {
        title: "Army of Blood",
        author: "Trudi Jemisin",
    },
    {
        title: "The Lost Dragon",
        author: "Janet Erikson",
    },
    {
        title: "Cleric of Ages",
        author: "Margaret Gaiman",
    },
    {
        title: "The Magical Queen",
        author: "Rick Hobb",
    },
    {
        title: "The Dark Unicorn",
        author: "David Black",
    },
    {
        title: "The Lost Ship",
        author: "David Black",
    },
    {
        title: "The Warded Name",
        author: "Tamora Kerr",
    },
    {
        title: "Way of Darkness",
        author: "Ursula Feist",
    },
    {
        title: "The Deadly Crown",
        author: "Ursula Feist",
    },
    {
        title: "Steven's Assassin",
        author: "Joe Bujold",
    },
    {
        title: "Magic's Wish",
        author: "Susan Morris",
    },
    {
        title: "Knight's Lord",
        author: "Rick Clare",
    },
    {
        title: "Apprentice of Shadows",
        author: "Rick Clare",
    },
    {
        title: "Prince of Kings",
        author: "Rick Clare",
    },
    {
        title: "The Wild Unicorn",
        author: "David Williams",
    },
    {
        title: "Army of the Queen",
        author: "David Williams",
    },
    {
        title: "Hero's Journey",
        author: "Janny Lawrence",
    },
    {
        title: "The Dragonbone City",
        author: "Janny Lawrence",
    },
    {
        title: "Queen's City",
        author: "Joe Le Guin",
    },
    {
        title: "Wheel of Time",
        author: "Gail Cooper",
    },
    {
        title: "Story of Blood",
        author: "Gail Cooper",
    },
    {
        title: "The Great Wheel",
        author: "Susan Brooks",
    },
    {
        title: "King of Darkness",
        author: "Susan Brooks",
    },
    {
        title: "King's Name",
        author: "Lewis Morris",
    },
    {
        title: "Wizard's Ranger",
        author: "Cassanra Lackey",
    },
    {
        title: "The Warded Quest",
        author: "Janny Martin",
    },
    {
        title: "Empire of Glass",
        author: "Janny Martin",
    },
    {
        title: "The Neverending Unicorn",
        author: "Katharine Funke",
    },
    {
        title: "Assassin's Story",
        author: "Sarah Williams",
    },
    {
        title: "Errand of Magic",
        author: "Sarah Williams",
    },
    {
        title: "The Holy City",
        author: "Sarah Williams",
    },
    {
        title: "Lord of Magic",
        author: "Madeline Eddings",
    },
    {
        title: "Dragon of Flame",
        author: "Tamora Tolkien",
    },
    {
        title: "The Endless Oath",
        author: "Mercedes Brooks",
    },
    {
        title: "Knight's King",
        author: "Mercedes Brooks",
    },
    {
        title: "The Dark Wizard",
        author: "Scott Eddings",
    },
    {
        title: "Wizard of Time",
        author: "Gail Morris",
    },
    {
        title: "Wizard of Glass",
        author: "Madeleine Sullivan",
    },
    {
        title: "The Last Assassin",
        author: "Steven Caroll",
    },
    {
        title: "Pawn of Radiance",
        author: "Trudi Kay",
    },
    {
        title: "The Last Ranger",
        author: "Gail Kay",
    },
    {
        title: "The Deadly Storm",
        author: "John Lawrence",
    },
    {
        title: "Knight's Sword",
        author: "Anne McCaffrey",
    },
    {
        title: "Dragon of Shadows",
        author: "Anne McCaffrey",
    },
    {
        title: "King of Darkness",
        author: "Anne McCaffrey",
    },
    {
        title: "The Mysterious Assassin",
        author: "Scott Caroll",
    },
    {
        title: "Fool's Prince",
        author: "Janny Jemisin",
    },
    {
        title: "Sword of Darkness",
        author: "Holly Erikson",
    },
    {
        title: "Cave of the Queen",
        author: "Margaret Schwab",
    },
    {
        title: "The Deadly Apprentice",
        author: "Margaret Schwab",
    },
    {
        title: "Sword of Darkness",
        author: "Mercedes Rothfuss",
    },
    {
        title: "Wish of Magic",
        author: "Mercedes Rothfuss",
    },
    {
        title: "Quest of Thorns",
        author: "Mercedes Rothfuss",
    },
    {
        title: "Assassin's Story",
        author: "Janet Williams",
    },
    {
        title: "Chair of Time",
        author: "Janet Canavan",
    },
    {
        title: "Cave of the Forest",
        author: "Janny Taylor",
    },
    {
        title: "City of Plague",
        author: "Janny Taylor",
    },
    {
        title: "Ship of Plague",
        author: "Holly L'Engle",
    },
    {
        title: "Cave of the Empire",
        author: "Guy Pratchet",
    },
    {
        title: "The Mysterious Wish",
        author: "Tad Jones",
    },
    {
        title: "The Golden Way",
        author: "Tad Jones",
    },
    {
        title: "Dragon of Death",
        author: "Laini Eddings",
    },
    {
        title: "Hero's Horde",
        author: "Terry Lawrence",
    },
    {
        title: "Unicorn of the Moon",
        author: "Rick Martin",
    },
    {
        title: "Ship of Ages",
        author: "Robin Abercrombie",
    },
    {
        title: "Ship of Flame",
        author: "Madeline Kerr",
    },
    {
        title: "Pawn of Thorns",
        author: "Madeline Kerr",
    },
    {
        title: "King's Prince",
        author: "Victoria Brooks",
    },
    {
        title: "The Warded Cave",
        author: "Ursula Arden",
    },
    {
        title: "Magic's Horde",
        author: "Ursula Arden",
    },
    {
        title: "The Mysterious Throne",
        author: "Mark Abercrombie",
    },
    {
        title: "Fool's Wish",
        author: "Mark Abercrombie",
    },
    {
        title: "Assassin's Tale",
        author: "Scott Canavan",
    },
    {
        title: "The Mysterious City",
        author: "Madeleine Lackey",
    },
    {
        title: "The Final Game",
        author: "Madeleine Lackey",
    },
    {
        title: "Horde of Glass",
        author: "Madeline Sapkowski",
    },
    {
        title: "Fool's Storm",
        author: "Tamora Bujold",
    },
    {
        title: "Paladin of Wind",
        author: "Laini Weis",
    },
    {
        title: "Name of the Empire",
        author: "Lewis Caroll",
    },
    {
        title: "The Magical Name",
        author: "Patrick Brooks",
    },
    {
        title: "The Holy Storm",
        author: "Mercedes Black",
    },
    {
        title: "Ship of Thrones",
        author: "Holly McCaffrey",
    },
    {
        title: "The Dark Assassin",
        author: "Holly McCaffrey",
    },
    {
        title: "The Deadly Game",
        author: "Cassanra Sapkowski",
    },
    {
        title: "Army of Magic",
        author: "Terry Kay",
    },
    {
        title: "Queen's Prince",
        author: "Susan Lawrence",
    },
    {
        title: "Knight's Prism",
        author: "John Rothfuss",
    },
    {
        title: "Assassin of Wind",
        author: "John Rothfuss",
    },
    {
        title: "The Last Sword",
        author: "Steven Morris",
    },
    {
        title: "Cleric of Shadows",
        author: "Sarah Funke",
    },
    {
        title: "Wheel of Flame",
        author: "Madeleine Cooper",
    },
    {
        title: "The Endless Theft",
        author: "Anne Maas",
    },
    {
        title: "The Shining Assassin",
        author: "Patrick Jemisin",
    },
    {
        title: "Knight's City",
        author: "Sarah Jones",
    },
    {
        title: "Princess of Plague",
        author: "George Abercrombie",
    },
    {
        title: "Cave of the World",
        author: "Tad Funke",
    },
    {
        title: "Game of Ages",
        author: "Patrick Weis",
    },
    {
        title: "Chair of Darkness",
        author: "Patrick Weis",
    },
    {
        title: "Garden of Magic",
        author: "Madeleine Kay",
    },
    {
        title: "Story of Radiance",
        author: "Katharine Martin",
    },
    {
        title: "Prince of Thrones",
        author: "Mercedes Abercrombie",
    },
    {
        title: "The Deadly Unicorn",
        author: "Holly Pratchet",
    },
    {
        title: "Company of the Queen",
        author: "Janet Weis",
    },
    {
        title: "The Neverending Oath",
        author: "Guy Schwab",
    },
    {
        title: "Army of Wind",
        author: "Trudi Martin",
    },
    {
        title: "The White Cave",
        author: "Margaret Carriger",
    },
    {
        title: "Paladin of Flame",
        author: "Joe Taylor",
    },
    {
        title: "The White Theft",
        author: "Terry Clare",
    },
    {
        title: "The Crystal Pawn",
        author: "Laini Sapkowski",
    },
    {
        title: "The White Chair",
        author: "Madeleine Gaiman",
    },
    {
        title: "The Last Dragon",
        author: "Madeleine Gaiman",
    },
    {
        title: "Assassin's Pawn",
        author: "Madeleine Gaiman",
    },
    {
        title: "The Warded Throne",
        author: "Cornelia Lynch",
    },
    {
        title: "The Last City",
        author: "David Arden",
    },
    {
        title: "Garden of the Empire",
        author: "Roger Erikson",
    },
    {
        title: "Cave of Death",
        author: "Katharine Maas",
    },
    {
        title: "Storm of Shadows",
        author: "Joe Pratchet",
    },
    {
        title: "Oath of Shadows",
        author: "Guy Pierce",
    },
    {
        title: "King's Throne",
        author: "Tad Lackey",
    },
    {
        title: "The White Wheel",
        author: "Tad Lackey",
    },
    {
        title: "Magic's Dragon",
        author: "Michael Le Guin",
    },
    {
        title: "Hero's Empire",
        author: "Tamora Carriger",
    },
    {
        title: "Garden of Darkness",
        author: "Tamora Carriger",
    },
    {
        title: "Assassin's Game",
        author: "Tamora Carriger",
    },
    {
        title: "The Evil Errand",
        author: "Tamora Carriger",
    },
    {
        title: "The Crystal Paladin",
        author: "Patrick Cooper",
    },
    {
        title: "The Enormous Prism",
        author: "Patrick Cooper",
    },
    {
        title: "The Crystal Chair",
        author: "Janny Black",
    },
    {
        title: "Curse of Shadows",
        author: "Diana Arden",
    },
    {
        title: "The Golden Dragon",
        author: "Michael Sapkowski",
    },
    {
        title: "The Shining Name",
        author: "Andrzej Lackey",
    },
    {
        title: "Steven's Unicorn",
        author: "Gail Arden",
    },
    {
        title: "Wish of Ages",
        author: "Lewis Clare",
    },
    {
        title: "The Wild Game",
        author: "Trudi McCaffrey",
    },
    {
        title: "Queen's Garden",
        author: "David Canavan",
    },
    {
        title: "The Final Way",
        author: "Robert Morris",
    },
    {
        title: "Queen's Assassin",
        author: "Rick Schwab",
    },
    {
        title: "Company of Radiance",
        author: "Rick Schwab",
    },
    {
        title: "The Final Paladin",
        author: "David Carriger",
    },
    {
        title: "The Golden Wizard",
        author: "George Sullivan",
    },
    {
        title: "Curse of Time",
        author: "George Sullivan",
    },
    {
        title: "Knight's Apprentice",
        author: "Madeline Jemisin",
    },
    {
        title: "The Evil Name",
        author: "Lewis Wurts",
    },
    {
        title: "Hero's Wheel",
        author: "Terry Feist",
    },
    {
        title: "Staff of Glass",
        author: "Roger Maas",
    },
    {
        title: "Quest of Wind",
        author: "Roger Maas",
    },
    {
        title: "Storm of Radiance",
        author: "Roger Maas",
    },
    {
        title: "Wizard's Curse",
        author: "Scott Clare",
    },
    {
        title: "The Mysterious Cave",
        author: "Patricia Arden",
    },
    {
        title: "The Golden Throne",
        author: "Patricia Arden",
    },
    {
        title: "Ranger of the Moon",
        author: "Neil Abercrombie",
    },
    {
        title: "Magic's Quest",
        author: "Neil Abercrombie",
    },
    {
        title: "Hero's Chair",
        author: "Terry Rothfuss",
    },
    {
        title: "Errand of Swords",
        author: "Janny Carriger",
    },
    {
        title: "Wizard's City",
        author: "Robert Wurts",
    },
    {
        title: "King of Thrones",
        author: "Mark Riordan",
    },
    {
        title: "The Evil Assassin",
        author: "Alix Black",
    },
    {
        title: "The Wild Throne",
        author: "Mercedes Pratchet",
    },
    {
        title: "Army of Radiance",
        author: "Rick Riordan",
    },
    {
        title: "Storm of Darkness",
        author: "Susan Erikson",
    },
    {
        title: "Chair of Ages",
        author: "Margaret Weis",
    },
    {
        title: "The Wild Prism",
        author: "Madeleine Funke",
    },
    {
        title: "Wish of the World",
        author: "Diana Schwab",
    },
    {
        title: "Assassin's Game",
        author: "Roger Cooper",
    },
    {
        title: "The Shining Tale",
        author: "Patricia L'Engle",
    },
    {
        title: "Throne of Kings",
        author: "Susan Arden",
    },
    {
        title: "The Endless Unicorn",
        author: "Holly Schwab",
    },
    {
        title: "Wizard's Dragon",
        author: "Cornelia Riordan",
    },
    {
        title: "Wish of Darkness",
        author: "Madeleine Maas",
    },
    {
        title: "Assassin's Lord",
        author: "Madeleine Maas",
    },
    {
        title: "Wizard's City",
        author: "Patricia Pratchet",
    },
    {
        title: "The Magical Game",
        author: "Holly Arden",
    },
    {
        title: "The Dragonbone Staff",
        author: "Neil Arden",
    },
    {
        title: "Magic's Company",
        author: "Sarah Jemisin",
    },
    {
        title: "Wish of Glass",
        author: "Sarah Jemisin",
    },
    {
        title: "The Final Wheel",
        author: "Holly Carriger",
    },
    {
        title: "Lord of the Empire",
        author: "Susan Canavan",
    },
    {
        title: "The Neverending Game",
        author: "Margaret L'Engle",
    },
    {
        title: "Fool's Storm",
        author: "Victoria Zelazny",
    },
    {
        title: "Prince of Wind",
        author: "Steven Jones",
    },
    {
        title: "Assassin's Name",
        author: "Steven Jones",
    },
    {
        title: "Steven's Sword",
        author: "Janny Kay",
    },
    {
        title: "Staff of the Queen",
        author: "Patrick Black",
    },
    {
        title: "The Glimmering Tale",
        author: "David Cooper",
    },
    {
        title: "Oath of the Empire",
        author: "David Cooper",
    },
    {
        title: "Game of the Empire",
        author: "Cassanra Rothfuss",
    },
    {
        title: "The Holy Way",
        author: "Cassanra Rothfuss",
    },
    {
        title: "Ranger of Glass",
        author: "Lois Lackey",
    },
    {
        title: "Tale of the World",
        author: "David Brooks",
    },
    {
        title: "The Final Chair",
        author: "Robert Tolkien",
    },
    {
        title: "Assassin of Wind",
        author: "Sarah Erikson",
    },
    {
        title: "Wish of the Forest",
        author: "Madeline Canavan",
    },
    {
        title: "Knight's Apprentice",
        author: "Cornelia Funke",
    },
    {
        title: "The Black Unicorn",
        author: "Rick L'Engle",
    },
    {
        title: "Way of Ages",
        author: "Janny Zelazny",
    },
    {
        title: "The Evil Company",
        author: "Margaret Kerr",
    },
    {
        title: "Hero's Princess",
        author: "Patrick Bujold",
    },
    {
        title: "The Wild Cave",
        author: "Scott Pierce",
    },
    {
        title: "Wizard's Wheel",
        author: "Scott Pierce",
    },
    {
        title: "Fool's Wizard",
        author: "Laini Jemisin",
    },
    {
        title: "Wizard of Blood",
        author: "Laini Jemisin",
    },
    {
        title: "Princess of the Moon",
        author: "Madeleine Lawrence",
    },
    {
        title: "Journey of Ages",
        author: "Scott Brooks",
    },
    {
        title: "Knight's Queen",
        author: "Scott Brooks",
    },
    {
        title: "Hero's Unicorn",
        author: "Mark Weis",
    },
    {
        title: "The Diamond Cave",
        author: "Madeline Williams",
    },
    {
        title: "Cleric of Kings",
        author: "Madeline Williams",
    },
    {
        title: "Name of Time",
        author: "Guy Morris",
    },
    {
        title: "King's Ranger",
        author: "Robin Wurts",
    },
    {
        title: "The Wild Assassin",
        author: "Robin Wurts",
    },
    {
        title: "The Wild Wheel",
        author: "Mercedes Jordan",
    },
    {
        title: "Princess of the Empire",
        author: "Terry Eddings",
    },
    {
        title: "The Lost Prism",
        author: "Robin L'Engle",
    },
    {
        title: "Wizard of Plague",
        author: "Madeleine Pierce",
    },
    {
        title: "King of Plague",
        author: "Patrick Le Guin",
    },
    {
        title: "Magic's Princess",
        author: "Patrick Le Guin",
    },
    {
        title: "Crown of Radiance",
        author: "Tamora Lynch",
    },
    {
        title: "The Evil Throne",
        author: "Katharine L'Engle",
    },
    {
        title: "The Evil Queen",
        author: "Alix Brooks",
    },
    {
        title: "Cave of Radiance",
        author: "Susan Feist",
    },
    {
        title: "The Warded Crown",
        author: "Robin Sapkowski",
    },
    {
        title: "Pawn of the Empire",
        author: "Brandon Rothfuss",
    },
    {
        title: "Queen's Pawn",
        author: "Brandon Martin",
    },
    {
        title: "Unicorn of the Moon",
        author: "Lewis Jones",
    },
    {
        title: "The Radiant Pawn",
        author: "Ursula L'Engle",
    },
    {
        title: "Quest of Glass",
        author: "Ursula L'Engle",
    },
    {
        title: "The Mysterious Staff",
        author: "Holly Morris",
    },
    {
        title: "Steven's Cave",
        author: "George Cooper",
    },
    {
        title: "Wizard's Chair",
        author: "Scott Gaiman",
    },
    {
        title: "Knight's Throne",
        author: "Patrick Gaiman",
    },
    {
        title: "The Magical Prism",
        author: "Patrick Gaiman",
    },
    {
        title: "Fool's Oath",
        author: "Rick Kay",
    },
    {
        title: "Company of Darkness",
        author: "Cassanra Le Guin",
    },
    {
        title: "The Glimmering Errand",
        author: "Cassanra Funke",
    },
    {
        title: "Wish of Death",
        author: "Katharine Williams",
    },
    {
        title: "Assassin of Thorns",
        author: "Patricia Lackey",
    },
    {
        title: "Hero's Princess",
        author: "Patrick Arden",
    },
    {
        title: "The Last Journey",
        author: "Brandon Carriger",
    },
    {
        title: "Prism of Ages",
        author: "Ursula Weis",
    },
    {
        title: "King's Game",
        author: "Victoria Sullivan",
    },
    {
        title: "King's Wish",
        author: "Laini Abercrombie",
    },
    {
        title: "Knight's Lord",
        author: "John Bujold",
    },
    {
        title: "The Warded Unicorn",
        author: "Raymond Black",
    },
    {
        title: "The Lost Ranger",
        author: "Roger Sapkowski",
    },
    {
        title: "Prince of Ages",
        author: "Roger Sapkowski",
    },
    {
        title: "Prism of Ages",
        author: "George Riordan",
    },
    {
        title: "King's Ranger",
        author: "Janny Gaiman",
    },
    {
        title: "Steven's Oath",
        author: "Margaret Lynch",
    },
    {
        title: "Name of Blood",
        author: "Patrick Jones",
    },
    {
        title: "The White Cleric",
        author: "Michael Zelazny",
    },
    {
        title: "Assassin's Chair",
        author: "Michael Zelazny",
    },
    {
        title: "Hero's Quest",
        author: "Cassanra Lynch",
    },
    {
        title: "The Shining Errand",
        author: "Sarah Hobb",
    },
    {
        title: "Lord of Magic",
        author: "Laini Arden",
    },
    {
        title: "Wizard's Name",
        author: "Patrick Riordan",
    },
    {
        title: "Game of Magic",
        author: "Margaret Black",
    },
    {
        title: "Way of Shadows",
        author: "Diana Lynch",
    },
    {
        title: "The Evil Story",
        author: "Brandon Bujold",
    },
    {
        title: "Steven's Theft",
        author: "Steven Carriger",
    },
    {
        title: "Wizard of Chaos",
        author: "Madeline Brooks",
    },
    {
        title: "Garden of Time",
        author: "Madeline Brooks",
    },
    {
        title: "The Shining Storm",
        author: "Susan Rothfuss",
    },
    {
        title: "The Evil Theft",
        author: "John Feist",
    },
    {
        title: "Queen's Queen",
        author: "John Feist",
    },
    {
        title: "City of Flame",
        author: "Madeleine Le Guin",
    },
    {
        title: "Cave of Blood",
        author: "Steven McCaffrey",
    },
    {
        title: "Fool's Garden",
        author: "Raymond Gaiman",
    },
    {
        title: "The Lost Game",
        author: "Tad Riordan",
    },
    {
        title: "The Last Name",
        author: "Tad Riordan",
    },
    {
        title: "Throne of Thrones",
        author: "Margaret Funke",
    },
    {
        title: "The Enormous City",
        author: "Robert Lawrence",
    },
    {
        title: "Crown of the Moon",
        author: "Guy Martin",
    },
    {
        title: "The Glimmering Pawn",
        author: "Patricia Riordan",
    },
    {
        title: "The Great Cave",
        author: "Tad Sullivan",
    },
    {
        title: "Steven's Errand",
        author: "Janet Sullivan",
    },
    {
        title: "Chair of Kings",
        author: "Janet Sullivan",
    },
    {
        title: "Errand of the Moon",
        author: "Cassanra Pierce",
    },
    {
        title: "Magic's Dragon",
        author: "Mercedes Tolkien",
    },
    {
        title: "The Mysterious Lord",
        author: "Katharine Gaiman",
    },
    {
        title: "Journey of Chaos",
        author: "Patrick Schwab",
    },
    {
        title: "King's Garden",
        author: "Katharine Lawrence",
    },
    {
        title: "Lord of Plague",
        author: "Mercedes Jemisin",
    },
    {
        title: "Steven's Paladin",
        author: "Tad Williams",
    },
    {
        title: "Journey of the Forest",
        author: "Trudi Clare",
    },
    {
        title: "The Holy King",
        author: "Sarah Kerr",
    },
    {
        title: "The Golden Errand",
        author: "Sarah Kerr",
    },
    {
        title: "Oath of Glass",
        author: "Guy Erikson",
    },
    {
        title: "Wizard's Throne",
        author: "Victoria Weis",
    },
    {
        title: "Horde of Death",
        author: "Patrick Jordan",
    },
    {
        title: "Assassin's Oath",
        author: "Steven Schwab",
    },
    {
        title: "The Radiant Empire",
        author: "Terry Black",
    },
    {
        title: "Knight's Empire",
        author: "George Pierce",
    },
    {
        title: "The Crystal Dragon",
        author: "George Pierce",
    },
    {
        title: "Queen's Empire",
        author: "Holly Riordan",
    },
    {
        title: "The Warded Empire",
        author: "Holly Riordan",
    },
    {
        title: "Horde of Time",
        author: "Madeline Le Guin",
    },
    {
        title: "The Dragonbone Apprentice",
        author: "Laini Lawrence",
    },
    {
        title: "King's Way",
        author: "Joe Caroll",
    },
    {
        title: "The Endless Horde",
        author: "Joe Caroll",
    },
    {
        title: "The Deadly Theft",
        author: "Scott L'Engle",
    },
    {
        title: "Wizard's Lord",
        author: "Patricia Maas",
    },
    {
        title: "The Endless Crown",
        author: "Ursula Canavan",
    },
    {
        title: "The White Dragon",
        author: "Neil Clare",
    },
    {
        title: "Queen's Army",
        author: "Roger Carriger",
    },
    {
        title: "The Final Ranger",
        author: "Michael Kerr",
    },
    {
        title: "Garden of Plague",
        author: "Diana Sapkowski",
    },
    {
        title: "Wheel of the Forest",
        author: "Steven Gaiman",
    },
    {
        title: "Assassin's Wheel",
        author: "Steven Gaiman",
    },
    {
        title: "The Deadly Unicorn",
        author: "Madeleine Erikson",
    },
    {
        title: "Fool's Prince",
        author: "Holly Martin",
    },
    {
        title: "The Wild Tale",
        author: "Lewis Lawrence",
    },
    {
        title: "Quest of Shadows",
        author: "Neil Williams",
    },
    {
        title: "Army of the Empire",
        author: "Lois Abercrombie",
    },
    {
        title: "Magic's Prince",
        author: "Rick Sapkowski",
    },
    {
        title: "Prince of Death",
        author: "Scott Taylor",
    },
    {
        title: "The Magical Staff",
        author: "Steven Abercrombie",
    },
    {
        title: "Queen's Wheel",
        author: "Robin Pierce",
    },
    {
        title: "Hero's Unicorn",
        author: "John Riordan",
    },
    {
        title: "Wizard of the World",
        author: "Diana Jemisin",
    },
    {
        title: "The Wild King",
        author: "Guy Arden",
    },
    {
        title: "Chair of Plague",
        author: "Neil Jordan",
    },
    {
        title: "Wizard's Princess",
        author: "Neil Jordan",
    },
    {
        title: "The Warded Story",
        author: "George Caroll",
    },
    {
        title: "Unicorn of the Moon",
        author: "Rick Weis",
    },
    {
        title: "Cleric of Death",
        author: "Laini Pratchet",
    },
    {
        title: "Wizard's Queen",
        author: "Robert Williams",
    },
    {
        title: "The Magical Apprentice",
        author: "George McCaffrey",
    },
    {
        title: "The Final Queen",
        author: "Andrzej Williams",
    },
    {
        title: "Fool's Staff",
        author: "Margaret Caroll",
    },
    {
        title: "Steven's Paladin",
        author: "Diana Bujold",
    },
    {
        title: "Cave of Plague",
        author: "Diana Bujold",
    },
    {
        title: "Knight's Empire",
        author: "Gail Schwab",
    },
    {
        title: "The Crystal Theft",
        author: "Robin Lynch",
    },
    {
        title: "The Enormous Wizard",
        author: "Ursula Caroll",
    },
    {
        title: "Curse of Flame",
        author: "Andrzej Sapkowski",
    },
    {
        title: "King's Crown",
        author: "George Rothfuss",
    },
    {
        title: "Assassin's Tale",
        author: "Katharine Riordan",
    },
    {
        title: "The Neverending Pawn",
        author: "Ursula Clare",
    },
    {
        title: "Chair of Chaos",
        author: "Patrick Carriger",
    },
    {
        title: "Knight's Name",
        author: "Steven Arden",
    },
    {
        title: "Knight's Cave",
        author: "Mercedes Maas",
    },
    {
        title: "The Deadly Prism",
        author: "Mercedes Maas",
    },
    {
        title: "Prism of Swords",
        author: "Brandon Canavan",
    },
    {
        title: "Story of Glass",
        author: "Mercedes Lynch",
    },
    {
        title: "Crown of Ages",
        author: "Michael Pierce",
    },
    {
        title: "The Diamond Wish",
        author: "Michael Pierce",
    },
    {
        title: "King's Quest",
        author: "David Kay",
    },
    {
        title: "The Great Company",
        author: "Laini Cooper",
    },
    {
        title: "The Black Cleric",
        author: "Lewis Sapkowski",
    },
    {
        title: "Ranger of Shadows",
        author: "Brandon Lackey",
    },
    {
        title: "The Holy Name",
        author: "Robert Weis",
    },
    {
        title: "The Neverending Curse",
        author: "Laini Tolkien",
    },
    {
        title: "Curse of Blood",
        author: "Neil Cooper",
    },
    {
        title: "Chair of the Stars",
        author: "Holly Jones",
    },
    {
        title: "The Last Princess",
        author: "Neil Erikson",
    },
    {
        title: "King of Death",
        author: "Terry Tolkien",
    },
    {
        title: "Crown of Darkness",
        author: "Madeline Tolkien",
    },
    {
        title: "Story of the Stars",
        author: "Guy Zelazny",
    },
    {
        title: "The Crystal Cave",
        author: "George Schwab",
    },
    {
        title: "The Golden Ship",
        author: "Tad Sapkowski",
    },
    {
        title: "The Neverending Company",
        author: "Katharine McCaffrey",
    },
    {
        title: "The Deadly Apprentice",
        author: "Laini Funke",
    },
    {
        title: "The Golden Wish",
        author: "Lois Eddings",
    },
    {
        title: "The Holy Tale",
        author: "Gail Martin",
    },
    {
        title: "King's Theft",
        author: "Lewis Jemisin",
    },
    {
        title: "The Last Cleric",
        author: "Guy Sapkowski",
    },
    {
        title: "The Golden Quest",
        author: "Madeleine Bujold",
    },
    {
        title: "The Glimmering Army",
        author: "Madeleine Bujold",
    },
    {
        title: "Staff of Darkness",
        author: "Steven Jemisin",
    },
    {
        title: "Knight's Paladin",
        author: "Steven Jemisin",
    },
    {
        title: "Story of Shadows",
        author: "Steven Jemisin",
    },
    {
        title: "Sword of the Moon",
        author: "Roger Weis",
    },
    {
        title: "Hero's Prince",
        author: "Cassanra Black",
    },
    {
        title: "The Dragonbone Horde",
        author: "Cornelia Maas",
    },
    {
        title: "Game of Chaos",
        author: "Cornelia Maas",
    },
    {
        title: "Hero's Pawn",
        author: "Anne Taylor",
    },
    {
        title: "The Dragonbone Tale",
        author: "Trudi Feist",
    },
    {
        title: "The Final King",
        author: "George Bujold",
    },
    {
        title: "The White Wizard",
        author: "Michael Jemisin",
    },
    {
        title: "Unicorn of Time",
        author: "Terry Hobb",
    },
    {
        title: "Tale of the Forest",
        author: "Roger Lynch",
    },
    {
        title: "The Endless Way",
        author: "Madeleine Abercrombie",
    },
    {
        title: "Wizard's Assassin",
        author: "Andrzej Eddings",
    },
    {
        title: "The Dragonbone Dragon",
        author: "Robin Canavan",
    },
    {
        title: "Chair of Blood",
        author: "Robin Canavan",
    },
    {
        title: "Fool's Journey",
        author: "Scott Hobb",
    },
    {
        title: "The Endless Prism",
        author: "Scott Hobb",
    },
    {
        title: "Knight's Story",
        author: "Susan Clare",
    },
    {
        title: "The Shining Assassin",
        author: "Scott Sullivan",
    },
    {
        title: "Staff of Wind",
        author: "Tamora Wurts",
    },
    {
        title: "Cleric of Radiance",
        author: "Janny Wurts",
    },
    {
        title: "The Mysterious Queen",
        author: "Janny Clare",
    },
    {
        title: "Magic's Cave",
        author: "Neil Canavan",
    },
    {
        title: "The Diamond Way",
        author: "Susan Jordan",
    },
    {
        title: "The Final Tale",
        author: "Raymond Abercrombie",
    },
    {
        title: "Steven's Assassin",
        author: "Steven Jordan",
    },
    {
        title: "The Final Garden",
        author: "Raymond Zelazny",
    },
    {
        title: "Errand of Blood",
        author: "Robert Black",
    },
    {
        title: "Ranger of Magic",
        author: "Mark Jemisin",
    },
    {
        title: "Army of the Moon",
        author: "Brandon Zelazny",
    },
    {
        title: "Garden of Chaos",
        author: "Victoria Jordan",
    },
    {
        title: "King of Thrones",
        author: "Rick Cooper",
    },
    {
        title: "Knight's Staff",
        author: "Sarah Caroll",
    },
    {
        title: "Assassin's Storm",
        author: "Trudi Lawrence",
    },
    {
        title: "The Last Cleric",
        author: "Raymond Funke",
    },
    {
        title: "The Dragonbone Assassin",
        author: "Neil Lynch",
    },
    {
        title: "Journey of the Forest",
        author: "Neil Lynch",
    },
    {
        title: "City of Wind",
        author: "Diana Black",
    },
    {
        title: "The White Crown",
        author: "Cassanra Williams",
    },
    {
        title: "The Diamond Princess",
        author: "Ursula Cooper",
    },
    {
        title: "King of Ages",
        author: "Janet Clare",
    },
    {
        title: "Company of the Queen",
        author: "Cassanra Cooper",
    },
    {
        title: "Steven's Name",
        author: "Rick Morris",
    },
    {
        title: "The Final Unicorn",
        author: "Alix Weis",
    },
    {
        title: "The Last Theft",
        author: "Holly Sullivan",
    },
    {
        title: "Assassin of Blood",
        author: "Holly Sullivan",
    },
    {
        title: "Queen's Lord",
        author: "Steven Brooks",
    },
    {
        title: "Hero's Prince",
        author: "Rick Canavan",
    },
    {
        title: "Cave of Thrones",
        author: "Terry Wurts",
    },
    {
        title: "Garden of the Stars",
        author: "Patricia Taylor",
    },
    {
        title: "The Neverending Theft",
        author: "Robert Carriger",
    },
    {
        title: "The Dragonbone Storm",
        author: "Robert Carriger",
    },
    {
        title: "Queen of Plague",
        author: "Michael Jones",
    },
    {
        title: "Crown of Radiance",
        author: "Michael Jones",
    },
    {
        title: "Assassin's Way",
        author: "Robin McCaffrey",
    },
    {
        title: "Theft of Darkness",
        author: "Patrick Martin",
    },
    {
        title: "The Dragonbone Army",
        author: "Robert Feist",
    },
    {
        title: "The Final Errand",
        author: "Robert Feist",
    },
    {
        title: "The Last Chair",
        author: "Laini McCaffrey",
    },
    {
        title: "Wheel of the Moon",
        author: "Robert Jordan",
    },
    {
        title: "Apprentice of Thorns",
        author: "John Jordan",
    },
    {
        title: "The Dark Wheel",
        author: "Janet Morris",
    },
    {
        title: "The Mysterious City",
        author: "Holly Williams",
    },
    {
        title: "The Holy Princess",
        author: "Raymond Arden",
    },
    {
        title: "The Final Ship",
        author: "Anne Arden",
    },
    {
        title: "The Holy Way",
        author: "Katharine Wurts",
    },
    {
        title: "Wish of Time",
        author: "Laini Hobb",
    },
    {
        title: "The Glimmering Storm",
        author: "Terry Le Guin",
    },
    {
        title: "Prince of Swords",
        author: "Victoria Black",
    },
    {
        title: "Throne of Kings",
        author: "Laini Gaiman",
    },
    {
        title: "The Deadly Paladin",
        author: "Scott Bujold",
    },
    {
        title: "Garden of Swords",
        author: "Ursula Sullivan",
    },
    {
        title: "Hero's Errand",
        author: "Cassanra Carriger",
    },
    {
        title: "Magic's Cave",
        author: "Susan Bujold",
    },
    {
        title: "Knight's Garden",
        author: "Janet Jordan",
    },
    {
        title: "The Radiant Crown",
        author: "Janet Jordan",
    },
    {
        title: "Throne of Wind",
        author: "Joe Brooks",
    },
    {
        title: "Magic's Staff",
        author: "Patrick Pierce",
    },
    {
        title: "The Final Curse",
        author: "Guy Jordan",
    },
    {
        title: "The Dragonbone Princess",
        author: "Patricia Carriger",
    },
    {
        title: "Magic's Oath",
        author: "Joe Rothfuss",
    },
    {
        title: "Queen's Queen",
        author: "Scott Black",
    },
    {
        title: "Wish of Time",
        author: "Rick Carriger",
    },
    {
        title: "The Radiant Company",
        author: "Joe Maas",
    },
    {
        title: "The Radiant Story",
        author: "Joe Maas",
    },
    {
        title: "Theft of Thorns",
        author: "Gail McCaffrey",
    },
    {
        title: "The Dark Dragon",
        author: "Janny Schwab",
    },
    {
        title: "The Magical King",
        author: "Mark Caroll",
    },
    {
        title: "Magic's Quest",
        author: "Tad Canavan",
    },
    {
        title: "Game of Ages",
        author: "Victoria Caroll",
    },
    {
        title: "Ranger of Swords",
        author: "Madeleine Arden",
    },
    {
        title: "The Golden Cave",
        author: "Madeleine Arden",
    },
    {
        title: "Lord of Ages",
        author: "Anne L'Engle",
    },
    {
        title: "Errand of Glass",
        author: "Susan Black",
    },
    {
        title: "Storm of Magic",
        author: "Scott Jones",
    },
    {
        title: "The Shining Tale",
        author: "Cassanra L'Engle",
    },
    {
        title: "The Dark Story",
        author: "Laini Pierce",
    },
    {
        title: "Magic's Ship",
        author: "Madeline Lawrence",
    },
    {
        title: "Oath of Ages",
        author: "Terry Cooper",
    },
    {
        title: "Fool's Journey",
        author: "Diana Hobb",
    },
    {
        title: "The Holy Lord",
        author: "Roger Kay",
    },
    {
        title: "The Holy Assassin",
        author: "Lewis Arden",
    },
    {
        title: "City of Flame",
        author: "Anne Lynch",
    },
    {
        title: "Wizard's Theft",
        author: "Raymond Le Guin",
    },
    {
        title: "Pawn of Chaos",
        author: "Cornelia Clare",
    },
    {
        title: "The Black Ranger",
        author: "Gail Lackey",
    },
    {
        title: "City of Kings",
        author: "Alix Gaiman",
    },
    {
        title: "The Deadly Pawn",
        author: "Lewis Erikson",
    },
    {
        title: "Hero's Ship",
        author: "Mark Tolkien",
    },
    {
        title: "Hero's Princess",
        author: "Brandon Eddings",
    },
    {
        title: "The Final Throne",
        author: "John Tolkien",
    },
    {
        title: "The Dragonbone Chair",
        author: "Holly Lynch",
    },
    {
        title: "Steven's Throne",
        author: "Cornelia Cooper",
    },
    {
        title: "The Lost Princess",
        author: "Lewis Brooks",
    },
    {
        title: "Garden of Plague",
        author: "John Abercrombie",
    },
    {
        title: "Magic's Paladin",
        author: "Scott Kerr",
    },
    {
        title: "Fool's Throne",
        author: "Victoria Funke",
    },
    {
        title: "The Warded Empire",
        author: "Sarah Tolkien",
    },
    {
        title: "The Final Name",
        author: "Ursula Williams",
    },
    {
        title: "The Endless Staff",
        author: "Laini Caroll",
    },
    {
        title: "The Mysterious Cleric",
        author: "Patrick Canavan",
    },
    {
        title: "Wizard's Garden",
        author: "Raymond Clare",
    },
    {
        title: "The Magical Dragon",
        author: "Terry Arden",
    },
    {
        title: "Errand of Darkness",
        author: "Holly Gaiman",
    },
    {
        title: "The Holy Wizard",
        author: "George Morris",
    },
    {
        title: "The Radiant Army",
        author: "John Jones",
    },
    {
        title: "Knight's Tale",
        author: "Patrick Funke",
    },
    {
        title: "Assassin's Lord",
        author: "Mark Taylor",
    },
    {
        title: "The Warded Chair",
        author: "Terry Jordan",
    },
    {
        title: "Magic's Game",
        author: "Victoria Lynch",
    },
    {
        title: "The Shining Pawn",
        author: "Brandon Schwab",
    },
    {
        title: "Lord of Death",
        author: "David Funke",
    },
    {
        title: "Hero's Chair",
        author: "David McCaffrey",
    },
    {
        title: "Assassin's Dragon",
        author: "Sarah Zelazny",
    },
    {
        title: "The Dark Tale",
        author: "Guy Abercrombie",
    },
    {
        title: "Horde of Magic",
        author: "Roger Abercrombie",
    },
];
export { books };