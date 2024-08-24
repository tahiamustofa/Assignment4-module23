let name = 'tahia'.toLocaleLowerCase();

const products= [
    {name:'iphone ',price:2000000,id:1},{name:'iphone',price:2000000,id:1},
    {name:'oppo laptop',price:2000000,id:1},{name:'iphone',price:2000000,id:1},
    {name:'xawmi laptop',price:2000000,id:1},{name:'iphone',price:2000000,id:1},
    {name:'waltone Laptop',price:2000000,id:1},{name:'Phone',price:2000000,id:1},
    {name:'samsung LapTOP',price:2000000,id:1},{name:'iphone',price:2000000,id:1},
    {name:'m10',price:2000000,id:1},{name:'iphone',price:2000000,id:1}
]

function matchName(products,search) {
    let match=[];
    for (const element of products) {
        // console.log(element);
        if(element.name.toLowerCase().includes(search.toLowerCase())){
           match.push(element.name);
        };
    }
    return match;
}

let result = matchName(products,'phone');
console.log(result);


// quiz



// function compare(a, b) {
//     if (a == b) {
//     return true;
//     } else {
//     return false;
//     }
//    }
//    const result1 = compare(15, "15");
//    console.log(result1);

let a='hi'
let b='there'
console.log(a+b)