const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class User extends Model {
  checkPassword(userPw) {
    return bcrypt.compareSync(userPw, this.password);
  }
}

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
    icon:{
      type: DataTypes.STRING,
      allowNull: true,
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
      // validate: {
      //   len: [6],
      // },
    },
    groupId: {
      type: DataTypes.INTEGER,
//      type: DataTypes.ARRAY(DataTypes.INTEGER),

      references: {
        model: "group",
        key: "id",
      },
    },
  },
  {
    hooks: {
      async beforeCreate(newUser) {
        newUser.password = await bcrypt.hash(newUser.password, 12);
        return newUser;
      },
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
