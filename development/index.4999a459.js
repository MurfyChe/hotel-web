const bookButtons = document.querySelectorAll(".book-btn");
bookButtons.forEach((button)=>{
    button.addEventListener("click", function() {
    // Add more functionality here, like redirecting to a booking page
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const openPopupBtn = document.querySelectorAll(".book-btn");
    const closePopupBtn = document.getElementById("close-popup");
    const popup = document.getElementById("popup");
    openPopupBtn.forEach((button)=>{
        button.addEventListener("click", function() {
            popup.style.display = "block";
        });
    });
    closePopupBtn.addEventListener("click", function() {
        popup.style.display = "none";
    });
    // Close the popup when clicking outside of it
    window.addEventListener("click", function(event) {
        if (event.target === popup) popup.style.display = "none";
    });
});
const hotels = document.querySelectorAll(".hotel");
hotels.forEach((hotel)=>{
    const bookBtn = hotel.querySelector(".book-btn");
    const hotelId = bookBtn.getAttribute("data-hotel");
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
      <div class="popup-content">
        <span class="close">&times;</span>
        <h2>Popup Content for Hotel ${hotelId}</h2>
        <input placeholder="Full Legal Name">
        <input placeholder="Phone Number">
        <input placeholder="Mail">
        <input placeholder="Other Notes">
        <button class="send-btn">Send Data </button>
      </div>
    `;
    document.body.appendChild(popup);
    bookBtn.addEventListener("click", function() {
        popup.style.display = "block";
    });
    const closeBtn = popup.querySelector(".close");
    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
    });
    const sendBtn = popup.querySelector(".send-btn");
    sendBtn.addEventListener("click", function() {
        // Collect data from input fields
        const formData = [];
        const inputFields = popup.querySelectorAll("input");
        inputFields.forEach((input)=>{
            formData.push(`${input.placeholder}: ${input.value}`);
        });
        // Convert formData array to a string
        const dataString = formData.join("\n");
        // Create a Blob containing the data
        const blob = new Blob([
            dataString
        ], {
            type: "text/plain"
        });
        // Create a temporary anchor element
        const a = document.createElement("a");
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = `booking_data_hotel_${hotelId}.txt`;
        // Trigger the download
        a.click();
        // Release the object URL
        window.URL.revokeObjectURL(url);
        // Optionally, close the popup after sending data
        popup.style.display = "none";
    });
    window.addEventListener("click", function(event) {
        if (event.target === popup) popup.style.display = "none";
    });
});

//# sourceMappingURL=index.4999a459.js.map
