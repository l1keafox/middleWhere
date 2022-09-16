const Group = require("./../models/Group.js");

const groupData = [
  {
    name: "Pets",
    longitude: 105.033678,
    latitude: 39.870972,
    groupId: 1,
  },
];

const groupSeed = () => Group.bulkCreate(groupData);

module.exports = groupSeed;
