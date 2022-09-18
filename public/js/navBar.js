const logout = async () => {
    const response = await fetch ('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert("Logout failed");
    }
};

async function goToProfile(){
    document.location.replace('/profile');
}

async function goToMap() {
    document.location.replace('/');
}

async function joinGroup(){
    //TODO - use route /api/users/NOTYETCREATED to join a party
    console.log("Join Group!",document.querySelector('#userGroupInput').value);
}

async function createGroup(){
    // TODO - use post too /api/groups/ to create a group.
    console.log('create Group!',document.querySelector('#userGroupInput').value);
}

document.querySelector('#logout').addEventListener('click', logout);

document.querySelector('#profile').addEventListener('click',goToProfile);
document.querySelector('#joinGroup').addEventListener('click',joinGroup);
document.querySelector('#createGroup').addEventListener('click',createGroup);


document.querySelector('#home').addEventListener('click', goToMap);
document.querySelector('#mapBtn').addEventListener('click', goToMap);