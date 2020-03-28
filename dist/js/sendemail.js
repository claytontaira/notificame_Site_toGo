var name = document.getElementById('name');
var email = document.getElementById('email');
var subject = document.getElementById('subject');
var message = document.getElementById('message');
var send_button = document.getElementById('send_button');


if (send_button) {
    send_button.addEventListener('click', function() {
        console.log('name', name);
        console.log('email', email);
        console.log('subject', subject);
        console.log('message', message);
    });
}


