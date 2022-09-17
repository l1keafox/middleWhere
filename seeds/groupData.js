const Group = require("./../models/Group.js");
// TODO - create  more group seeds.
const groupData = [
  {
    name: "Pets",
    longitude: -105.100,
    latitude: 39.870972,
    groupId: 1,
  },
];

const groupSeed = () => Group.bulkCreate(groupData);

module.exports = groupSeed;
