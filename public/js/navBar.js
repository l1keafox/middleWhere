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

document.querySelector('#logout').addEventListener('click', logout);

document.querySelector('#profile').addEventListener('click',goToProfile);
