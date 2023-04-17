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

function evenOdd(string) {
    let string = 0
    if (string.i.length() % 2 === 0) {
        return even       
    }
    else(string.i.length() % 2 != 0)
        return odd
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

function  gemsToDiamond(firstFriendgem, secondFriendgem, thirdFriendgem){
    const firstgemability = firstFriendgem * 21
    const secondgemability = secondFriendgem * 32
    const thirdgemability = thirdFriendgem * 43
    const totalgemability = firstgemability + secondgemability + thirdgemability
    if(totalgemability > 2000){
        return totalgemability - 2000
    }
    else{
        return totalgemability
    }
}
const diamond = gemsToDiamond(firstFriendgem, secondFriendgem, thirdFriendgem)
