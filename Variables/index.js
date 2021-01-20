// Variables = caixas que você armaenas suas coisas/dados (data = tudo que tem significado para a máquina)
    let name = 'Lucas';
    console.log(name);

    // você também pode declarar como:
        var myName;
        console.log(myName); // retorna 'undefined'

        myName = name;
        console.log('Meu Nome:' + myName);

    // Não coloque um número ou uma letra apenas (1name)
    // Não podem conter espaços ou "-"
    // Elas devem começar com letra minúscual, e a form que você coloca uma ou outra em maíscula ou minúscual diferencia as variáveis

    // pode declarar duas ao mesmo tempor
        let firtName, lastName;

// Constantes | como exemplo o 'Pi'
    let people = 1; // podem variar
    people = 3;
    console.log(people);
    const interestRate = 0.5; // não pode variar
    // interestRate = 1.5; // retorna um erro, porque você está mudando a sua variável
    console.log(interestRate);

    const Array = [5, 6, 7];
    function editInPlace() {
        "use strict";

        // s = [1, 2, 3]; // We can't declare this, because the Arrays is in const
        // but you can replace a item
        Array[0] = 1;
        Array[1] = 2;
        Array[2] = 3;
    }
    console.log(Array);
    editInPlace();
    console.log(Array);
    
    // Try and Catch
        function  freezeObj() {
            "use strict";
            const MATH_CONSTANTS = {
                PI: 3.14
            }

            // Object.freeze(MATH_CONSTANTS); // it make that the Object can't change

            try { // try to change, if if can't it'll retorn err
                MATH_CONSTANTS.PI = 91
            } catch ( ex ) {
                console.log(ex);
            }
        }

        const PI = freezeObj();
            
// Diferença entre "let" e "var"
    let myFirstName = "Lucas";
    var catName = "Hilton";
    
    // let name = "Marcos Túlio"; // it'll wrong, because we can't have 2 let with the same name
    var catName = "Hilton"; // we can redecler

    // Scope
        function checkScopeVar() {
            "use strict";
            var i = "Sai";
            if(true) {
                i = "Entrei";
                console.log("Dentro do If: " + i);
            }
            console.log("Fora do If: " + i);
            return i;
        }
        checkScopeVar();
        // Dentro do If: Entrei
        // Fora do If: Entrei
        
        
        function checkScopeLet() {
            "use strict";
            let i = "Sai";
            if(true) {
                let i = "Entrei";
                console.log("Dentro do If: " + i);
            }
            console.log("Fora do If: " + i);
            return i;
        }
        checkScopeLet();
        // Dentro do If: Entrei
        // Fora do If: Sai // This means that "let i", that is in the "If", only it can acess inside in the if