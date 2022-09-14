const  User  = require('./../models/User.js');

const userData = [
  {
    name: 'Dog',
    longitute: -105.033678,
    latitute: 39.870972,
    password: 'dogdog',
    groupId: 1
  },
  {
    name: 'Cat',
    longitute: -105.059101,
    latitute: 39.819307,
    password: 'catcat',
    groupId: 1
  },
  {
    name: 'Hamster',
    longitute: -105.228129,
    latitute: 40.002068,
    password: 'hamham',
    groupId: 1
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
