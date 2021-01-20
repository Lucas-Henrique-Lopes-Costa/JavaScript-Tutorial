// Object = it's like in the real life, it's a objetct. They are very like with Arrays, but to acess data you have to use properties. Além disso ele pode armazenar qualquer tipo de dados

let person = {
    name: 'Lucas',
    age: 30,
    "chapéu": "Boné de Caminhoneiro",
    "shoes": "Tênis"
};
console.log(person);

// Dot Notation = Notação em Pontos
    // Change some objetct
        person.name = 'John';
        console.log(person);
    
    // show an objetct
        console.log(person.name);

// Bracket Notation = Notação os Colchetes
    // Change some objetct
        person['name'] = 'Marcos Túlio';
        console.log(person.name);

        // Change with dinamic way
            let selection = 'name';
            person[selection] ='Fernando'
            console.log(person.name);

            var players = {
                12: "Marcos Túlio",
                10: "Lucas",
                9: "Gabriel",
                7: "Murilo"
            }

            var number = 10;
            var player = players[number]; // show player
            console.log(player);

            // players[number] = ""; // change the player
            // console.log(players[number]);

// Add a new notation
    var players = {
        12: "Marcos Túlio",
        10: "Lucas",
        9: "Gabriel",
        7: "Murilo"
    }

    players[5] = "Allan";
    console.log(players);

// Delete a proper
    delete players[10];
    console.log(players);

// Objects for Lookups => Dictionary
    function phoneticLookups(val) {
        var result = "";
        
        var lookup = {
            "alpha": "Adams",
            "bravo": "Booston",
            "charlie": "Chicago",
            "delta": "Denver",
            "echo": "Easy",
            "foxtrot": "frank"
        }

        result = lookup[val];
        return result;
    }
    console.log(phoneticLookups("alpha"));

// Check if has the Proper
    var myObj = {
        "gift": "pony",
        "pet": "kitten",
        "bed": "sleigh"
    }

    function checkObj(checkProp) {
        if(myObj.hasOwnProperty(checkProp)) {
            return "Sim, tempos essa propriedade: " + myObj[checkProp];
        } else {
            return "Não foi possível encontrar a propiedade " + checkProp
        }
    }
    console.log(checkObj("gift"));

// Complex Objects
    var myMusic = [
        {
            "artists": "Billy Joel",
            "title": "Piano Man",
            "realease": 1973,
            "formats": [
                "CD",
                "MP3",
                "LP"
            ],
            "gold": true
        },
        {
            "artists": "Alok",
            "title": "See You",
            "realease": 2015,
            "formats": [
                "CD",
                "MP3",
                "YouTube Video"
            ],
            "gold": false
        }
    ]
    var numberMusic = 1;
    var name = myMusic[numberMusic].title
    var format = myMusic[numberMusic].formats
    console.log(name + ": " + format)

    // Update the data
        var collectionCopy = JSON.parse(JSON.stringify(myMusic)); // Copy the array above
        console.log(collectionCopy);

        function updateRecords(id, prop, value) {
            if(value === "") {
                delete myMusic[id][prop];
            } else if (prop === "formats") {
                myMusic[id][prop] = myMusic[id][prop] || []; // id not exists
                myMusic[id][prop].push(value);
            } else {
                myMusic[id][prop] = value;
            }
            
            return myMusic;
        }
        console.log(updateRecords(1, "artists", "")) // removing the artists of the second array
        console.log(updateRecords(0, "formats", [
            'Youtube Video',
            'Spotify'
        ]));
        console.log(updateRecords(1, "artists", "Tião Carreiro"));