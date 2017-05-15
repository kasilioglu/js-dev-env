import {getUsers, deleteUser} from './api/userApi';

// Populate user table via api
getUsers().then(result=>{
  let usersBody = "";

  result.forEach(user =>{
    usersBody += `<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser"> Delete</a></td>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;

   const deleteLinks = global.document.getElementsByClassName('deleteUser');

  // Must use array.from to create a real array from a DOM collection
  // getElementsByClassname only returns an "array like" object
  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;
      event.preventDefault();
      //call api
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });

});
