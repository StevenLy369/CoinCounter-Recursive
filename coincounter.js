
const coinCounter = function(userChange,counter=0,coinArray=[]){
  const coins = [25,10,5,1];
                  
  if(counter >= 4){
    return coinArray;
  } 
  else{
    const amount = Math.floor(userChange / coins[counter]);
    const remender = userChange - (amount * coins[counter]) 
    coinArray.push(amount);
    return coinCounter(remender,counter + 1, coinArray);
  }
  
}
const result = coinCounter(76);
console.log(result + " --  result ---");




// const quarter = 0



// const coinCounter = (change) => {

//     if(change = 0)
//     {
//         return;
//     }
//     if (change % .25 == 0)
//     {
//         return quarter++ && (change - 0.25)
//     }


// }


//console.log(change);
// console.log(quarter);
// coinCounter(.25);

// 
// coins = [25,10,5,1]
// const recu = (v, arr, i) => {
//   if (i === coins.length) return arr;
//   const timesIn = (Math.floor(v / coins[i]));
//   const rem = v - (timesIn * coins[i]);
//   arr.push(timesIn);
//   return recu(rem, arr, i+1);
// }
// recu(userValueInPennies,[],0)




// function amountTocoins(amount, coins) 
// {//termination
//  if (amount === 0) 
//   {
//      return [];
//    } 
//  else
//    {
//      if (amount >= coins[0]) 
//        {
//         left = (amount - coins[0]);
//          console.log("this is coins" + coins)
//         // console.log([coins[0]].concat( amountTocoins(left, coins) ))
//         return [coins[0]].concat( amountTocoins(left, coins) );
        
//         } 
//       else
//         {
//           coins.shift();
//          return amountTocoins(amount, coins);
//         }
//     }
// } 
// console.log(amountTocoins(26, [25, 10, 5, 2,1]));





// first in last out



// //termination
// if (changeAmount = 0)
// {
//     return ""
// }

// if changeAmount % .25 == 0
// {
//     return quarter++ & - .25
// }
// if changeAmount % .10 == 0
// {
//     return dime++ & - .10
// }
// if changeAmount % .05 == 0
// {
//     return nickle++ & -.05
// }
// if changeAmount % .01 == 0
// {
//     return penny++ & -.01
// }

// else 