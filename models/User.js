const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
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
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len:[8],
      }
    },
    groupId: {
      type: DataTypes.INTEGER,
      references: {
        model: "group",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);


module.exports = User;
