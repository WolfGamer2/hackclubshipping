// script.js

document.getElementById('shipmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const recipient = document.getElementById('recipientName').value;
    const address = document.getElementById('address').value;
    const item = document.getElementById('item').value;

    alert(`Shipment created for ${recipient} at ${address} with item: ${item}`);
});

document.getElementById('trackButton').addEventListener('click', function() {
    const trackingNumber = document.getElementById('trackingNumber').value;
    
    if (trackingNumber === "1234") {
        document.getElementById('trackingStatus').innerText = "Your shipment is on its way!";
    } else {
        document.getElementById('trackingStatus').innerText = "Tracking number not found.";
    }
});
