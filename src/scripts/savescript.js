// Import xlsx library
import XLSX from 'xlsx';

// Your existing code...

document.addEventListener('DOMContentLoaded', function() {
    // Your existing code...

    // Select the submit button in the popup
    const submitBtn = document.getElementById('submit-popup');

    // Add click event listener to the submit button
    submitBtn.addEventListener('click', function() {
        // Select all input fields in the popup
        const inputFields = document.querySelectorAll('.popup-content input');

        // Create an array to store data from input fields
        const data = [];

        // Push the header row data into the array
        const headers = ['Full Legal Name', 'Phone Number', 'Mail', 'Other Notes'];
        data.push(headers);

        // Push data from input fields into the array
        inputFields.forEach(input => {
            data.push(input.value);
        });

        // Convert data into worksheet
        const worksheet = XLSX.utils.aoa_to_sheet(data);

        // Create a workbook and add the worksheet
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Hotel Booking Data');

        // Save the workbook as an Excel file
        XLSX.writeFile(workbook, 'hotel_booking_data.xlsx');
    });
});
