 
function handleFormSubmit(event) {
    event.preventDefault(); 

    var userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
   
    localStorage.setItem(userDetails.email, JSON.stringify(userDetails));
    updateDisplayedUsers(userDetails);
  }

  function updateDisplayedUsers(users) {

    let userList = document.getElementById('uList');
    let listElement = document.createElement('li');  
    listElement.classList.add('listElement');
    let Para  = document.createElement('p');
    Para.classList.add('Para'); 
    Para.innerHTML += `Name:  ${users.username} , Email:  ${users.email} , Phone:  ${users.phone}`;

    let Delete = document.createElement('button');
    Delete.addEventListener('click', function(event){
      
        let listitem = event.target.parentElement;
        console.log(listitem);
        let data = listitem.querySelector('.Para').textContent.split(' ')[3];
        localStorage.removeItem(users.email);
        userList.removeChild(listitem);
    })
   
    Delete.textContent = "Delete";
    Delete.classList.add('delete');
    listElement.appendChild(Para);
    listElement.appendChild(Delete);
    userList.append(listElement);
  }

//module.exports = handleFormSubmit;