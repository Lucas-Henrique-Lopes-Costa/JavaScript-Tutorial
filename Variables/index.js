// Variables = caixas que você armaenas suas coisas
let name = 'Lucas';
console.log(name);

// Não coloque um número ou uma letra apenas (1name)
// Não podem conter espaços ou "-"
// Elas devem começar com letra minúscual

// pode declarar duas ao mesmo tempor
let firtName, lastName;

// Constantes
let people = 0.3; // podem variar
people = 1;
console.log(people);

const interestRate = 0.3; // não pode variar
// interestRate = 1.5; // retorna um erro, porque você está mudando a sua variável
console.log(interestRate);

// Tipos de Variáveis

// Primitives / Value Types
let nome = "Lucas"; // String
let age = 30; // Number
let isApproved = true; // Boolean
let firstName; // undefined => "let firstName = undefined;"
let selectedColor = null; // "null" expressa que não tem nada/vazio

// Dynamic Types
    // podemos mudar a variável no futuro
typeof nome == 'string';
typeof age == 'number';
typeof isApproved == 'boolean';
typeof firstName == 'string';
typeof selectedColor == 'object';

// Reference Types
// Object = é como na vida real, é um objeto
    let person = {
        name: 'Lucas',
        age: 30
    };
    console.log(person);

    // Dot Notation = Notação em Potnos
        // mudando algum dos objetos
        person.name = 'John';
        console.log(person);
        
        // mostrando um objeto
        console.log(person.name);
    
    // Bracket Notation = Notação os Colchetes
        // mudando algum dos objetos
        person['name'] = 'Marcos Túlio';
        console.log(person.name);
        // De forma dinâmica
        let selection = 'name';
        person[selection] ='Fernando'
        console.log(person.name);

// Arrays
let selectionColors = ['red', 'blue']; // Indica um Array

console.log(selectionColors);
console.log(selectionColors[1]); // Mostra o item de Index 1
selectionColors[0] = 'green'; // Mudando um dos itens
console.log(selectionColors);

// podemos tambémm misturar tipos primitivos em um Array
selectionColors[2] = 1;
console.log(selectionColors);

typeof selectionColors == 'object'; // Todo Array é um objeto

console.log(selectionColors.length);

// Function
