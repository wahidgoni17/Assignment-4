// ----------------
//    problem - 1
// ----------------

function mindGame(number){
    const multiplyThree = number * 3;
    const addTen = multiplyThree + 10;
    const dividebyTwo = addTen / 2;
    const substractFive = dividebyTwo - 5;
    return substractFive
}

// ------------------
// Problem - 2
// ------------------

function evenOdd(input) {
    if (input.length % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
  
// ---------------
// Problem - 3
// ---------------

function isLGSeven(number1){
    const differnce = number1 - 7
    if (differnce < 7) {
        return differnce;
    } else {
        return number1 * 2;
    }
}
// ---------------
// Problem - 4
// ---------------
function findingBadData(data){
  let baddatacount = 0;
  for (let i = 0; i < data.length; i++) {
    if(data[i] < 0){
        baddatacount++;
    }
  }
  return baddatacount;  
}
// ---------------
// problem - 5
// ---------------

function  gemsToDiamond(firstFriendGem, secondFriendGem, thirdFriendGem){
    const firstGemAbility = firstFriendGem * 21
    const secondGemAbility = secondFriendGem * 32
    const thirdGemAbility = thirdFriendGem * 43
    const totalGemAbility = firstGemAbility + secondGemAbility + thirdGemAbility
    if(totalGemAbility > 2000){
        return totalGemAbility - 2000
    }
    else{
        return totalGemAbility
    }
}
