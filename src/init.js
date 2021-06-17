import axios from 'axios';
const API_BASE_URL = 'https://todo-app-csoc.herokuapp.com/';

function getTasks() {
    /***
     * @todo Fetch the tasks created by the user and display them in the dom.
     */
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

function id(id) {
    return document.getElementById(id);
}