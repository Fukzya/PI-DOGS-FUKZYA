const validate = (dogData) => {
  const errors = {};

  if (dogData.name) {
    if (!/^[A-Za-z\s]+$/.test(dogData.name))
      errors.name = "Writing letters and spaces only";
    else errors.name = "";
  } else {
    if (!dogData.name) errors.name = "The name of the dog cannot be null";
  }

  if (dogData.max_height) {
    if (!/^[0-9]+$/.test(dogData.max_height))
      errors.max_height = "Write only numbers ";
    else if (parseInt(dogData.max_height <= 0))
      errors.max_height = "Max-height cannot be less than or equal to 0";
    else errors.max_height = "";
  } else {
    if (!dogData.max_height)
      errors.max_height = "The height of the dog cannot be null";
  }

  if (dogData.min_height) {
    if (!/^[0-9]+$/.test(dogData.min_height))
      errors.min_height = "Write only numbers ";
    else if (parseInt(dogData.min_height) >= parseInt(dogData.max_height))
      errors.min_height =
        "Min-height cannot be greater than or equal to max-height ";
    else if (parseInt(dogData.min_height) <= 0)
      errors.min_height = "Min-height cannot be less than or equal to 0";
    else errors.min_height = "";
  } else {
    if (!dogData.min_height)
      errors.min_height = "The height of the dog cannot be null";
  }

  if (dogData.max_weight) {
    if (!/^[0-9]+$/.test(dogData.max_weight))
      errors.max_weight = "Write only numbers ";
    else if (parseInt(dogData.max_weight) <= 0)
      errors.max_weight = "Max-Weight cannot be less than or equal to 0";
    else errors.max_weight = "";
  } else {
    if (!dogData.max_weight)
      errors.max_weight = "The weight of the dog cannot be null";
  }

  if (dogData.min_weight) {
    if (!/^[0-9]+$/.test(dogData.min_weight))
      errors.min_weight = "Write only numbers ";
    else if (parseInt(dogData.min_weight) >= parseInt(dogData.max_weight))
      errors.min_weight =
        "Min-Weight cannot be greater than or equal to max-width ";
    else if (parseInt(dogData.min_weight) <= 0)
      errors.min_weight = "Min-Weight cannot be less than or equal to 0";
    else errors.min_weight = "";
  } else {
    if (!dogData.min_weight)
      errors.min_weight = "The weight of the dog cannot be null";
  }

  if (dogData.life_span) {
    if (!/^[0-9]+$/.test(dogData.life_span))
      errors.life_span = "Write only numbers ";
    else if (parseInt(dogData.life_span) <= 0)
      errors.life_span = "The life years cannot be less than or equal to 0";
    else errors.life_span = "";
  } else {
    if (!dogData.life_span)
      errors.life_span = "The life years of the dog cannot be null";
  }

  if (!dogData.image) {
    errors.image = "Image URL cannot be empty";
  } else if (!/^https?:\/\/\S+$/.test(dogData.image)) {
    errors.image = "Invalid image URL";
  } else if (dogData.image.length > 300) {
    errors.image = "Image URL cannot exceed 300 characters";
  }

  return errors;
};

export default validate;
