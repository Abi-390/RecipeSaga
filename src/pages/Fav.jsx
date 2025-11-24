import React from 'react'
import RecipeCard from '../components/RecipeCard';

const Fav = () => {

const favourite = JSON.parse(localStorage.getItem("fav"))||[];

const renderrecipes = favourite.map((recipe) => (<RecipeCard recipe={recipe} key={recipe.id}/>))
  return <div className="flex flex-wrap">{favourite.length>0?renderrecipes:"No favourites found!"}</div>
   
  
};

export default Fav
