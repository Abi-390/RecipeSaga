import { Link } from "react-router-dom";


const RecipeCard = (props) => {

    const {id,image,title,description,chef}=props.recipe;
  return (
    <Link to={`/recipes/detail/${id}`} className="block w-[23vw] rounded overflow-hidden shadow mr-3 mb-3 hover:scale-101 duration-150">
      <img className="w-full h-64  rounded" src={image} alt="" />
      <h1 className="mt-2 font-black px-2">{title}</h1>
      <small className="px-2 text-red-400">{chef}</small>
      <p className="px-2">{description.slice(0,50)}.....{" see more"}</p>
    </Link>
  )
}

export default RecipeCard
