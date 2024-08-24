function canPay(changeArray, totalDue) {
   if (changeArray.length === 0 ) {
    return 'Empty array, missing full message';
   }

 
   let sum=0;
   for (let index = 0; index < changeArray.length; index++) {
    const element = changeArray[index];
    sum= sum + element;
   }
   if (sum >= totalDue){
       return true; 
   }
   else { 
    return false;
   }
}

console.log(canPay([ ],10 )); 