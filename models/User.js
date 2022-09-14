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
        type: DataTypes.DECIMAL(15, 15),
        allowNull: false,
    },
    latitute:{
        type: DataTypes.DECIMAL(15, 15),
        allowNull: false,
    }
    groupId:{
        type: DataTypes.INTEGER,
        references: {
            model:"group",
            key:"id"
        }   
    }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }


)