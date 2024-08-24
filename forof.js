const numbers= [12,23,94,34,43,65];

// for (let index = 0; index < numbers.length; index++) {
//     const number = numbers[index];
//     console.log(number)
// }

for (const number of numbers) {
    // console.log(number);
}
const products= [
    {name:'iphone ',price:2000000,id:1},{name:'iphone',price:2000000,id:1},
    {name:'oppo laptop',price:2000000,id:1},{name:'iphone',price:2000000,id:1},
    {name:'xawmi laptop',price:2000000,id:1},{name:'iphone',price:2000000,id:1},
    {name:'waltone Laptop',price:2000000,id:1},{name:'Phone',price:2000000,id:1},
    {name:'samsung LapTOP',price:2000000,id:1},{name:'iphone',price:2000000,id:1},
    {name:'m10',price:2000000,id:1},{name:'iphone',price:2000000,id:1}
]
// for (const phone of products) {
//     console.log(phone);
// }
function matchProducts(products,search) {
    let match=[];
    for (const product of products) {
       if(product.name.toLowerCase().includes(search.toLowerCase())){
        match.push(product);
       }; 
    }
    return match;
}
const result = matchProducts(products,'laptop');
console.log(result);





