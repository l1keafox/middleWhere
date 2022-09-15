const { response } = require("express");

const loginFormHandler = async (event) => {
  event.preventDefault();

  const userName = document.querySelector("#user-log").value.trim();
  const password = document.querySelector("#password-log").value.trim();

  if (userName && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ userName, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Login Failed");
    }
  }
};

const signupFormHandler = async (event) => {
    event.preventDefault();
    const userName = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  console.log(userName,password);
  console.log(JSON.stringify({userName, password}));
    if (userName && password) {
        const response = await fetch ('/api/users' , {
            method: 'POST',
            body: JSON.stringify({userName, password}),
            headers: {'Content-Type': 'applications/json'},
        });
        console.log(response,"{reponse?");
        if (response.ok) {
//            document.location.replace('/');
        } else {
            alert('Failed login');
        }
    } 
};
async function newSignup(event) {
  event.preventDefault();

  const userName = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  console.log(userName,password);
  if(userName && password) {
    const reponse = await fetch('/api/users',{
      method: 'POST',
      body: JSON.stringify({
        username:userName,
        password:password
      }),
      headers: {'Content-Type':'application/json'},
    });


    if(response.ok){

    } else {
    }
  }

}
//document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', newSignup);