const { Temperaments } = require("../../db");
const { deleteReps } = require("../../utils/DeleteReps");
const axios = require("axios");

const getTemperaments = async () => {
  const response = await axios(`https://api.thedogapi.com/v1/breeds`);
  const dogs = response.data;

  const temperaments = dogs.map((dog) => dog.temperament);
  temperaments.forEach((element) => {
    if (element) {
      element.split(",");
    }
  });

  const temps = deleteReps(temperaments).match(/\b\w+\b/g);
  for (const temp of temps) {
    await Temperaments.findOrCreate({
      where: { Nombre: temp },
    });
  }

  return await Temperaments.findAll();
};

module.exports = { getTemperaments };
