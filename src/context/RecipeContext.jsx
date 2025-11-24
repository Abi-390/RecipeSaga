import  { createContext, useEffect, useState } from 'react'
export const recipecontext =createContext(null);
const RecipeContext = (props) => {
        const [data, setdata] = useState([ 
  {
    "id": 1,
    "title": "Classic Margherita Pizza",
    "ingrediants": [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella cheese",
      "Fresh basil leaves",
      "Olive oil",
      "Salt and pepper to taste"
    ],
    "instructions": [
      "Preheat the oven to 475°F (245°C).",
      "Roll out the pizza dough and spread tomato sauce evenly.",
      "Top with slices of fresh mozzarella and fresh basil leaves.",
      "Drizzle with olive oil and season with salt and pepper.",
      "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
      "Slice and serve hot."
    ],
    "image": "https://www.chefadora.com/_next/image?url=https%3A%2F%2Fchefadora.b-cdn.net%2Fmedium_pexels_media_26968409_e3aa3b6285.jpeg&w=3840&q=75",
    "chef": "Sung jin woo",
    "category": "Dinner",
    "description": "A classic Italian delight with a perfectly baked crust, rich tomato sauce and melted mozzarella."
  },
  {
    "id": 2,
    "title": "Honey Chilli Potato",
    "ingrediants": [
      "Potatoes",
      "Cornflour",
      "All-purpose flour",
      "Salt",
      "Black pepper",
      "Oil",
      "Garlic",
      "Red chilli sauce",
      "Tomato ketchup",
      "Soy sauce",
      "Vinegar",
      "Honey",
      "Spring onions",
      "Sesame seeds"
    ],
    "instructions": [
      "Peel and cut potatoes into thin fingers, rinse and pat dry.",
      "Coat potatoes with cornflour, all-purpose flour, salt and pepper.",
      "Deep-fry until golden and crispy.",
      "Sauté garlic, add sauces and simmer until slightly thickened.",
      "Add honey and toss fried potatoes to coat.",
      "Garnish with spring onions and sesame seeds; serve hot."
    ],
    "image": "https://www.momodelights.com/wp-content/uploads/2024/07/Honey-Chilli-Potato.jpg",
    "chef": "sataro Gojo",
    "category": "Snacks",
    "description": "Crispy potato fingers coated in a sticky sweet-spicy honey-chilli glaze."
  },
  {
    "id": 3,
    "title": "Creamy Mushroom Pasta",
    "ingrediants": [
      "Pasta of choice",
      "Butter",
      "Garlic",
      "Mixed mushrooms",
      "Cream",
      "Parmesan cheese",
      "Parsley",
      "Salt and pepper"
    ],
    "instructions": [
      "Cook pasta until al dente and drain.",
      "Sauté mushrooms and garlic in butter until soft.",
      "Add cream and simmer to thicken.",
      "Toss pasta with the sauce and add Parmesan.",
      "Garnish with parsley and serve immediately."
    ],
    "image": "https://assets.bonappetit.com/photos/5d4ddd602c815a00080f9771/3:2/w_3131,h_2087,c_limit/BA-0919-Creamy-Pasta-Crispy-Mushroom-Playbook.jpg",
    "chef": "Saitama",
    "category": "Lunch",
    "description": "Rich and velvety mushroom pasta — simple, comforting, and elegant."
  },
  {
    "id": 4,
    "title": "Spicy Chickpea Curry",
    "ingrediants": [
      "Chickpeas (canned or boiled)",
      "Onion",
      "Tomato",
      "Ginger",
      "Garlic",
      "Cumin",
      "Coriander",
      "Turmeric",
      "Garam masala",
      "Chilli powder",
      "Coconut milk",
      "Cilantro"
    ],
    "instructions": [
      "Sauté onions, ginger and garlic until translucent.",
      "Add spices and cook briefly to bloom flavors.",
      "Add tomatoes and cook down to a paste.",
      "Stir in chickpeas and coconut milk; simmer 10-12 minutes.",
      "Finish with cilantro and serve with rice or flatbread."
    ],
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4MvoYTtphUQTEanja6arIfiaA73Qfw-GIpg&s",
    "chef": "Nobara",
    "category": "Dinner",
    "description": "Hearty chickpea curry with warm spices and a creamy coconut finish."
  },
  {
    "id": 5,
    "title": "Zesty Lemon Pancakes",
    "ingrediants": [
      "All-purpose flour",
      "Milk",
      "Eggs",
      "Baking powder",
      "Sugar",
      "Lemon zest",
      "Lemon juice",
      "Butter",
      "Salt"
    ],
    "instructions": [
      "Whisk dry ingredients together; mix in milk, eggs and lemon juice.",
      "Fold in lemon zest and rest batter 5 minutes.",
      "Cook pancakes on a greased skillet until golden on both sides.",
      "Serve warm with butter and maple syrup or lemon glaze."
    ],
    "image": "https://killowen.ie/wp-content/uploads/2025/04/Lemon-Pancakes.jpg",
    "chef": "Moriarty",
    "category": "Breakfast",
    "description": "Light, fluffy pancakes brightened with fresh lemon zest and juice."
  },
  {
    "id": 6,
    "title": "Herby Grilled Chicken",
    "ingrediants": [
      "Chicken pieces",
      "Olive oil",
      "Lemon",
      "Garlic",
      "Thyme",
      "Rosemary",
      "Salt",
      "Black pepper"
    ],
    "instructions": [
      "Marinate chicken with herbs, garlic, lemon and oil for at least 30 minutes.",
      "Grill or roast until cooked through and juices run clear.",
      "Rest 5 minutes before serving.",
      "Serve with roasted vegetables or salad."
    ],
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Ne9niCIuEcfJsCduQ08v4cm1BVSIdc3Gbw&s",
    "chef": "Ash",
    "category": "Lunch",
    "description": "Juicy grilled chicken infused with fresh herbs and zesty lemon."
  }

]);

       useEffect(() => {
  const localRecipes = JSON.parse(localStorage.getItem("recipes"));
  if (localRecipes && localRecipes.length > 0) {
    setdata(localRecipes);
  }
}, []);

        console.log(data)
  return (
    <recipecontext.Provider value={{data, setdata}}>
      {props.children}
    </recipecontext.Provider>
  )
}

export default RecipeContext
