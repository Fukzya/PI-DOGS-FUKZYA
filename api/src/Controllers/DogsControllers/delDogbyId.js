const { Dog } = require("../../db");

const delDogById = async (id) => {
  const dog = await Dog.findOne({
    where: {
      Id: id,
    },
  });
  if (!dog) {
    throw new Error("Dog not found");
  }
  await dog.destroy();
  return "Todo salio bien";
};

module.exports = { delDogById };
