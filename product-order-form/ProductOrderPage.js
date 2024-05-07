// Function to clear localStorage
function clearLocalStorage() {
    localStorage.removeItem('orderedProducts');
}

// Function to retrieve ordered products from storage and populate the table
function populateOrderedProducts() {
    // Get the ordered products from localStorage or initialize an empty array
    let orderedProducts = JSON.parse(localStorage.getItem('orderedProducts')) || [];

    // Get the table body element
    let tableBody = document.getElementById('ordered-products');

    // Clear any existing rows in the table
    tableBody.innerHTML = '';

    // Create a map to group products by name and sum up their quantities
    let productMap = new Map();

    // Iterate over the ordered products and group them by name
    orderedProducts.forEach(product => {
        // Check if the product data is complete
        if (product.productName && product.color && product.addons && product.quantity) {
            let key = `${product.productName}-${product.color}-${product.addons}`; // Use a unique key for each product
            if (productMap.has(key)) {
                // If the product already exists in the map, increment its quantity
                productMap.get(key).quantity += product.quantity;
            } else {
                // If the product doesn't exist in the map, add it with its quantity
                productMap.set(key, { ...product });
            }
        }
    });

    // Iterate over the product map and create table rows
    productMap.forEach(product => {
        // Create a new table row
        let row = document.createElement('tr');

        // Populate the row with product details
        row.innerHTML = `
            <td><button class="remove-item-btn">&#x274C;</button></td>
            <td>${product.productName}</td>
            <td>${product.color}</td>
            <td>${product.addons}</td>
            <td>
                <button class="decrease-quantity">-</button>
                <input type="text" class="quantity-input" value="${product.quantity}" readonly>
                <button class="increase-quantity">+</button>
            </td>
        `;

        // Append the row to the table body
        tableBody.appendChild(row);
    });

    // Update the total quantity
    updateTotalQuantity();

    // Attach event listeners to remove item buttons and quantity buttons
    attachEventListeners();
}

// Function to attach event listeners to remove item buttons and quantity buttons
function attachEventListeners() {
    document.querySelectorAll('.remove-item-btn').forEach(button => {
        // Attach click event listener to remove item buttons
        button.addEventListener('click', function() {
            let row = this.closest('tr');
            row.remove();
            removeFromCart(row);
            updateTotalQuantity();
        });
    });

    document.querySelectorAll('.decrease-quantity').forEach(button => {
        // Attach click event listener to decrease quantity buttons
        button.addEventListener('click', function() {
            let input = this.nextElementSibling;
            let value = parseInt(input.value);
            if (value > 0) {
                input.value = value - 1;
                updateTotalQuantity();
            }
        });
    });

    document.querySelectorAll('.increase-quantity').forEach(button => {
        // Attach click event listener to increase quantity buttons
        button.addEventListener('click', function() {
            let input = this.previousElementSibling;
            input.value = parseInt(input.value) + 1;
            updateTotalQuantity();
        });
    });
}

// Function to update the total quantity
function updateTotalQuantity() {
    const quantityInputs = document.querySelectorAll('.quantity-input');
    const totalQuantity = Array.from(quantityInputs).reduce((acc, input) => acc + parseInt(input.value), 0);
    document.getElementById('quantity').value = totalQuantity;
}

// Functionality to remove items
document.addEventListener('DOMContentLoaded', function() {
    const removeButtons = document.querySelectorAll('.remove-item-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.parentElement.parentElement;
            row.remove();
            updateTotalQuantity();
        });
    });
});

// Call the function to populate ordered products when the page loads
window.addEventListener('load', populateOrderedProducts);
