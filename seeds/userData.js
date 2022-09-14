const { User } = require('../models');

const userData = [
  {
    name: 'Dog',
    longitute: -105.033678,
    latitute: 39.870972,
    groupId: 1
  },
  {
    name: 'Cat',
    longitute: -105.059101,
    latitute: 39.819307,
    groupId: 1
  },
  {
    name: 'Hamster',
    longitute: -105.228129,
    latitute: 40.002068,
    groupId: 1
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
