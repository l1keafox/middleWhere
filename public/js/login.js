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
//  console.log(userName,password);
    if (userName && password) {
        const response = await fetch ('/api/users' , {
            method: 'POST',
            body: JSON.stringify({userName, password}),
            headers: {'Content-Type': 'applications/json'},
        });

        if (response.ok) {
//            document.location.replace('/');
        } else {
            alert('Failed login');
        }
    } 
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);