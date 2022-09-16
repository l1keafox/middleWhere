// Initialize and add the map
async function  initMap() {

  const response = await fetch("/api/groups/1", {
    
    headers: { "Content-Type": "application/json" },
  });
  console.log(response);

    // The location of Uluru
    const uluru = { lat: 39.344, lng: -105.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;