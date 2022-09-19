const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.assign("/");
  } else {
    alert("Logout failed");
  }
};

async function goToProfile() {
  console.log("Going to Profile");
  event.preventDefault();
  document.location.assign("/profile");
}

async function goToMap() {
  console.log(
    "going to map? yeah yeah yeah, map and home page are the same right now"
  );
  event.preventDefault();
  document.location.assign("/");
}

async function joinGroup() {
  const response = await fetch(
    `/api/users/joinGroup/${document.querySelector("#userGroupInput").value}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    }
  );
  if (response.ok) {
    console.log("Join Group!", document.querySelector("#userGroupInput").value);
    document.location.assign("/");
  } else {
    alert("Failed to join group.");
  }
}

async function createGroup() {
  let userInput = document.querySelector("#userGroupInput").value;
  if(userInput == null || userInput == '')
  {
  alert('Please input a value!');
  return;
  }

  const response = await fetch(`/api/groups/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: userInput,
    }),
  });
  if (response.ok) {
    console.log("create Group!", response.body, "This should be the group!");
    document.location.assign("/");
  }
  else {
    alert("Failed to create group.");
  }
}

async function leaveGroup() {
  event.preventDefault();
  const response = await fetch(`/api/users/leaveGroup/`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  });
  if(response.status === 201)
  {
    alert("No group");
  }
  else if (response.ok) 
  {
    console.log("Leave group");
    document.location.assign("/profile");
  } 
  else 
  {
    alert("Unable to leave group.");
  }
  console.log( response.status ,"Hello" );
}

// These are checking if the querySelector exists - cause they are hidden in the home/login page
// Then adds event listener if it does exist - when in any screen than login.
if (document.querySelector("#logout"))
  document.querySelector("#logout").addEventListener("click", logout);

if (document.querySelector("#profile"))
  document.querySelector("#profile").addEventListener("click", goToProfile);
if (document.querySelector("#joinGroup"))
  document.querySelector("#joinGroup").addEventListener("click", joinGroup);
if (document.querySelector("#createGroup"))
  document.querySelector("#createGroup").addEventListener("click", createGroup);

if (document.querySelector("#home"))
  document.querySelector("#home").addEventListener("click", goToMap);
if (document.querySelector("#mapBtn"))
  document.querySelector("#mapBtn").addEventListener("click", goToMap);

if (document.querySelector("#leaveGroup"))
  document.querySelector("#leaveGroup").addEventListener("click", leaveGroup);
