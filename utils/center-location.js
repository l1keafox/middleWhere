const getCenterLocation = async () => {
  try {
    //fetching the user data
    const response = await fetch("/api/groups/allUsers/:id", {
      method: "GET",
    });

    let json = await response.json();

    //all of the user's latitude
    const allLat = { userLat: parseInt(json.latitude) };

    //all of the user's longitude
    const allLong = { userLong: parseInt(json.longitude) };

    //creating array of all user lats & longs
    const allLatArray = Object.values(allLat);
    const allLongArray = Object.values(allLong);

    //sum of lat & long
    const sumLat = allLatArray.reduce((acc, val) => acc + val, 0);
    const sumLong = allLongArray.reduce((acc, val) => acc + val, 0);
    
    //average of lat & long
    const averageLat = sumLat / allLatArray.length;
    const averageLong = sumLong / allLongArray.length;

    
  } catch (err) {
    console.log(err);
  }
};

getCenterLocation();
