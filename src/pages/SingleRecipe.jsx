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
  <div className="flex flex-col lg:flex-row min-h-screen p-2 lg:p-4 gap-6">
    {/* Left: Recipe */}
    <div className="w-full lg:w-1/2 overflow-auto">
      <h1 className="text-3xl md:text-5xl font-black">{recipe.title}</h1>

      <div className="relative w-full max-w-md mx-auto mt-2">
        <img className="w-full aspect-[4/3] object-cover rounded-lg" src={recipe.image} alt={recipe.title} />
        {favourite.find((f) => f.id == recipe?.id) ? (
          <i onClick={UnFavouriteHandler} className="ri-heart-fill text-3xl text-red-400 absolute top-2 right-2 cursor-pointer"></i>
        ) : (
          <i onClick={FavouriteHandler} className="ri-heart-line text-3xl text-red-400 absolute top-2 right-2 cursor-pointer"></i>
        )}
      </div>

      <h2 className="font-black mt-2">Chef: {recipe.chef}</h2>
      <p className="mt-2 break-words whitespace-pre-wrap">Description: {recipe.description}</p>
      <p className="mt-2 break-words whitespace-pre-wrap">Ingrediants: {recipe.ingrediants}</p>
      <p className="mt-2 break-words whitespace-pre-wrap">Instructions: {recipe.instructions}</p>
    </div>

    {/* Right: Form */}
    <form className="w-full lg:w-1/2 overflow-auto flex flex-col gap-3" onSubmit={handleSubmit(submitHandler)}>
      <input className="block border-b outline-0 p-2 w-full" {...register("image")} type="url" placeholder="Enter image URL" />
      <small className="text-red-500">This is how error is shown</small>
      <input className="block border-b outline-0 p-2 w-full" {...register("title")} type="text" placeholder="Recipe title" />
      <input className="block border-b outline-0 p-2 w-full" {...register("chef")} type="text" placeholder="Chef name" />
      <textarea className="block border-b outline-0 p-2 w-full resize-none" {...register("description")} placeholder="Description"></textarea>
      <textarea className="block border-b outline-0 p-2 w-full resize-none" {...register("ingrediants")} placeholder="Write ingrediants separated by comma"></textarea>
      <textarea className="block border-b outline-0 p-2 w-full resize-none" {...register("instructions")} placeholder="Write instructions separated by comma"></textarea>
      <select className="block border-b outline-0 p-2 w-full bg-gray-700" {...register("category")}>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="supper">Supper</option>
        <option value="dinner">Dinner</option>
      </select>
      <button className="px-5 py-2 bg-gray-900 rounded w-full mt-5">Update Recipe</button>
      <button onClick={DeleteHandler} type="button" className="px-5 py-2 bg-red-900 rounded w-full mt-2">Delete Recipe</button>
    </form>
  </div>
) : (
  "Loading..."
);


};

export default SingleRecipe;
