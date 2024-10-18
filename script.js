let shipmentHistory = [];

// Function to show notification messages
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Fade in and out
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
        notification.remove(); // Remove from DOM after fading out
    }, 3000); // Show for 3 seconds
}

// Function to update the shipment history display
function updateHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = ''; // Clear the current list

    shipmentHistory.forEach((shipment, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}: ${shipment.item} to ${shipment.recipient}, Address: ${shipment.address}, Tracking Number: ${shipment.trackingNumber}`;
        historyList.appendChild(li);
    });
}

// Function to simulate API calls
async function createShipmentAPI(shipment) {
    console.log("Sending shipment data to API...", shipment);
    return new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
}

// Function to generate a random tracking number
function generateTrackingNumber() {
    return Math.floor(Math.random() * 10000).toString();
}

// Form submission event listener
document.getElementById('shipmentForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const recipient = document.getElementById('recipientName').value;
    const address = document.getElementById('address').value;
    const item = document.getElementById('item').value;

    const shipment = { recipient, address, item, trackingNumber: generateTrackingNumber() };
    shipmentHistory.push(shipment);

    await createShipmentAPI(shipment); // Call the API simulation
    showNotification(`Shipment created for ${recipient} at ${address} with item: ${item} (Tracking Number: ${shipment.trackingNumber})`);
    updateHistory();
});

// Tracking button event listener
document.getElementById('trackButton').addEventListener('click', function() {
    const trackingNumber = document.getElementById('trackingNumber').value;
    const shipment = shipmentHistory.find(s => s.trackingNumber == trackingNumber);
    
    if (shipment) {
        document.getElementById('trackingStatus').innerText = `Your shipment to ${shipment.recipient} is on its way!`;
    } else {
        document.getElementById('trackingStatus').innerText = "Tracking number not found.";
    }
});
