const { getAllDogs } = require("../Controllers/DogsControllers/getAllDog");
const { getDogbyId } = require("../Controllers/DogsControllers/getDogbyId");
const { postDog } = require("../Controllers/DogsControllers/postDog");
const { getDogbyName } = require("../Controllers/DogsControllers/getDogbyName");
const { delDogById } = require("../Controllers/DogsControllers/delDogbyId");

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
    // Assuming getDogbyId is a function that retrieves the dog by its ID and deletes it
    const deletedDog = await delDogById(id);
    res.status(200).send(deletedDog);
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
};
