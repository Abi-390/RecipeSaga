import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);
  console.log(data, params.id);
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: recipe?.title,
      chef: recipe?.chef,
      image: recipe?.image,
      description: recipe?.description,
      instructions: recipe?.instructions,
      ingrediants: recipe?.ingrediants,
    },
  });

  const DeleteHandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);
    setdata(filterdata);
    localStorage.setItem("recipes", JSON.stringify(filterdata));
    toast.success("Recipe deleted");
    navigate("/recipes");
  };

  const submitHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("recipe updated");
  };

  const [favourite, setfavourite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );
  const FavouriteHandler = () => {
    let copyfav = [...favourite];
    copyfav.push(recipe);
    setfavourite(copyfav)
    localStorage.setItem("fav", JSON.stringify(copyfav));
  };
  const UnFavouriteHandler = () => {
    const filterfav = favourite.filter((f) => f.id != recipe?.id);
    setfavourite(filterfav);
    localStorage.setItem("fav", JSON.stringify(filterfav));
  };
useEffect(()=>{
    console.log("mounted")
    return console.log("UnMounted")
},[])
  return recipe ? (
    <div className="w-full flex flex-col md:flex-row min-h-screen">
      <div className="left w-full md:w-1/2 p-2 block">
        {favourite.find((f) => f.id == recipe?.id) ? (
          <i
            onClick={UnFavouriteHandler}
            className="ri-heart-fill text-2xl absolute right-[53%] text-red-400"
          ></i>
        ) : (
          <i
            onClick={FavouriteHandler}
            className=" text-2xl absolute right-[53%] text-red-400 ri-heart-line"
          ></i>
        )}
        <h1 className="text-3xl md:text-5xl font-black">{recipe.title}</h1>
        <img
          className="w-full max-w-md h-64  rounded-lg mt-2"
          src={recipe.image}
          alt=""
        />
        <h2 className="font-black mt-2">Chef:{recipe.chef}</h2>
        <p className="mt-2">Description:{recipe.description}</p>
        <p className="mt-2">Ingrediants:{recipe.ingrediants}</p>
        <p className="mt-2">Instructions:{recipe.instructions}</p>
      </div>
      <form
        className=" w-full md:w-1/2 p-2"
        onSubmit={handleSubmit(submitHandler)}
      >
        <input
          className="block border-b outline-0 p-2"
          {...register("image")}
          type="url"
          placeholder="Enter image url"
        />
        <small className="text-red-500">This is how error is shown</small>
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
          Update Recipe
        </button>
        <button
          onClick={DeleteHandler}
          className="block px-5 py-2 bg-red-900 rounded mt-5 "
        >
          Delete Recipe
        </button>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
