// script.js

// Handling login
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // For now, just log the credentials
    console.log(`Login Attempt: ${email}, ${password}`);

    // Here you would typically make an API call to authenticate the user
    // e.g., axios.post('/api/login', { email, password })
});

// Handling signup
document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Log the signup details
    console.log(`Signup Attempt: ${name}, ${email}, ${password}`);

    // API call to register the user
    // e.g., axios.post('/api/register', { name, email, password })
});

// Handling product listing
document.getElementById('sellForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const category = document.getElementById('category').value;
    const image = document.getElementById('image').files[0];

    // Log the product details
    console.log(`Product Listing: ${title}, ${description}, ${price}, ${category}`);

    // Typically you would upload the image and product details via an API call
    // e.g., axios.post('/api/products', { title, description, price, category, image })
});
