const { Group } = require('../models');

const groupData = [
  {
    name: 'Pets',
    longitute: -105.033678,
    latitute: 39.870972,
    groupId: 1
  },
];

const groupSeed = () => Group.bulkCreate(groupData);

module.exports = groupSeed;
