function greet() {
    console.log('Hello Function!!');
}
greet();

// passing a paramerer to the funcion
    function sayHello(name, lastName) {
        console.log('Hello, ' + name + ' ' + lastName);
    }
    sayHello('Lucas', 'Herique');

    function wordBlanks(myNoun, myAdjective, myVerb, myAdverb, locate)  {
        var result = "";
        result += "O " + myNoun + " " + myAdjective + " está " + myVerb  + " " + myAdverb + " na frente d" + locate;

        return result;
    }
    console.log(wordBlanks("cachorro", "grande", "comendo", "agora", "a loja"));
    console.log(wordBlanks("gato", "fofo", "arranhando", "a manhã toda", "o sofá"));

    function subtraiNumeros(a, b) {
        console.log(a - b);
    }
    subtraiNumeros(10, 5);

    function square(number) {
        return number * number;
    }
    // let number = square(10);
    console.log(square(2)); // console.log is also a function

// Scope
    // Scope is when a variable if it is find and, depending if it is declared or not, it can ou can't be used

    // Global Scope
    var myGlobal = 10; // It can be used in anywhere in the program (after this line) 
    // pode ser usado em qualquer lugar do programa (a partir dessa linha)

    function fun1() {
        notMyGlobal = 5;
    }

    function fun2() {
        var output = "";
        if (typeof myGlobal != "undefined") {
            output += "Função Global: " + myGlobal + "\n";
        }
        if (typeof notMyGlobal != "undefined") {
            output += "Função não Global: " + notMyGlobal;
        }
        console.log(output);
    }
    // fun1(); // if this funtion isn't "active", then it'll not declare those funciton => Can't be used by the program
    fun2();

    function myLocalScope() {
        var myVar  = "Dentro do Scope";
        console.log(myVar);
    }
    myLocalScope();
    // console.log(myVar); // It's not possible, because "myVar" isn't a Global Variable
    //  não será possível, porque "myVar" não é uma variável global

// Global vs Local Variables
    var outerWear = "Camiseta"; // Global

    function myOutfit() {
        var outerWear = "Blusa"; // Changing inside the funciton Mudando dentro da função

        return outerWear;
    }

    console.log(myOutfit()); // The variable won't change, ONLY inside the function. Then it'll return "Blusa"
    console.log(outerWear); // In other hand, the variable won't change here, then it'll return "Camisa"

// Return
    // Undefined Value Returned
    var sum = 0;
    function addThree() {
        sum = sum + 3;
        return sum;
    }

    function addFive () {
        sum += 5;
    }

    console.log(addFive()); // return undefined
    console.log(addThree()); // retun 8 because is adding 3 and after adding 5 (like in the function)
    
    var processed = 0;
    function chance(num) {
        return (num + 5) / 3;
    }

    function processArg(num) {
        return (num + 3) / 5;
    }

    processed = processArg(12); // nesse caso a função "processed" será igual a expressão que está dentro da função
    console.log(processed);

// Arrow Functions
    var magic = function() {
        return new Data();
    };
    // both are the same thing
    var magic = () => {
        return new Data();
    };
    var magic = () => new Data();

    // Exemple
        const myConcat = (arg1, arg2) => arg1.concat(arg2); // junta os Arrays 

        console.log(myConcat([1,2], [3,4,5]))

// using filter and map
    const realNumberArray = [4, 5.6, -9,8, 3.14, 42, 6, 8.34, -2];
    const squareList = (arr) => {
        const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x); 
            //  It'll filter all numbers Integer and more than 0, then put they in the Array
            // And map is like a "for". In this case, for each number in the Arrau it'll elevar a ele mesmo
        return squaredIntegers;
    }
    const squareIntegers = squareList(realNumberArray);
    console.log(squareIntegers)

// Higher Order Arrow Function
    const increment = function increment(number, value = 1) {
        return number + value;
    };
    console.log(increment(1, 5)); // if the second paramerer is fill, it can ou not increment
    console.log(increment(0));