// Else Statement
     function testElse(val) {
        var result = "";
        if (val > 10) {
            result = "Maior que 10"
        }
        else if(val > 5) {
            result = "Maior que 5"
        } else {
            result = "5 ou menor que 5"
        }
        return result;
    }
    console.log(testElse(15));

// Golfe Score
    var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogery", "Double Bogey", "Go Home!"]
    function golfScore(par, strokes) {
        if (strokes == 1) {
            return names[0];
        } else if (strokes <= par - 2) {
            return names[1];
        } else if (strokes == par - 1) {
            return names[2];
        } else if (strokes == par) {
            return names[3];
        } else if (strokes == par + 1) {
            return names[4];
        } else if (strokes == par + 2) {
            return names[5];
        }
        return names[6]; // this is like a "else"
    }
    console.log(golfScore(5, 6));

// Switch Statements
    function caseInSwitch(key) {
        var answer = "";
        switch(key) {
            case 1: // if this'll equal "1"
                answer += "Alpha";
                break;
            case 2:
                answer = "Beta";
                break;
            case 3:
                answer = "Gama";
                break;
            case 4:
                answer = "Delta";
                break;
            default: // Default Option
                answer = "Nada"
                break;
        }
        return answer;
    }
    console.log(caseInSwitch(1));
    console.log(caseInSwitch(5));

    // Multiple Indentical Options
        function multipleOption(key) {
            answer = "";
            switch(key) {
                case 1:
                case 2:
                case 3:
                    answer = "Baixo";
                    break;
                case 4:
                case 5:
                case 6:
                    answer = "Médio";
                    break;
                case 7:
                case 8:
                case 9:
                    answer = "Alto";
                    break;
                default:
                    answer = "Nenhuma das Opções, escolha entre 1 a 9"    
            }
            return answer;
        }
        console.log(multipleOption(2))
        console.log(multipleOption(5))
        console.log(multipleOption(7))
        

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

    // Return Boolean
        function isLess(a, b) {
            return a < b;
        }
        console.log(isLess(9, 6));

// Return Eatly Pattern
    function abTest(a, b) {
        if (a < 0 || b < 0) {
            return undefined;
        }
        return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
    }
    console.log(abTest(-2, 2));

// Counting Card
    var count = 0;
    function cc(card) {
        switch(card){
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                count++;
                break;
            case 10:
            case "J":
            case "Q":
            case "K":
            case "A":
                count--;
                break;
        }

        var holdbet = 'Segura';
        if(count > 4) {
            holdbet = 'Apostar';
        }
        return count + " pontos " + holdbet;
    }
    cc("J"); 
    cc("A"); 
    cc(3); 
    cc("A"); 
    cc(4);
    cc(10);
    console.log(cc("Q"));
    
// Ternary Operator => codition ? statement-if-true : statement-if-false;
    function checkSign(num) {
        return num > 0 ? "Positivo" : num < 0 ? "Negativo" : "Zero";
    }
    console.log(checkSign(4));
    console.log(checkSign(0));
    console.log(checkSign(-1
        ));