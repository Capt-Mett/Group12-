// productPage2.js

// Function to add a product to the cart and store the ordered product data
// Function to add product to the cart
function addToCart(productName, color, addons, quantity) {
    // Get the existing ordered products from localStorage or initialize an empty array
    let orderedProducts = JSON.parse(localStorage.getItem('orderedProducts')) || [];

    // Add the current product to the ordered products array
    orderedProducts.push({ productName, color, addons, quantity });

    // Store the updated ordered products back to localStorage
    localStorage.setItem('orderedProducts', JSON.stringify(orderedProducts));

    // Increment the cart count (optional)
    updateCartCount();

    // Populate the ordered products table
    populateOrderedProducts();
}



// Function to update the cart count (optional)
function updateCartCount() {
    let cartCount = parseInt(document.getElementById('cart-count').textContent) || 0;
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
}


// Function to filter products based on the selected category
function filterProducts(category) {
    // Get all product elements
    let products = document.querySelectorAll('.col-6[data-category]');
    
    // Loop through each product
    products.forEach(product => {
        // Check if the product matches the selected category or if the category is "View All"
        if (category === 'View All' || product.dataset.category === category) {
            product.style.display = 'block'; // Show the product
        } else {
            product.style.display = 'none'; // Hide the product
        }
    });
}

// Add event listeners to dropdown menu items
document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function() {
        let selectedCategory = this.textContent.trim(); // Extract the selected category
        filterProducts(selectedCategory); // Filter products based on the selected category
    });
});

// Function to handle the search functionality
function searchProducts() {
    // Get the search query
    let query = document.getElementById('search-input').value.toLowerCase();
    
    // Get all product elements
    let products = document.querySelectorAll('.col-6[data-category]');
    
    // Flag to check if any matching products are found
    let found = false;
    
    // Loop through each product
    products.forEach(product => {
        // Get the product name
        let productName = product.querySelector('.product-link').textContent.toLowerCase();
        
        // Check if the product name contains the search query
        if (productName.includes(query)) {
            product.style.display = 'block'; // Show the product
            found = true; // Set found flag to true
        } else {
            product.style.display = 'none'; // Hide the product
        }
    });
    
    // Display a message if no matching products are found
    if (!found) {
        document.getElementById('no-results').style.display = 'block';
    } else {
        document.getElementById('no-results').style.display = 'none';
    }
}

// Add event listener to the search input
document.getElementById('search-input').addEventListener('input', searchProducts);
