const sequelize = require('../config/connection');
const seedUser = require('./userData');
const groupUser = require('./groupData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await groupUser();
  await seedUser();

  process.exit(0);
};

seedAll();
