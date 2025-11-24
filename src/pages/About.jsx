import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-700 text-white px-6 py-16 rounded-2xl">
      <div className="max-w-4xl mx-auto">

        
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          About <span className="text-red-500">RecipeSaga</span>
        </h1>

      
        <p className="text-gray-300 text-lg leading-relaxed text-center mb-12">
          RecipeSaga is your personal cooking companion — a place where you can 
          explore, save, and create recipes effortlessly. Whether you're a 
          beginner just learning to cook or someone who loves experimenting in 
          the kitchen, this platform gives you the tools to organize and 
          discover delicious dishes with ease.
        </p>

        
        <div className="grid md:grid-cols-3 gap-10 mt-10">

        
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-red-500 duration-200 ">
            <h2 className="text-xl font-semibold mb-3 text-red-400">Explore Recipes</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Browse through a clean, well-organized collection of recipes.  
              From traditional home-cooked meals to creative new dishes.
            </p>
          </div>

         
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-red-500 duration-200">
            <h2 className="text-xl font-semibold mb-3 text-red-400">Create Your Own</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Add your own recipes with ingredients, steps, cooking time, 
              and images. Build your personal food library.
            </p>
          </div>

      
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-red-500 duration-200">
            <h2 className="text-xl font-semibold mb-3 text-red-400">Save & Manage</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bookmark your favorite dishes so you can come back anytime 
              without searching again.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 bg-gray-900 border border-gray-700 p-8 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4 text-red-400">Why RecipeSaga?</h2>
          <p className="text-gray-400 leading-relaxed">
            Cooking is personal. Everyone has memories, stories, emotions, and 
            flavors connected to food. RecipeSaga aims to make this experience 
            simple, modern, and enjoyable. No clutter, no ads — just clean, fast, 
            and beautiful UI built for users who love food as much as we do.
          </p>
        </div>

      </div>
    </div>
  );
}



