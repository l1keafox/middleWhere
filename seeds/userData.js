const User = require("./../models/User.js");
const userData = [
  {
    userName: "Dog",
    longitude: -105.033678,
    latitude: 39.870972,
    password: "dogdog",
    groupId: 1,
  },
  {
    userName: "Cat",
    longitude: -105.059101,
    latitude: 39,
    password: "catcat",
    groupId: 1,
  },
  {
    userName: "Hamster",
    longitude: -105.228129,
    latitude: 40.002068,
    password: "hamham",
    groupId: 1,
  },
  {
    userName: "Chef",
    longitude: -105.045856,
    latitude: 39.753628,
    password: "sirloin",
    groupId: 2,
  },
  {
    userName: "Bartender",
    longitude: -105.030053,
    latitude: 39.828548,
    password: "maitai",
    groupId: 2,
  },
  {
    userName: "DeliveryMan",
    longitude: -104.976972,
    latitude: 39.797961,
    password: "grubhub",
    groupId: 2,
  },
  {
    userName: "Waiter",
    longitude: -104.977659,
    latitude: 39.744657,
    password: "appetizers",
    groupId: 2,
  },
  {
    userName: "Swimmer",
    longitude: -105.040361,
    latitude: 39.746131,
    password: "dolphin",
    groupId: 3,
  },
  {
    userName: "Runner",
    longitude: -104.924623,
    latitude: 39.705414,
    password: "fastfeet",
    groupId: 3,
  },
  {
    userName: "Biker",
    longitude: -104.976155,
    latitude: 39.675825,
    password: "tourdefrance",
    groupId: 3,
  },
  {
    userName: "Snowboarder",
    longitude: -104.8992,
    latitude: 39.72971,
    password: "shredder",
    groupId: 3,
  },
  {
    userName: "Gymnast",
    longitude: -105.036619,
    latitude: 39.69749,
    password: "flippydoodah",
    groupId: 3,
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
