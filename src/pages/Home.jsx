import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  
  const navigate = useNavigate();
  return (
    <div className="w-full">

      
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-black">
          Cook. Create. Share.
        </h1>
        <p className="mt-4 text-gray-300 text-lg md:text-xl max-w-xl mx-auto">
          Your personal recipe notebook — easy to use, beautifully organized.
          Save your favourite meals and revisit them anytime.
        </p>

        <button onClick={()=>navigate("/recipes")} className="mt-6 px-6 py-3 bg-red-500 rounded-md text-white hover:bg-red-600 duration-200">
          Explore Recipes
        </button>
      </section>

      
      <section className="mt-20">
        <h2 className="text-3xl font-black text-center mb-8">Categories</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { name: "Breakfast", color: "bg-yellow-600" },
            { name: "Lunch", color: "bg-green-600" },
            { name: "Supper", color: "bg-blue-600" },
            { name: "Dinner", color: "bg-purple-600" },
          ].map((cat) => (
            <div
              key={cat.name}
              className={`p-5 rounded-lg ${cat.color} text-center font-semibold shadow hover:scale-105 duration-200 cursor-pointer`}
            >
              {cat.name}
            </div>
          ))}
        </div>
      </section>

     
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-black mb-8">Why This App?</h2>

        <div className="grid md:grid-cols-3 gap-10 text-gray-300">
          <div>
            <h3 className="text-xl font-bold mb-2 text-white">Save Recipes</h3>
            <p>Store all your favourite dishes in one place.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-white">Easy to Edit</h3>
            <p>Update ingredients or instructions anytime you want.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2 text-white">Mark Favourites</h3>
            <p>Keep track of your most loved meals instantly.</p>
          </div>
        </div>
      </section>

     
      <section className="text-center py-20 mt-10">
        <h2 className="text-3xl font-black">Ready to Create?</h2>
        <button onClick={()=>navigate("./create")} className="mt-6 px-6 py-3 bg-gray-900 border border-gray-600 rounded-md hover:bg-gray-700 duration-200">
          Create Your First Recipe
        </button>
      </section>
    </div>
  );
};

export default Home;
