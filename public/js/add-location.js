//Prompt user to get their Geo Location
//Use geolaction function to get users locations

navigator.geolocation.getCurrentPosition((position) => {
    grabLocation(position.coords.latitude, position.coords.longitude);
});

function errorCallback(error) {
    alert('Location not found')
};

function geoFindMe() {
    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');

    mapLink.href = '';
    mapLink.textContent = '';

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.textContent = '';
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.textConent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }

    function error() {
        status.textContent = 'Unable to get location'
    }

    if (!navigator.geolocation) {
        status.textContent = 'Geolocation not supported';
    } else {
        status.textContent = 'Locatiing...';
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

document.querySelector('#find-me').addEventListener('click', geoFindMe);

