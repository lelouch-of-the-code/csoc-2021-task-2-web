import axios from 'axios';
import { displayTask, addTask, editTask, updateTask } from './main';
const API_BASE_URL = 'https://todo-app-csoc.herokuapp.com/';

function getTasks() {
    /***
     * @todo Fetch the tasks created by the user and display them in the dom.
     */

     axios({
        headers: {
            Authorization: 'Token ' + localStorage.getItem('token'),
        },
        url: API_BASE_URL + 'todo/',
        method: 'get',
      }).then(function({data, status}) { 
        if(data.length){
          data.forEach(function(task){
            displayTask(task);
          })
        }  
      
      })
}

axios({
    headers: {
        Authorization: 'Token ' + localStorage.getItem('token'),
    },
    url: API_BASE_URL + 'auth/profile/',
    method: 'get',
}).then(function({data, status}) {
  id('avatar-image').src = 'https://ui-avatars.com/api/?name=' + data.name + '&background=fff&size=33&color=007bff';
  id('profile-name').innerHTML = data.name;
  getTasks();
})


function test(params) {
    console.log("works!!");
    console.log(params);
}

// function displayTask(task) {
//     let display = document.createElement("li");
//     display.className = "list-group-item d-flex justify-content-between align-items-center";
//     display.innerHTML = `
//     <input id="input-button-${task.id}" type="text" class="form-control todo-edit-task-input hideme" placeholder="Edit The Task">
//     <div id="done-button-${task.id}"  class="input-group-append hideme">
//         <button class="btn btn-outline-secondary todo-update-task" type="button" id="update-${task.id}">Done</button>
//     </div>
//     <div id="task-${task.id}" class="todo-task">
//         ${task.title}
//     </div>

//     <span id="task-actions-${task.id}">
//         <button style="margin-right:5px;" type="button" id="edit-${task.id}"
//             class="btn btn-outline-warning">
//             <img src="https://res.cloudinary.com/nishantwrp/image/upload/v1587486663/CSOC/edit.png"
//                 width="18px" height="20px">
//         </button>
//         <button type="button" class="btn btn-outline-danger" id="delete-${task.id}">
//             <img src="https://res.cloudinary.com/nishantwrp/image/upload/v1587486661/CSOC/delete.svg"
//                 width="18px" height="22px">
//         </button>
//     </span>`;
//     id("tasklist").appendChild(display);
//     id("delete-" + task.id).addEventListener("click",function(){
//         deleteTask(task.id);
//     });
//     id("edit-" + task.id).addEventListener("click",function(){
//         editTask(task.id);
//     });
//     id("update-" + task.id).addEventListener("click",function(){
//         updateTask(task.id);
//     });
// }

// function editTask(i) {
//     document.getElementById('task-' + i).classList.add('hideme');
//     document.getElementById('task-actions-' + i).classList.add('hideme');
//     document.getElementById('input-button-' + i).classList.remove('hideme');
//     document.getElementById('done-button-' + i).classList.remove('hideme');
//     console.log(i);
//     console.log("editee");
// }

// function deleteTask(i) {
//     /**
//      * @todo Complete this function.
//      * @todo 1. Send the request to delete the task to the backend server.
//      * @todo 2. Remove the task from the dom.
//      */

//     console.log("deleteee")
//     console.log(id("task-" + i));
//     axios({
//         url: API_BASE_URL + 'todo/'+i+'/',
//         headers: {
//             Authorization: 'Token ' + localStorage.getItem('token'),
//         },
//         method: 'delete',

//     }).then(function({data, status}) {
//         let item = document.getElementById("input-button-"+i);
//         let listItem = item.parentElement;
//         listItem.parentNode.removeChild(listItem);
//         // id("input-button-" + i).remove();
//         // id("delete-" + i).remove();
//         // id("edit-" + i).remove();
//         // id("done-button-" + i).remove();
//         // id("task-actions-" + i).remove();
//         // id("task-" + i).remove();
//     }).catch(function(err) {
//       displayErrorToast('Erron in deleting the task');
//       console.log(err);
//     })
// }

// function updateTask(id) {
//     /**
//      * @todo Complete this function.
//      * @todo 1. Send the request to update the task to the backend server.
//      * @todo 2. Update the task in the dom.
//      */

//     console.log("updateee")
//     document.getElementById('task-' + id).classList.remove('hideme');
//     document.getElementById('task-actions-' + id).classList.remove('hideme');
//     document.getElementById('input-button-' + id).classList.add('hideme');
//     document.getElementById('done-button-' + id).classList.add('hideme');
    
// }

function id(params) {
    return document.getElementById(params);
}

