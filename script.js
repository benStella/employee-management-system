
const username = document.querySelector('#username').value;
const password = document.querySelector('#password').value;

document.querySelector('form').addEventListener('submit', function(event) {
  console.log(username,password);
  event.preventDefault();
  fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: FormData,
  }).then(response =>
    response.json()
  ).then(text => {
    console.log(text);
  }).catch(error => {
    console.error(error);
  });
});



