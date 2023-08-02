const { Dog } = require("../../db");

const updatedDog = async ({
  id,
  name,
  max_height,
  min_height,
  max_weight,
  min_weight,
  life_span,
  image,
}) => {
  let dogUpdeted = await Dog.update(
    {
      name,
      max_height,
      min_height,
      max_weight,
      min_weight,
      life_span,
      image,
    },
    { where: { Id: id } }
  );
  console.log(dogUpdeted);
  return dogUpdeted;
};

module.exports = { updatedDog };
