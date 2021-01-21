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

// Destructuring Assingnment
    var voxel = {x: 3.6, y: 7.4, z: 6.54}
    const { x : a, y : b , z : c } = voxel; // for each letter (x, y, z), copy to other letter (a, b, c)
        var x = voxel.x // 3.6
        var y = voxel.y // 7.4
        var z = voxel.z // 6.54
    console.log(voxel)

    // Assign Variables
        const AVG_TEMPERATURES = {
            today: 77.5,
            tomorrow: 79
        };

        function getTempOfTmrw(avgTemperatures) {
            "use strict";
            const { tomorrow : tempOfTomorrow } = avgTemperatures; // in the Object put here, it'll' copy it and put in the "tempOfTomorrow"

            return tempOfTomorrow;
        }
        console.log(getTempOfTmrw(AVG_TEMPERATURES)); // put the Object into the function
    
    // Assign Variables
        const LOCAL_FORECAST = {
            today: { min: 71, max: 83 },
            tomorrow: { min: 71.3, max: 84.6 }
        };

        function getMaxOfTmrw(forecast) {
            "use strict";
            const { tomorrow : { max : maxOfTomorrow } } = forecast;

            return maxOfTomorrow;
        }
        console.log(getMaxOfTmrw(LOCAL_FORECAST));
    
    // using to pass an Object as a function's parameters
        const stats = {
            max: 56.78,
            standard_deviation: 4.34,
            median: 34.54,
            mode: 23.87,
            min: -0.75,
            average: 38.85
        };

        const half = (function() {
            return function half({ max, min }) {
                return (max + min) / 2;
            }
        })();
        console.log(stats);
        console.log(half(stats));

// Using Template Literal
    const createPerson = (name, age, gender) => ({ name, age, gender });
    console.log(createPerson("Lucas", 56, "male"));

// Write Concese Declarative Function
const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear; // "this" reference the bicycle object
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);

// use class Syntax to define function
    class SpaceShuttle {
        constructor(targetPlanet) {
            this.targetPlanet = targetPlanet; // add "targetPlanet" into the object
        }
    }
    var zeus = new SpaceShuttle("Jupter"); // adding a object

    console.log(zeus.targetPlanet);

    function makeClass() {
        class Vegetable {
            constructor(name) {
                this.name = name;
            }
        }
        return Vegetable;
    }

    const Vegetable = makeClass();
    const addVegetable = new Vegetable('Cenoura');
    console.log(addVegetable.name)

// controling access to an Object
    class Book {
        constructor(author) {
            this._author = "Autor: " + author;
        }

        // getter
        get whiter() { // get the value of the private variable in the object
            return this._author;
        }
        // setter
        set write(updatedAuthor) { // changing the value of the private variable
            this._author = updatedAuthor;
        }
    }
    const book = new Book("Lucas");
    let bookAuthor =  book.whiter;
    console.log(bookAuthor) // return the value

    function makeClass() {
        class Thermostat {
            constructor(temp) {
                this._temp = 5/9  * (temp - 32); // this variable can be access with this class, and before this converter to celsius
            }
            
            get temperature() {
                return  this._temp;
            }

            set temperature(updatedTemp) {
                this._temp = updatedTemp
            }
        }
        return Thermostat;
    }

    const Thermostat = makeClass(); // passing this function to this variable
    const thermos = new Thermostat(76); // passing this value to the class and converter to celsius
    let temp = thermos.temperature; // using the "get" to access the temperature
    console.log(temp); 
    
    thermos.temperature = 26; // using the "set" to change the temperature
    temp = thermos.temperature; 
    console.log(temp);
