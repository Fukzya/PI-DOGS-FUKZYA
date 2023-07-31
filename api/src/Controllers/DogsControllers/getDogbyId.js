const axios = require("axios");
const { Dog, Temperaments } = require("../../db");
const { filterApi } = require("../../utils/filterApi");

const getDogbyId = async (id) => {
  if (id.length < 4) {
    const apiDogs = await axios.get(`https://api.thedogapi.com/v1/breeds`);
    const apiDogsdata = apiDogs.data;
    const dogiFiltered = apiDogsdata.find((Dogi) => Dogi.id == id);
    let emptyArray = [];
    emptyArray[0] = dogiFiltered;
    DogsByNames = filterApi(emptyArray);
    if (DogsByNames !== undefined) {
      const DOGIDOGI = DogsByNames[0];
      return DOGIDOGI;
    } else {
      throw new Error();
    }
  } else {
    const dbDogs = await Dog.findAll({
      where: {
        Id: id,
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

    if (dbDogs.length > 0) {
      const dog = dbDogs[0];
      const temperaments = dog.Temperaments.map(
        (temperament) => temperament.Nombre
      ).join(", ");
      dog.dataValues.Temperaments = temperaments;
      return dog;
    } else {
      throw new Error("Dog not found");
    }
  }
};

module.exports = { getDogbyId };
