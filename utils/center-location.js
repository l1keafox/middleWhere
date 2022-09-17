const User = require("../models/User");

const getCenterLocation = async (requestedGroup) => {
  try {
    const userData = await User.findAll({
      where: { groupId: requestedGroup },
      attributes: { exclude: ["password", "createdAt", "updatedAt"] },
    });

    //getting all latitudes as array
    const allLatitudes = userData.map((data) => data.latitude);

    //getting all longitudes as array
    const allLongitudes = userData.map((data) => data.longitude);

    //calling function to do the calculation
    return getAverageCoords(allLatitudes, allLongitudes);
  } catch (err) {
    console.log(err);
  }

  //using user long & lat data to calculate their avg coordinates
  function getAverageCoords(allLatitudes, allLongitudes) {
    //turning all of the user's latitudes into numbers
    const allLats = allLatitudes.map((lats) => {
      return parseFloat(lats);
    });

    //turning all of the user's longitudes into numbers
    const allLongs = allLongitudes.map((longs) => {
      return parseFloat(longs);
    });

    //sum of lat & long
    const sumLat = allLats.reduce((acc, val) => acc + val, 0);
    const sumLong = allLongs.reduce((acc, val) => acc + val, 0);

    //average of lat & long
    const centerLat = sumLat / allLats.length;
    const centerLong = sumLong / allLongs.length;

    return { latitude: centerLat, longitude: centerLong };
  }
};

module.exports = getCenterLocation;
