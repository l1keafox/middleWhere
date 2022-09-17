const  User  = require('./../models/User.js');

const userData = [
  {
    userName: 'Dog',
    longitude: -105.033678,
    latitude: 39.870972,
    password: 'dogdog',
    groupId: 1
  },
  {
    userName: 'Cat',
    longitude: -105.059101,
    latitude: 39.,
    password: 'catcat',
    groupId: 1
  },
  {
    userName: 'Hamster',
    longitude: -105.228129,
    latitude: 40.002068,
    password: 'hamham',
    groupId: 1
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
