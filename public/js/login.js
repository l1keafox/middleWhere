//const { response } = require("express");

const loginFormHandler = async (event) => {
  event.preventDefault();

  const userName = document.querySelector("#username-log").value.trim();
  const password = document.querySelector("#password-log").value.trim();

  if (userName && password) {
    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ userName, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/profile");
      } else {
        alert("Login failed. Invalid username or password.");
      }
    } catch (err) {
      console.log(err);
    }
  }
};

async function signupFormHandler(event) {
  event.preventDefault();

  const userName = document.querySelector("#username-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  async function success(position) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username: userName,
        password: password,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if(response.status === 201){
      alert("User name exists");
      return;
    }

    // const users = await fetch(`/api/allUsers`, {
    //   method: "GET",
    // });

    // let username = users.json;
    // console.log(users);

    // for (i = 0; i < username.length; i++) {
    //   if (username[i].userName === userName) {
    //     alert("User already exists. Please login");
    //   }
    // }

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      console.log("404");
      alert("Unable to sign up.");
    }
  }
  console.log("success");
  navigator.geolocation.getCurrentPosition(success, success);
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
