const { DataTypes, Sequelize } = require("sequelize");
// Exportamos una funcion que define el modelo

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Temperaments",
    {
      Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      Nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
