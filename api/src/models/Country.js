const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type:DataTypes.STRING(3),
      primaryKey: true,
      allowNull:false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    flag:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        isUrl: true,
      }
    },

    continent:{
      type:DataTypes.STRING,
      allowNull:false,
    },

    capital:{
      type:DataTypes.STRING,
      allowNull:false,
    },

    subregion:{
      type:DataTypes.STRING,

    },

    area:{
      type:DataTypes.FLOAT, //or DECIMAL ??
    },

    population:{
      type:DataTypes.INTEGER
    }
  });
};
