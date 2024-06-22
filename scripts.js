document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;

    // data object
    const formData = {
        name: name,
        email: email,
        phone: phone,
        address: address,
        dob: dob,
        gender: gender
    };

    // Display the form data in the console
    console.log('Form Data Submitted: ', formData);

        
    // Ask user for confirmation to submit application?
    const askSubmitApplication = confirm('Do you want to submit the application?');
    if (!askSubmitApplication) {
        window.location.reload();
    }
    

    // Show a success message or clear the form
    alert('Form submitted successfully!');
    document.getElementById('applicationForm').reset();
});
