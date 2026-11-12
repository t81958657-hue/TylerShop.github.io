import { products } from "./products";  //Pull in product info for products file
export let cart = [];  // Empty cart to be updated later


export function addToCart(productName)
{
    const product = products.find(p => p.productName === productName);

    if (product === undefined) // If product not found
    {
        throw new Error(`Product "${productName}" was not found`);  //Throw error if product not found
    }

    if (product.inStock !== true) // If product found but out of stock
    {
       throw new Error(`The "${product.productName}" is out of stock`); //Throw error if product is out
    }

    cart.push(product); // If product found and in stock
    return product;

}

export function viewCart() 
{
    let total = 0;

    cart.forEach(item => 
    {
        total += item.price;
    });

    return total;
}

export function filterByCategory(category)
{
    if (category === "All") return products;
    return products.filter(p => p.category === category);
} 