const { Dog } = require("../../db");

const postDog = async ({
  name,
  max_height,
  min_height,
  max_weight,
  min_weight,
  life_span,
  image,
  temperaments,
}) => {
  const found = await Dog.findOne({ where: { name } });

  if (found) throw new Error("This breed already exists");

  const newDog = await Dog.create({
    name,
    max_height,
    min_height,
    max_weight,
    min_weight,
    life_span,
    image,
    temperaments,
  });
  await newDog.addTemperaments(temperaments);
  return newDog;
};
module.exports = { postDog };

// const postDog = async (prop) => {
//   const newDog = await Dog.create({
//     name: prop.name,
//     Image: prop.Image,
//     height: prop.height,
//     weight: prop.weight,
//     life_span: prop.life_span,
//   });
//   newDog.addTemperaments(prop.Temperaments);
//   return newDog;
// };
