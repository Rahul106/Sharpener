function handleFormSubmit(event) {
    event.preventDefault(); // Prevents the default form submission

    // Get existing user details from local storage
    //var existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Get user details from the form
    var userDetails = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phoneNumber: document.getElementById("phoneNumber").value
    };

    // Add the new user to the existing users array
    //existingUsers.push(userDetails);

    // Convert the array to a JSON string and store it in local storage
    //localStorage.setItem("users", JSON.stringify(existingUsers));
    localStorage.setItem(userDetails.email, JSON.stringify(userDetails));

    // Update the displayed user list
    updateDisplayedUsers(userDetails);

    // Optionally, you can provide feedback to the user
    //alert("User details saved successfully!");
  }

  function updateDisplayedUsers(users) {
    var userList = document.getElementById("userList");
    var listItem = document.createElement("li");
    listItem.textContent = "Name: " + users.name + ", Email: " + users.email + ", Phone: " + users.phoneNumber;
    // Clear the existing list items
    userList.innerHTML += listItem;
  }
