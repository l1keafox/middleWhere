// //const { response } = require("express");

// const loginFormHandler = async (event) => {
//   event.preventDefault();

//   const userName = document.querySelector("#user-log").value.trim();
//   const password = document.querySelector("#password-log").value.trim();

//   if (userName && password) {
//     const response = await fetch("/api/users/login", {
//       method: "POST",
//       body: JSON.stringify({ userName, password }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/");
//     } else {
//       alert("Login Failed");
//     }
//   }
// };
// function geoFindMe() {

//   const status = document.querySelector('#status');
//   const mapLink = document.querySelector('#map-link');

//   mapLink.href = '';
//   mapLink.textContent = '';

//   function success(position) {
//     const latitude  = position.coords.latitude;
//     const longitude = position.coords.longitude;

//     status.textContent = '';
//     mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
//     mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
//   }

//   function error() {
//     status.textContent = 'Unable to retrieve your location';
//   }

//   if (!navigator.geolocation) {
//     status.textContent = 'Geolocation is not supported by your browser';
//   } else {
//     status.textContent = 'Locating…';
//     navigator.geolocation.getCurrentPosition(success, error);
//   }

// }

//document.querySelector('#find-me').addEventListener('click', geoFindMe);
const signupFormHandler = async (event) => {
    event.preventDefault();
    const userName = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  console.log(userName,password);
  console.log(JSON.stringify({userName, password}));
  //geoFindMe();
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
  let latitude;
  let longitude;
  async function success(position) {
    latitude  = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log("success");
    const reponse = await fetch('/api/users',{
      method: 'POST',
      body: JSON.stringify({
        username:userName,
        password:password,
        latitude:latitude,
        longitude:longitude
      }),
      headers: {'Content-Type':'application/json'},
    });    
  }

  async function error() {
    console.log("sniuuccess");

    status.textContent = 'Unable to retrieve your location';
    const reponse = await fetch('/api/users',{
      method: 'POST',
      body: JSON.stringify({
        username:userName,
        password:password,
      }),
      headers: {'Content-Type':'application/json'},
    });    
  }  
  console.log(userName,password,latitude);
  console.log("success");
  navigator.geolocation.getCurrentPosition(success,error);


  // if(userName && password) {
  //   const reponse = await fetch('/api/users',{
  //     method: 'POST',
  //     body: JSON.stringify({
  //       username:userName,
  //       password:password,
  //       latitude:latitude,
  //       longitude:longitude
  //     }),
  //     headers: {'Content-Type':'application/json'},
  //   });


  //   if(reponse.ok){

  //   } else {
  //   }
  // }

}
//document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', newSignup);