const { filterApi } = require("../../utils/filterApi");
const axios = require("axios");
const { Dog, Temperaments } = require("../../db");
const { Op } = require("sequelize");

const getDogbyName = async (name) => {
  const apiDogs = await axios.get(`https://api.thedogapi.com/v1/breeds`);
  const apiDogsdata = apiDogs.data;

  const SimilarDogs = apiDogsdata.filter((dog) =>
    dog.name.toLowerCase().includes(name.toLowerCase())
  );

  const filteredApiDogs = filterApi(SimilarDogs);

  const dbDogs = await Dog.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: {
      model: Temperaments,
      as: "Temperaments",
      attributes: ["Nombre"],
      through: {
        attributes: [],
      },
    },
  });

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
    throw new Error("No dog breeds with that name were found.");
  }
};

module.exports = { getDogbyName };
