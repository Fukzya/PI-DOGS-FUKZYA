import Style from "./FormUpdate.module.css";
import validate from "./Validations";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getDogs,
  getDetailDog,
  cleanCardDetail,
  putDog,
} from "../../redux/actions.js";

const FormUpdate = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailDog(id));
    return () => {
      dispatch(cleanCardDetail());
    };
  }, [id, dispatch]);

  const dog = useSelector((state) => state.detailDog);
  useEffect(() => {
    if (dog) {
      setForm({
        name: dog.name,
        max_height: dog.max_height,
        min_height: dog.min_height,
        max_weight: dog.max_weight,
        min_weight: dog.min_weight,
        life_span: dog.life_span,
        image: dog.image,
      });
    }
    return () => {
      setForm({
        name: "",
        max_height: "",
        min_height: "",
        max_weight: "",
        min_weight: "",
        life_span: "",
        image: "",
      });
    };
  }, [dog]);

  const [form, setForm] = useState({
    name: "",
    max_height: "",
    min_height: "",
    max_weight: "",
    min_weight: "",
    life_span: "",
    image: "",
  });

  const [errors, setErrors] = useState({});

  const isSubmitDisabled =
    Object.values(errors).some((error) => error !== "") ||
    Object.values(form).some((value) => value === "");

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
    setErrors(validate({ ...form, [property]: value }));
  };

  const SubmitHandler = (event) => {
    event.preventDefault();
    console.log(form);
    dispatch(putDog(id, form));
    alert("the dog breed was updated successfully");
    dispatch(getDogs());
  };

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <h1>Update your breed dog</h1>
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
        {!form.image ? (
          <div className={Style.containerTemperamentsNone}></div>
        ) : (
          <div>
            <img src={form.image} alt={form.name} />
          </div>
        )}

        <button disabled={isSubmitDisabled}>Submit</button>
      </form>
    </div>
  );
};

export default FormUpdate;
