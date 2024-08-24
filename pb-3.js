function sortMaker(arr) {
    let maxElement = [];
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        // console.log(element);
           
       if(arr[0]<0 || arr[1]<0){
         return 'Invalid Input';
       }
       else if (arr[0]>arr[1]) {
        maxElement.push(arr[0],arr[1]);
         return maxElement; 
        }
        else if(arr[1]>arr[0]){
          maxElement.push(arr[1],arr[0]);
          return maxElement; 
        }
       else if(arr[0]==arr[1]){
        return 'equal';
       }
       
    }

}

var arrForPass = [1,9];
console.log(sortMaker(arrForPass));