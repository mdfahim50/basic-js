// ----------------Assignment no 1 ------------------- feetToMile

function feetToMile(n){
    var mile = n / 5280;
    return mile;
}


// ----------------Assignment no 2 ------------------- woodCalculator


function woodCalculator(chair , table, bed){
    var totalWood = chair * 1 + table * 3 + bed * 5;
    return totalWood;

}




// ----------------Assignment no 3 ------------------- brickCalculator

function brickCalculator(floor){
    if (floor  <=10){
        var total1 = floor * 15000;
        return total1;
    }
    
    else if(floor <=20) {
        var midPartFloor = floor - 10;
        var midTotal = midPartFloor * 12000;
        var total2 = midTotal + 150000;
        return total2;
    }

    else {
        var lastPartFloor = floor - 20;
        var midTotal = lastPartFloor * 10000;
        var total3 = midTotal + 270000;
        return total3;
    }
    
}

// ----------------Assignment no 4 ------------------- tinyFriend

function tinyFriend(friends){
    var smallest = friends[0].length;
    var stringIndexValue = "";
    for(var i = 0; i < friends.length; i++){
        var currentNumber = friends[i].length;
        if(smallest >= currentNumber ){
            smallest = currentNumber;
            stringIndexValue = friends[i];   
        }
    }
    return stringIndexValue;
}


// test 1

// var result1 = feetToMile(10560);
// console.log(result1);



// test 2

// var result1 = woodCalculator(2, 3, 5 );
// console.log(result1);



// test 3 
// var result = tinyFriend(['Mashs', 'Shakib', 'Tamim', 'Fahim']);
// console.log(result);



// test 4

// var testResult = brickCalculator(20);
// console.log(testResult);