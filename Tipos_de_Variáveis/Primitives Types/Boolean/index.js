// Boolean Values
function outTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Sim, é VERDADE";
    }
    return "Não, é MENTIRA";
}
console.log(outTrueOrFalse(true));

// Equal
    function testNumberIsEqual(val) {
        if (val == 12) {
            return 'IGUAL';
        }
        return 'Não é igual'
    }
    console.log(testNumberIsEqual(12))

// Strict Equal
    function testStrict(val) {
        if (val === 12) {
            return 'IGUAL';
        }
        return 'Não é igual';
    }
    console.log(testStrict("12"));

// Different
    function testNotEqual(val) {
        if(val != 99) {
            return 'É diferente';
        }
        return "Não é Diferente";
    }
    console.log(testNotEqual(99));

// Strict Different
    function testNotStrict(val) {
        if(val !== 99) {
            return 'É diferente';
        }
        return "Não é Diferente";
    }
    console.log(testNotStrict("99"));

// More than
    function testGreterThan(val) {
        if (val > 100) {
            return "Acima 100";
        }

        if (val >= 10) { // more than or equal
            return "10 ou acima 10";
        }
        if (val <= 10 )
            return 'Menos de 10';
    }
    console.log(testGreterThan(10))

// Logical Operator
    // Operator 'And'
        function testLogicalAnd(val2) {
            if (val2 <= 50 && val2 >= 25) {
                return "Sim está entre 25 e 50"
            }
            return "Não está entre 25 e 50"
        }
        console.log(testLogicalAnd(50));

    // Operator 'Or'
        function testLogicalOr(val) {
            if (val < 10 || val > 20) {
                return "Fora de 10 e 20";
            }
            return "Dentro de 10 e 20";
        }
        console.log(testLogicalOr(10));