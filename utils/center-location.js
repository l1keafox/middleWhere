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

  } catch (err) {
    console.log(err);
  }
};

getCenterLocation();
