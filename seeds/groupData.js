const Group = require("./../models/Group.js");

const groupData = [
  {
    name: "Pets",
    longitude: -105.1,
    latitude: 39.870972,
    groupId: 1,
  },
  {
    name: "Foodies",
    longitude: -105.1,
    latitude: 39.870972,
    groupId: 2,
  },
  {
    name: "Athletes",
    longitude: -105.1,
    latitude: 39.870972,
    groupId: 3,
  },
];

const groupSeed = () => Group.bulkCreate(groupData);

module.exports = groupSeed;
