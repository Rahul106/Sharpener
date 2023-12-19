

let subButton = document.getElementById('subBtn');

subButton.addEventListener("click", function (event){

    let name = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    let object = {
        name, email, phone
    };

    let jsonstring = JSON.stringify(object);
    localStorage.setItem(object.email, `${jsonstring}`);

});


// Write your code below:
// function handleFormSubmit(event) {
    
//     event.preventDefault();
   
//     var name = document.getElementById('username').value;
//     var email = document.getElementById('email').value;
//     var phone = document.getElementById('phone').value;

//     // Check if name and email are not empty
//     if (name && email && phone) {
//             // Get existing users from local storage or create an empty object
//         var users = JSON.parse(localStorage.getItem('users')) || {};

//         // Create a unique key for the user
//        var userId = email;

//             // Create user object
//         var user = {
//             name: name,
//             email: email,
//             phone: phone
//         };

//         let myObj_serialized = JSON.stringify(user);
//         // Save the updated users object to local storage
//         localStorage.setItem(email, JSON.stringify(user));
//     }

// }



// function handleFormSubmit (event) {
    
//     event.preventDefault();

//     var name = document.getElementById('uName').value;
//     var email = document.getElementById('uEmail').value;
//     var phone = document.getElementById('phone').value;

//     // Check if name and email are not empty
//     if (name && email && phone) {
//             // Get existing users from local storage or create an empty object
//         var users = JSON.parse(localStorage.getItem('users')) || {};

//         // Create a unique key for the user
//         var userId = email;

//             // Create user object
//         var user = {
//             name: name,
//             email: email,
//             phone: phone
//         };

//         // Save the updated users object to local storage
//         localStorage.setItem(email, JSON.stringify(user));  
//     }

// }






