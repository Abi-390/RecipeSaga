
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center gap-x-10 text-sm mb-10'>
      <NavLink className={(e)=>e.isActive ? "text-red-300":""} to="/">Home</NavLink>
       <NavLink className={(e)=>e.isActive ? "text-red-300":""} to="/recipes">Recipes</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-red-300":""} to="/about">About</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-red-300":""} to="/create">Create Recipe</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-red-300":""} to="/favourite">Favorite</NavLink>
    </div>
  )
}

export default Navbar
