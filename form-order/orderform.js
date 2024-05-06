/**
 * Order Form JavaScript File
 * Author: Alondra Medina
 * Date: 23/4/2024
 */

/**
 * Function to retrieve table data and populate the order form.
 */
function populateOrderForm() {
    // Fetch order details from the backend
    fetch('/orders') // Assuming the endpoint for getting order details is /orders
        .then(response => response.json())
        .then(data => {
            // Assuming the first order in the list contains the necessary information for the title
            const order = data[0];
            // Populate event name, media team name, order number, event start date, and booking date
            document.getElementById('event-name').textContent = order.eventName;
            document.getElementById('media-team-name').textContent = order.mediaTeamName;
            document.getElementById('order-number').textContent = order.orderNumber;
            document.getElementById('event-start-date').textContent = order.eventStartDate;
            document.getElementById('booking-date').textContent = order.bookingDate;
            // Populate order table rows
            const orderTable = document.getElementById('order-table');
            // Clear existing rows
            orderTable.innerHTML = '';
            // Populate new rows
            order.products.forEach(product => {
                const row = `
                    <tr>
                        <td>${product.image}</td>
                        <td>${product.name}</td>
                        <td>${product.id}</td> <!-- Using product ID as SKU -->
                        <td>${product.accessories}</td>
                        <td>${product.color}</td>
                        <td>${product.quantity}</td>
                        <td>
                            <input type="checkbox" id="checkbox-${product.id}">
                            <label for="checkbox-${product.id}"></label>
                        </td>
                    </tr>
                `;
                orderTable.insertAdjacentHTML('beforeend', row);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Call the populateOrderForm function when the page loads
window.onload = function() {
    populateOrderForm();

    // Get today's date
    const today = new Date();

    // Format the date
    const formattedDate = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    // Update the date in the HTML
    document.getElementById('current-date').textContent = formattedDate;

    // Get all quantity cells
    const quantityCells = document.querySelectorAll('#order-table tbody td:nth-child(6)');

    // Initialize total quantity
    let totalQuantity = 0;

    // Loop through each quantity cell and add up the values
    quantityCells.forEach(cell => {
        totalQuantity += parseInt(cell.textContent || 0);
    });

    // Update the total quantity in the total row
    document.getElementById('total-quantity').textContent = totalQuantity;
    
    // Fetch shipping address when the page loads
    fetchShippingAddress();
};

// Add click event listener to the "Complete Order" button
document.getElementById('complete-order').addEventListener('click', function() {
    // Check if all necessary steps are completed
    const trackingNumber = document.getElementById('tracking-number').value;
    const allProductsChecked = [...document.querySelectorAll('#order-table tbody input[type="checkbox"]')].every(checkbox => checkbox.checked);
    if (trackingNumber && allProductsChecked) {
        // Open the popup when the button is clicked
        openPopup(); 
        // Simulate backend processing (setTimeout is just for demonstration)
        setTimeout(function() {
            // Show success message after backend processing
            showSuccessMessage();
            // Send tracking number and completion status to the backend
            sendOrderInfo(trackingNumber, true); 
        }, 2000); // Adjust the time delay as needed
    } else {
        // Display error message if tracking number or products are not complete
        const errorMessage = document.getElementById('error-message');
        if (errorMessage) {
            errorMessage.textContent = "Please enter tracking number and make sure all products are checked.";
            errorMessage.style.color = "red";
        }
    }
});

/**
 * Fetches the shipping address from the backend and displays it.
 */
function fetchShippingAddress() {
    // Fetch the shipping address from the backend
    fetch('/shipping-address') // Assuming the endpoint for getting shipping address is /shipping-address
        .then(response => response.json())
        .then(data => {
            // Assuming the shipping address is returned as a string
            const shippingAddress = data.shippingAddress;

            // Display the shipping address in the HTML
            const shippingAddressContainer = document.getElementById('shipping-address');
            shippingAddressContainer.innerHTML = `
                <label for="shipping-address">Shipping Address:</label>
                <span>${shippingAddress}</span>
            `;
        })
        .catch(error => console.error('Error fetching shipping address:', error));
}

// Function to open the popup and start the loading spinner
function openPopup() {
    var popup = document.getElementById("popup-container");
    var loadingSpinner = document.getElementById("loading-spinner");
    var successMessage = document.getElementById("success-message");
    if (popup && loadingSpinner && successMessage) {
        popup.style.display = "block";
        loadingSpinner.style.display = "block"; // Show the loading spinner
        successMessage.style.display = "none"; // Hide the success message
    }
}

// Function to close the popup
function closePopup() {
    var popup = document.getElementById("popup-container");
    if (popup) {
        popup.style.display = "none";
    }
}

// Function to show success message and hide loading spinner
function showSuccessMessage() {
    var loadingSpinner = document.getElementById("loading-spinner");
    var successMessage = document.getElementById("success-message");
    if (loadingSpinner && successMessage) {
        loadingSpinner.style.display = "none"; // Hide the loading spinner
        successMessage.style.display = "block"; // Show the success message
    }
}

/**
 * Sends the tracking number and completion status to the backend.
 * 
 * @param {string} trackingNumber - The tracking number to be sent.
 * @param {boolean} completionStatus - The completion status of the order.
 */
function sendOrderInfo(trackingNumber, completionStatus) {
    // Assuming you have an endpoint for sending order information, e.g., /send-order-info
    fetch('/send-order-info', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            trackingNumber: trackingNumber,
            completionStatus: completionStatus
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to send order information');
        }
        // Handle success
        console.log('Order information sent successfully');
    })
    .catch(error => {
        // Handle error
        console.error('Error sending order information:', error);
    });
}

// Event listener for the exit button in the popup
document.addEventListener("DOMContentLoaded", function() {
    // Event listener for the exit button in the popup
    var exitBtn = document.querySelector(".exit-btn");
    if (exitBtn) {
        exitBtn.addEventListener("click", function() {
            closePopup(); // Close the popup when the exit button is clicked
        });
    }
});
