// Toggle the main dropdown when the image is clicked
document.getElementById('dropdownImage').onclick = function(event) {
    var dropdown = document.getElementById('dropdownMenu');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
    event.stopPropagation(); // Prevent the event from bubbling up
};

// Toggle nested dropdown when "Button 1" is clicked
document.getElementById('button1').onclick = function(event) {
    event.preventDefault(); // Prevent default link behavior
    var nestedDropdown = document.getElementById('nestedDropdown');
    if (nestedDropdown.style.display === 'none' || nestedDropdown.style.display === '') {
        nestedDropdown.style.display = 'block';
    } else {
        nestedDropdown.style.display = 'none';
    }
    event.stopPropagation(); // Prevent the event from bubbling up
};

// Close dropdown and reset nested dropdown if the user clicks outside
window.onclick = function(event) {
    var dropdown = document.getElementById('dropdownMenu');
    var nestedDropdown = document.getElementById('nestedDropdown');

    // Check if the click is outside the dropdown or the image
    if (!event.target.closest('.container') && dropdown.style.display === 'block') {
        // Close the main dropdown
        dropdown.style.display = 'none';

        // Reset (hide) the nested dropdown
        nestedDropdown.style.display = 'none';
    }
};