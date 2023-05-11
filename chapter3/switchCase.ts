let productOB = [
    { name: 'phone', price: 700 }, //0
    { name: 'tablet', price: 900 }, //1
    { name: 'laptop', price: 1200 }
];

let discountTS:number = 0;
let productTS: {
    name:string,
    price:number
} = productOB[1];
switch (productTS.name) {
    case 'phone':
        discountTS = 5;
        break;
    case 'tablet':
        discountTS = 10;
        break;
    case 'laptop':
        discountTS = 15;
        break;
    default:
        discountTS = 100;
}
console.log(`There is a ${discountTS}% on ${productTS.name}.`);
