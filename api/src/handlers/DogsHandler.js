const { getAllDogs } = require("../Controllers/DogsControllers/getAllDog");
const { getDogbyId } = require("../Controllers/DogsControllers/getDogbyId");
const { postDog } = require("../Controllers/DogsControllers/postDog");
const { getDogbyName } = require("../Controllers/DogsControllers/getDogbyName");
const { delDogById } = require("../Controllers/DogsControllers/delDogbyId");
const { updatedDog } = require("../Controllers/DogsControllers/updateDog");

const getAllDogsHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const allDogs = name ? await getDogbyName(name) : await getAllDogs();
    res.status(200).send(allDogs);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const getDogbyIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const DogbyId = await getDogbyId(id);
    res.status(200).send(DogbyId);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const delDogbyIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const deletedDog = await delDogById(id).data;
    res.status(200).send(deletedDog);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const updateDogHandler = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    max_height,
    min_height,
    max_weight,
    min_weight,
    life_span,
    image,
  } = req.body;
  try {
    const response = await updatedDog({
      id,
      name,
      max_height,
      min_height,
      max_weight,
      min_weight,
      life_span,
      image,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// const getDogbyNameHandler = async (req, res) => {
//   try {
//     const { name } = req.query;
//     const Dogs = await getDogbyName(name);
//     res.status(200).json(Dogs);
//   } catch (error) {
//     res
//       .status(404)
//       .json({ error: "No se encontro un perrito con esa RAZA :(." });
//   }
// };

const postDogHandler = async (req, res) => {
  try {
    const newDog = await postDog(req.body);
    res.status(200).json(newDog);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getAllDogsHandler,
  getDogbyIdHandler,
  postDogHandler,
  delDogbyIdHandler,
  updateDogHandler,
};
