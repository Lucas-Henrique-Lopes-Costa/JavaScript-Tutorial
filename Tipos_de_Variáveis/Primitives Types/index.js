let nome = "Lucas"; // String
let age = 30; // Number
let isApproved = true; // Boolean => true or false
let firstName; // undefined => "let firstName = undefined;"
let selectedColor = null; // "null" expressa que não tem nada/vazio

// Dynamic Types => We can change this variable in the future
typeof nome == 'string';
typeof age == 'number';
typeof isApproved == 'boolean';
typeof firstName == 'string';
typeof selectedColor == 'object'; // Object => armazenam diferente tipos de dados

// Generate Random Number
    // Decimal Number
        function randomFranction() {
            return Math.random();
        }
        console.log(randomFranction())

    // Whole Numbers
        var randomNumbersBetween0and19 = Math.floor(Math.random() * 20);

        function randomWholeNum() {
            return Math.floor(Math.random() * 10);
        }
        console.log(randomWholeNum())
        console.log(randomNumbersBetween0and19)

    // random numbers in a range
        function randomRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        var random = randomRange(5, 10);
        console.log(random);

// Convert to Integer
    function convertToInteger(str) {
        return parseInt(str);
    }
    console.log("56");
    console.log(convertToInteger("56"));
    
    // Converter Binary to Integer
    function convertBinaryToInteger(str) {
        return parseInt(str, 2) // "2" means binary
    }
    console.log(convertBinaryToInteger("01000"));