import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const submitHandler = (recipe) => {
    recipe.id = nanoid();
    const copydata = [...data];
    copydata.push(recipe);
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe Created 🎉");
    navigate("/recipes");
    reset();
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <input
        className="block border-b outline-0 p-2"
        {...register("image")}
        type="url"
        placeholder="Enter image url"
      />
      <input
        className="block border-b outline-0 p-2"
        {...register("title")}
        type="text"
        placeholder="Recipe title"
      />
      <input
        className="block border-b outline-0 p-2"
        {...register("chef")}
        type="text"
        placeholder="Chef name"
      />

      <textarea
        className="block border-b outline-0 p-2"
        {...register("description")}
        placeholder="//Description starts from here.."
      ></textarea>

      <textarea
        className="block border-b outline-0 p-2"
        {...register("ingrediants")}
        placeholder="//Write ingrediants seperated by comma.."
      ></textarea>

      <textarea
        className="block border-b outline-0 p-2"
        {...register("instructions")}
        placeholder="//Write instructions seperated by comma.."
      ></textarea>

      <select
        className="block border-b outline-0 p-2 bg-gray-700"
        {...register("category")}
      >
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="supper">Supper</option>
        <option value="dinner">Dinner</option>
      </select>

      <button className="block px-5 py-2 bg-gray-900 rounded mt-5 ">
        Save Recipe
      </button>
    </form>
  );
};

export default Create;
