const products = [
{
    productName = "Spam Musubi",
    price: 3.99,
    category: "Japanese Food",
    inStock = true
}, 
{
    productName = "Kimbap",
    price: 7.99,
    category: "Korean Food",
    inStock = true  
},
{
    productName = "Wagyu Bowl",
    price: 33.99,
    category: "Japanese Food",
    inStock = false
},
{
    productName = "Pad Thai",
    price: 12.99,
    category: "Thai Food",
    inStock = true
}
];

let cart = [];  // Empty cart to be updated later

console.log(products);

function addToCart(productName)
{
    const product = products.find(p => p.productName === productName);

    if (product === undefined) //If product not found
    {
        console.log('Product "${productName}" was not found');
        return;
    }

    if (product.inStock !== true) //If product found but out of stock
    {
        console.log('The "${product.productName}" is out of stock');
        return;
    }

    cart.push(product); //If product found and in stock
    console.log('The "${product.productName}" has been added');
}

function viewCart() 
{
    let total = 0;

    cart.forEach(item => 
    {
        total += item.price;
    }
    );

}

function filterByCategory(category)
{
    const filteredProducts = products.filter(p => p.category === category);

}

filteredProducts.forEach(product => 
{
    console.log(' ${product.productName}: $${product.price.toFixed(2)}');

}
);

