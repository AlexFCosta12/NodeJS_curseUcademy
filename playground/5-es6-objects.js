// Object Property shorthand

const name = 'Alexandre';
const userAge = 23;

const user = {
    name,
    age: userAge,
    location: 'Lisbon'
}

console.log (user);

// Object destructuring

const product = {
    label: 'RED notebook',
    price: 3,
    stock: 201,
    saleProce: undefined,
    rating: 4.2
}

console.log (product);

//const laber = product.label;
//const stock = product.stock;

//const {label : productLabel, stock, rating = 5} = product;
//console.log (productLabel);
//console.log (stock);
//console.log (rating);

const transaction = (type, { label , stock = 0} = {}) =>{
    console.log (type , label, stock)
}

transaction ('order', product)

