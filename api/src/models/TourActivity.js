const sequelize = require('sequelize');
const { DataTypes, STRING } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('tourActivity', {
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        name:{
            type:DataTypes.STRING,
            allowNull: false
        },

        difficulty: {
            type:DataTypes.INTEGER,
            validate:{
                min:1,
                max:5
            }
        },

        duration: {
            type:DataTypes.INTEGER,
            validate:{
                min:0
            }
        },

        season:{
            type:DataTypes.ENUM('spring','summer', 'fall', 'winter')
        },

    })
}