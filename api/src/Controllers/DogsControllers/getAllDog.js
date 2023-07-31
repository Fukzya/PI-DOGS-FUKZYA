const { filterApi } = require("../../utils/filterApi");
const axios = require("axios");
const { Dog, Temperaments } = require("../../db");

const getAllDogs = async () => {
  const apiDogs = await axios.get("https://api.thedogapi.com/v1/breeds");

  const apiDogsdata = apiDogs.data;
  const dbDogs = await Dog.findAll({
    include: {
      model: Temperaments,
      as: "Temperaments",
      attributes: ["Nombre"],
      through: {
        attributes: [],
      },
    },
  });
  const filteredApiDogs = filterApi(apiDogsdata);

  const dogs = dbDogs.map((dog) => {
    const temperaments = dog.Temperaments.map(
      (temperament) => temperament.Nombre
    ).join(", ");
    dog.dataValues.Temperaments = temperaments;
    return dog;
  });

  if (dogs.length > 0 || filteredApiDogs.length > 0) {
    return [...filteredApiDogs, ...dogs];
  } else {
    throw new Error("Dogs not found");
  }
};
module.exports = { getAllDogs };
