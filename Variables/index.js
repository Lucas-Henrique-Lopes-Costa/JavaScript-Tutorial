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
interestRate = 1.5; // retorna um erro, porque você está mudando a sua variável
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