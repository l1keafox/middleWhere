// TODO - Let's display group side column

// TODO - lets display group name somewhere?


// Initialize and add the map

async function initMap() {
    // TODO :
    // WE need to pull Sser groupId and replace it in the reponse fetch.
    // so it'll be await fetch'/api/users/myGroupID'
    // We need to see if user has a groupID, if not, then do not init map,
    // and instead we show join/create group.


    
    let userGroupId = 1;
    const response = await fetch(`/api/groups/${userGroupId}`,{
      method:'GET',
    });
    let json = await response.json();

    const centerOfMap = { lat: parseFloat( json.latitude ), lng: parseFloat( json.longitude ) };
    const image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: centerOfMap,
    });
    
    const allUsers = await fetch(`/api/groups/allUsers/${userGroupId}`,{
      method:'GET',
    });
    let inGroup = await allUsers.json();
    const marker = new google.maps.Marker({
      position: centerOfMap,
      icon: image,

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
