const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');
class Comment extends Model {}
Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true
    },
    // date_created: {
    //     type: DataTypes.DATE,
    //     allowNull: false,
    //     defaultValue: DataTypes.NOW,
    //   },
    // content: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
        
    // },
    postId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'post',
            key: 'id'
        }
    },

    body: {
        type: DataTypes.STRING,
        allowNull: false,
    }

},
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Comment'
});
module.exports = Comment;