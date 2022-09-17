// Initialize and add the map
async function initMap() {
  // The location of Uluru
  const response = await fetch("/api/groups/1", {
    method: "GET",
  });
  let json = await response.json();

  const centerOfMap = {
    lat: parseFloat(json.latitude),
    lng: parseFloat(json.longitude),
  };
  console.log(centerOfMap);

  // The map, centered at Uluru
  const image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: centerOfMap,
  });

  const allUsers = await fetch("/api/groups/allUsers/1", {
    method: "GET",
  });
  let inGroup = await allUsers.json();
  const marker = new google.maps.Marker({
    position: centerOfMap,
    icon: image,

    map: map,
  });

  for (let person of inGroup) {
    const personPos = {
      lat: parseFloat(person.latitude),
      lng: parseFloat(person.longitude),
    };
    const marker = new google.maps.Marker({
      position: personPos,
      map: map,
    });
  }
}

window.initMap = initMap;
