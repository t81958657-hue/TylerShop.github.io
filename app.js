import { products } from "./products.js";
import { cart, addToCart, filterByCategory } from "./cart.js";  //importing functions

// Establishes the render products function
function renderProducts(productsShown) {
    const productGrid = document.getElementById('product-grid');

    // Clear previous cards
    productGrid.innerHTML = '';

    // Looping through each product       
        productsShown.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
        

        // Fill card with info and button
        productCard.innerHTML = `
            <h3>${product.productName}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>${product.inStock ? 'In Stock' : 'Out of Stock'}</p>
            <button class="add-btn" ${!product.inStock ? 'disabled' : ''}>
                Add to Cart
            </button>
        `;

        // Select button
        const button = productCard.querySelector('.add-btn');

        // Add event listener
        button.addEventListener('click', () => {
            const errorElement = document.getElementById('error-message');
            errorElement.textContent = '';

            try{  //adding try, catch, finally error management
                addToCart(product.productName);
                const cartCount = document.getElementById('cart-count');
                if(cartCount) {
                    cartCount.textContent = cart.length;
                }

            } 
            
            catch (error){
                errorElement.textContent = error.message;
            }

            finally {
                console.log(`Tried to add "${product.productName}" to cart`);
            }
           
        });
    
        productGrid.appendChild(productCard);

        });
    }

    function renderCategoryFilters() {  //create category filter function
        const filterContainer = document.getElementById('category-filters');
        if(!filterContainer) return;
        
        const categories = ["All",...new Set(products.map(p=> p.category))];

        categories.forEach(category =>{
            const btn = document.createElement('button');
            btn.textContent = category;
            btn.classList.add('filter-btn');

            btn.addEventListener('click', () => {
                const filtered = filterByCategory(category);
                renderProducts(filtered);
            });
            filterContainer.appendChild(btn);
        });
    }



renderCategoryFilters();
renderProducts(products);