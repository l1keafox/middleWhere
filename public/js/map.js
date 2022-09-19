// Initialize and add the map

async function initMap() {
  const response = await fetch(`/api/groups/`, {
    method: "GET",
  });
  let json = await response.json();

  if (!json.latitude) {
    console.log("NO GROUP!");
    // TO DO display something about create group
    console.log("DISPLAY SOMETHING ABOUT CREATE GROUP");
    
    return;
  }

  const centerOfMap = {
    lat: parseFloat(json.latitude),
    lng: parseFloat(json.longitude),
  };
  const image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: centerOfMap,
  });

  const allUsers = await fetch(`/api/groups/allUsers/`, {
    method: "GET",
  });
  const marker = new google.maps.Marker({
    position: centerOfMap,
    animation: google.maps.Animation.DROP,
    icon: image,
    map: map,
  });
  let inGroup = await allUsers.json();

  for (let person of inGroup) {
    const personPos = {
      lat: parseFloat(person.latitude),
      lng: parseFloat(person.longitude),
    };
    const marker = new google.maps.Marker({
      position: personPos,
      animation: google.maps.Animation.DROP,
      map: map,
    });
  }
}

window.initMap = initMap;
