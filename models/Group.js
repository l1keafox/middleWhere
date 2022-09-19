const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Group extends Model {}

Group.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DECIMAL(15, 6),
      allowNull: true,
    },
    latitude: {
      type: DataTypes.DECIMAL(15, 6),
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "group",
  }
);
module.exports = Group;
