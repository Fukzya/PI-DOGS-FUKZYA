const { DataTypes, Sequelize } = require("sequelize");
// Exportamos una funcion que define el modelo

// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Dog",
    {
      // defino el modelo
      Id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Asigna un valor UUIDv4 por defecto al crear un registro
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        defaultValue:
          "https://img.freepik.com/foto-gratis/disparo-artistico-perro-compania-oscuridad-mirando-luz_181624-32580.jpg",
      },
      max_height: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      min_height: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      max_weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      min_weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      life_span: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
