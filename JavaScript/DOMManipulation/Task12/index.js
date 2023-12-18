document.getElementById('userDetail').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('uName').value;
    const email = document.getElementById('uEmail').value;
    const password = document.getElementById('pNumber').value;

    const formData = {
        fullName: fullName,
        email: email,
        password: password
    };

    saveFormData(formData);
});

function saveFormData(formData) {
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

    storedFormData.push(formData);

    localStorage.setItem('formData', JSON.stringify(storedFormData));
}