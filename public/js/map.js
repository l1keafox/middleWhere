// Initialize and add the map
async function initMap() {
    // The location of Uluru
    const response = await fetch("/api/groups/1",{
      method:'GET',
    });
    let json = await response.json();

    const centerOfMap = { lat: parseFloat( json.latitude ), lng: parseFloat( json.longitude ) };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: centerOfMap,
    });
    
    const allUsers = await fetch("/api/groups/allUsers/1",{
      method:'GET',
    });
    let inGroup = await allUsers.json();
    // The marker, positioned at Uluru
    console.log(inGroup);
    const marker = new google.maps.Marker({
      position: centerOfMap,
      map: map,
    });
  }
  
  window.initMap = initMap; 