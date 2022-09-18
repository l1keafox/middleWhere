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
        alert("Login Failed");
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
    const reponse = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username: userName,
        password: password,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (reponse.ok) {
      document.location.replace("/");
      alert("User created! Please login");
    } else {
      console.log("404");
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
