const getCenterLocation = async (requestedGroup) => {
  try {
    const userData = await User.findAll({
      where: { groupId: requestedGroup },
      attributes: { exclude: ["password", "createdAt", "updatedAt"] },
    });
    const allUsers = userData.map((data) => data.get({ plain: true }));

    //calling function to do the calculation
    getAverageCoords(allUsers);

  } catch (err) {
    console.log(err);
  }
function getAverageCoords(allUsers)
  //all of the user's latitude
  const allLat = { userLat: parseFloat(json.latitude) };

  //all of the user's longitude
  const allLong = { userLong: parseFloat(json.longitude) };

  //creating array of all user lats & longs
  const allLatArray = Object.values(allLat);
  const allLongArray = Object.values(allLong);

  //sum of lat & long
  const sumLat = allLatArray.reduce((acc, val) => acc + val, 0);
  const sumLong = allLongArray.reduce((acc, val) => acc + val, 0);

  //average of lat & long
  const centerLat = sumLat / allLatArray.length;
  const centerLong = sumLong / allLongArray.length;

  return { centerLat: centerLat, centerLong: centerLong };
};

module.export = getCenterLocation;
