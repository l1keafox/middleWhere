const User = require('./User');
const Group = require('./Group');

Group.hasMany(User, {
    foreignKey: 'groupId',
});

User.belongsTo(Group,{
    foreignKey: 'groupId'
})