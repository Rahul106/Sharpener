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
    existingUsers.push(userDetails);

    // Convert the array to a JSON string and store it in local storage
    //localStorage.setItem("users", JSON.stringify(existingUsers));
    localStorage.setItem(email.value, JSON.stringify(userDetails));

    // Update the displayed user list
    updateDisplayedUsers(existingUsers);

    // Optionally, you can provide feedback to the user
    alert("User details saved successfully!");
  }

  function updateDisplayedUsers(users) {
    var userList = document.getElementById("userList");

    // Clear the existing list items
    userList.innerHTML = "";

    // Add each user as a list item
    users.forEach(function(user) {
      var listItem = document.createElement("li");
      listItem.textContent = "Name: " + user.name + ", Email: " + user.email + ", Phone: " + user.phoneNumber;
      userList.appendChild(listItem);
    });
  }

  // Display existing users when the page loads
  var existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  updateDisplayedUsers(existingUsers);