const sequelize = require("../config/connection");
const blogData = require("./blogData");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await blogData();
  process.exit(0);
};

seedAll();
