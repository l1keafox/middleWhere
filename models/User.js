class User{
}

User.init( 
    {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
  
    }
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    longitute:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    latitute:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
    groupId:{

    }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    // modelName: 'painting',
  }


)