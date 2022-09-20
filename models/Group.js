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
    //  These are 'options' that for this group settings, this data isn't on the user, but teh
    //  Group, because it's based on the grou p. 
    // userExcludeStatus:{
    //   type: DataTypes.BOOLEAN,
    //   allowNull: true,
    // },
    // userButtonStatus :{
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "group",
  }
);
module.exports = Group;
