\// Sample Product Data
const products = [
    { id: 1, name: 'iPhone 14 Pro', price: 999, image: 'iphone.jpg' },
    { id: 2, name: 'MacBook Pro 16"', price: 2499, image: 'macbook.jpg' },
    { id: 3, name: 'Apple Watch Ultra', price: 799, image: 'watch.jpg' },
    { id: 4, name: 'iPad Pro', price: 1099, image: 'ipad.jpg' },
];

let cart = [];

// Initialize Products
function initProducts() {
    const productGrid = document.getElementById('product-grid');
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        productGrid.appendChild(card);
    });
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price}</span>
        `;
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
}

function openCart() {
    document.getElementById('cart-sidebar').classList.add('active');
}

function closeCart() {
    document.getElementById('cart-sidebar').classList.remove('active');
}

function checkout() {
    alert('Thank you for your purchase!');
    cart = [];
    updateCartUI();
    closeCart();
}

// Auth Modal Functions
function openAuthModal() {
    document.getElementById('auth-modal').style.display = 'block';
}

function closeAuthModal() {
    document.getElementById('auth-modal').style.display = 'none';
}

function toggleAuthForm() {
    const signinForm = document.getElementById('signin-form');
    const signupForm = document.getElementById('signup-form');
    signinForm.style.display = signinForm.style.display === 'none' ? 'block' : 'none';
    signupForm.style.display = signupForm.style.display === 'none' ? 'block' : 'none';
}

// Initialize
window.onload = initProducts;