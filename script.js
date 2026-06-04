// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

let cartData=[];

// DOM elements
const productList = document.getElementById("product-list");
const cartList= document.getElementById("cart-list");
const clear_btn=document.getElementById("clear-cart-btn");


// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);

  });
}



// Render cart list
function renderCart() {
	cartList.innerHTML = "";
	cartData.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="remove-cart-btn" data-id="${product.id}">Remove to Cart</button>`;
    cartList.appendChild(li);

  });
}

// Add item to cart
function addToCart(productId) {
	productList.addEventListener('click', (e) => {
    if(e.target.classList.contains('add-to-cart-btn')){
        const id = Number(e.target.dataset.id);

        const product = products.find(
            p => p.id === id
        );

        cartData.push(product);

        console.log(cartData);
    }
			renderCart();

});
}

// Remove item from cart
function removeFromCart(productId) {
	cartList.addEventListener('click', (e) => {
    if(e.target.classList.contains('remove-cart-btn')){
        const id = Number(e.target.dataset.id);

        const product = cartData.filter(
            p => p.id !== id
        );

        cartData=product;

        console.log(cartData);
    }
	renderCart();
});
}

// Clear cart
function clearCart() {
	clear_btn.addEventListener("click",()=>{
cartData = [];
cartList.innerHTML = "";

	})
}

// Initial render
renderProducts();
renderCart();

addToCart();
removeFromCart();
clearCart();
