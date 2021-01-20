// While Loops
    var myArray = [];

    var i = 0;
    while(i < 6) {
        myArray.push(i);
        i++
    }
    console.log(myArray)

// For Loops
    var myArray = [];

    // starting | condition(while is true) | o que vai fazer
    for (var i = 0; i < 5; i++) {
        myArray.push(i);
    }
    console.log(myArray)

// Count Backwards
    myArray = []
    for (var i = 10; i > 0; i--) {
        myArray.push(i)
    }
    console.log(myArray)

// Interative through an Array
    var ourArray = [9, 10, 11, 12];
    var ourTotal = 0;

    // adding each item of the ourArray in the ourTotal
    for (let i = 0; i < ourArray.length; i++) {
        ourTotal += ourArray[i];
    }
    console.log(ourTotal);

    // multiply elements
    function multiplyAll(arr) {
        let product = 1;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                product *= arr[i][j] // multiplca todos os itens
            }
        }
        return product
    }
    var product = multiplyAll([[1,2], [3,4], [5,6,7]])
    console.log(product);

// Interative Do... While
    var myArr = [];
    var i = 0;

    do {
        myArr.push(i);
        i++;
    } while(i < 11)
    console.log(i, myArr)

// Profile Lookup
    var profiles = [
        {
            "firstName": "Lucas",
            "lastName": "Henrique"
        },
        {
            "firstName": "Marcos",
            "lastName": "Túlio"
        },
    ];

    function lookUpProfile(name, prop) {
        for (let i = 0; i < profiles.length; i++) {
            if(profiles[i].firstName === name) {
                return profiles[i][prop ] || "Não há essa propriedade neste contato ";
            }
        }
        return "Não há este contato"
    }
    console.log(lookUpProfile("Lucas", "lastName"))
    console.log(lookUpProfile("Gabriel", "lastName"))
    console.log(lookUpProfile("Marcos", "number"))