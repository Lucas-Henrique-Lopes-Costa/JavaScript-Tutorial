let selectionColors = ['red', 'blue']; // iniciando um Array
console.log(selectionColors);

// Mudando um dos itens
    console.log(selectionColors[1]);

// Mudando um dos itens
    selectionColors[0] = 'green'; 
    console.log(selectionColors);

// adicionando um item no final
    selectionColors.push(["yellow", "green"])
    console.log('Adicionando no final: ' + selectionColors);

// removendo os últimos itens 
    selectionColors.pop()
    console.log('Removendo os últimos itens: ' + selectionColors);

// adicionando um item no começo
    selectionColors.unshift('gray');
    console.log('Adiocionando no primeiro item: ' + selectionColors);

// removendo os primeiros itens 
    selectionColors.shift()
    console.log('Removendo os primeiros itens: ' + selectionColors);

// Stand in Line
    function nextLine(arr, item) {
        arr.push(item); // adicionando o item
        return arr.shift(); // printando e removendo o primeiro item
    }

    var testArr = [1,2,3,4,5];

    console.log("Before: " + JSON.stringify(testArr)); // printa na forma de Array
    console.log(nextLine(testArr, 6));
    console.log("After: " + testArr); // coloca na forma de lista

// podemos tambémm misturar tipos primitivos em um Array
    selectionColors[2] = 1;
    console.log(selectionColors);
    
// tamanho do Array
    console.log(selectionColors.length);

// Todo Array é um objeto
    typeof selectionColors == 'object'; 

// Dimencional Array
    var ourArray = [["O Universo", 180], ["A teoria de tudo", 265]];
    var myBook = "O nome do livro é " + ourArray[1][0] + " que possui " + ourArray[1][1] + "páginas";
    console.log(myBook)

    var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 26]]

// Use Rest Operator
    // allows we use as a variable the Array
    const sumOperator = function sumOperator (...args) { // "...agrs" is the same that  the Array with the variales
        return args.reduce((a, b) => a + b); // reduce aply this rule to all the item in the Array
    };
    console.log(sumOperator(1,2,3))

// Use The Spread Operator (Expecificador)
    const arr1 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    let arr2;
    
    (function() {
        arr2 = [...arr1]; // with the Spread Operator the "arr2" make every item igual the "arr1"
        arr1[0] = 'Batata'
    })();
    console.log(arr2);

    (function() {
        arr2 = arr1;
        arr1[0] = 'Batata'
    })();
    console.log(arr2);

// Destructuring Assingnment
    const [z, x, , y] = [1,2,3,4,5,6]; // como não tem um número no no Array ("[z, x, , y]")
    console.log(z,x,y);

    let a = 8, b = 6;
    () => {
        "use strict";
        [a, b] = [b, a]
    };
    console.log(a);
    console.log(b);

    // Using Rest Operator
        const source = [1,2,3,4,5,6,7,8,9,10];
        function removeFirstTwo(list) {
            const [ , , ...arr] = list; // using rest operator | "...arr" will be the other numbers

            return arr;
        }
        const arr = removeFirstTwo(source);
        console.log(arr);
        console.log(source);