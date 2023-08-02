import Style from "./Form.module.css";
import validate from "./Validations";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTemperaments, postDog, getDogs } from "../../redux/actions.js";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allTemperaments = useSelector((state) => state.temperaments);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    max_height: "",
    min_height: "",
    max_weight: "",
    min_weight: "",
    life_span: "",
    temperaments: [],
    image: "",
  });

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const getTemperamentName = (id) => {
    let temperament = allTemperaments.filter((temp) => temp.Id === id);
    return temperament[0].Nombre;
  };

  const handleDelete = (id) => {
    setForm({
      ...form,
      temperaments: form.temperaments.filter((temp) => temp !== id),
    });
  };

  const isSubmitDisabled =
    Object.values(errors).some((error) => error !== "") ||
    Object.values(form).some(
      (value) => value === "" || form.temperaments.length === 0
    );

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    setErrors(validate({ ...form, [property]: value }));
  };
  const changeSelectHandler = (event) => {
    const value = Number(event.target.value);
    if (!form.temperaments.includes(value)) {
      setForm({ ...form, temperaments: [...form.temperaments, value] });
    }
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    if (!errors.name) {
      dispatch(postDog(form));
      alert("the dog breed was created successfully");
      dispatch(getDogs());
      setForm({
        name: "",
        max_height: "",
        min_height: "",
        max_weight: "",
        min_weight: "",
        lifeYears: "",
        temperaments: [],
        image: "",
      });
      navigate("/home");
    } else {
      alert("Errors exist");
    }
  };

  return (
    <div className={Style.formContainer}>
      <form onSubmit={SubmitHandler}>
        <h1>Create your breed dog</h1>
        <div className={Style.divInput}>
          <div className={Style.containerDiv}>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              className={Style.input}
              value={form.name}
              onChange={changeHandler}
            />
          </div>
          {errors.name && (
            <span className={Style.spanError}>{errors.name}</span>
          )}
        </div>
        <div className={Style.divInput}>
          <div className={Style.containerDiv}>
            <label htmlFor="max_height">Max-height: </label>
            <input
              type="text"
              name="max_height"
              className={Style.input}
              value={form.max_height}
              onChange={changeHandler}
            />
          </div>
          {errors.max_height && (
            <span className={Style.spanError}>{errors.max_height}</span>
          )}
        </div>
        <div className={Style.divInput}>
          <div className={Style.containerDiv}>
            <label htmlFor="min_height">Min-height: </label>
            <input
              type="text"
              name="min_height"
              className={Style.input}
              value={form.min_height}
              onChange={changeHandler}
            />
          </div>
          {errors.min_height && (
            <span className={Style.spanError}>{errors.min_height}</span>
          )}
        </div>
        <div className={Style.divInput}>
          <div className={Style.containerDiv}>
            <label htmlFor="max_weight">Max-weight: </label>
            <input
              type="text"
              name="max_weight"
              className={Style.input}
              value={form.max_weight}
              onChange={changeHandler}
            />
          </div>
          {errors.max_weight && (
            <span className={Style.spanError}>{errors.max_weight}</span>
          )}
        </div>
        <div className={Style.divInput}>
          <div className={Style.containerDiv}>
            <label htmlFor="min_weight">Min-weight: </label>
            <input
              type="text"
              name="min_weight"
              className={Style.input}
              value={form.min_weight}
              onChange={changeHandler}
            />
          </div>
          {errors.min_weight && (
            <span className={Style.spanError}>{errors.min_weight}</span>
          )}
        </div>
        <div className={Style.divInput}>
          <div className={Style.containerDiv}>
            <label htmlFor="life_span">Life Span: </label>
            <input
              type="text"
              name="life_span"
              className={Style.input}
              value={form.life_span}
              onChange={changeHandler}
            />
          </div>
          {errors.life_span && (
            <span className={Style.spanError}>{errors.life_span}</span>
          )}
        </div>
        {
          <div className={Style.divInput}>
            <div className={Style.containerDiv}>
              <label htmlFor="temperaments">Temperaments: </label>
              <select
                name="temperaments"
                onChange={changeSelectHandler}
                className={Style.temperamentSalected}
              >
                {allTemperaments.map((temp) => (
                  <option value={temp.Id} key={temp.Id}>
                    {temp.Nombre}
                  </option>
                ))}
              </select>
            </div>
            <span>{errors.temperaments}</span>
          </div>
        }
        <div className={Style.divInput}>
          <div className={Style.containerDiv}>
            <label htmlFor="image">Image: </label>
            <input
              type="text"
              name="image"
              className={Style.input}
              value={form.image}
              onChange={changeHandler}
              placeholder="Ingresar URL"
            />
          </div>
          {errors.image && (
            <span className={Style.spanError}>{errors.image}</span>
          )}
        </div>
        <div></div>
        {JSON.stringify(form.temperaments) === JSON.stringify([]) &&
        !form.image ? (
          <div></div>
        ) : (
          <div className={Style.imageContainer}>
            <img
              className={Style.imageInput}
              src={form.image}
              alt={form.name}
            />
          </div>
        )}

        <button className={Style.submitButton} disabled={isSubmitDisabled}>
          Submit
        </button>
      </form>
      <h2>Temperaments</h2>
      {form.temperaments.map((element) => {
        return (
          <div className={Style.temperament}>
            <p className={Style.temperament2}>{getTemperamentName(element)}</p>
            <button
              className={Style.deleteButton}
              onClick={() => handleDelete(element)}
            >
              DELETE
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Form;
