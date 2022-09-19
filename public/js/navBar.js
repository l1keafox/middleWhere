const logout = async () => {

    const response = await fetch ('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.assign('/');
    } else {
        alert("Logout failed");
    }
};

async function goToProfile(){
    console.log("Going to Profile");
    event.preventDefault();
    document.location.assign('/profile');
}

async function goToMap() {
    console.log("going to map? yeah yeah yeah, map and home page are the same right now");
    event.preventDefault();
    document.location.assign('/');

}

async function joinGroup(){
    const response = await fetch(`/api/users/${document.querySelector('#userGroupInput').value}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
      });
      // TODO - create alerts for bad join groups
    console.log("Join Group!",document.querySelector('#userGroupInput').value);
    document.location.assign('/');

}

async function createGroup() {
  const response = await fetch(`/api/groups/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({"name":document.querySelector("#userGroupInput").value }),
  });
  // TODO - create alerts for bad join group create?
  console.log("create Group!",response.body, 'This should be the group!' );
  document.location.assign('/');

}


// These are checking if the querySelector exists - cause they are hidden in the home/login page
// Then adds event listener if it does exist - when in any screen than login.
if(document.querySelector('#logout'))document.querySelector('#logout').addEventListener('click', logout);

if(document.querySelector('#profile'))document.querySelector('#profile').addEventListener('click',goToProfile);
if(document.querySelector('#joinGroup'))document.querySelector('#joinGroup').addEventListener('click',joinGroup);
if(document.querySelector('#createGroup'))document.querySelector('#createGroup').addEventListener('click',createGroup);


if(document.querySelector('#home'))document.querySelector('#home').addEventListener('click', goToMap);
if(document.querySelector('#mapBtn'))document.querySelector('#mapBtn').addEventListener('click', goToMap);

