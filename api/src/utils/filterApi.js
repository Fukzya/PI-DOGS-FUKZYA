const filterApi = (dataApi) => {
  if (!Array.isArray(dataApi)) {
    throw new Error("dataApi must be an array");
  }
  return dataApi.map((dog) => {
    return {
      Id: dog.id,
      name: dog.name.toLowerCase(),
      image: dog.image.url,
      min_height: parseInt(dog.height.metric.split("-")[0]),
      max_height: parseInt(dog.height.metric.split("-")[1]),
      min_weight: parseInt(dog.weight.metric.split("-")[0]),
      max_weight: parseInt(dog.weight.metric.split("-")[1]),
      life_span: dog.life_span,
      Temperaments: dog.temperament,
      fromApi: true,
    };
  });
};

module.exports = { filterApi };
