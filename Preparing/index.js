// Primeiro programa
console.log('Hello \"double quoted\" Word!!');

// para colocar o link deve-se colocar as aspas de maneira diferente
var myStr = '<a href="https:\\www.example.com" target="_blank">Link</a>'
console.log(myStr)

// caracteres especiais:
/*
\' aspas simples
\" aspas duplas
\\ Barra
\n nova linha
\t tap
\b símbolo
*/
myStr = "FirstLine\n\tSecondLine\nThirdLine\b"
console.log(myStr)

// para rodar como Node, basta abrir o terminal na basta que está o .js e rodar o comando: "node index.js"