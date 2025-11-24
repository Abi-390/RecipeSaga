
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import About from '../pages/About'
import Create from '../pages/Create'
import SingleRecipe from '../pages/SingleRecipe'
import PageNotfound from '../pages/PageNotfound'
import Fav from '../pages/Fav'

const Mainroutes = () => {
  return (
    <Routes>
        <Route path = "/" element ={<Home/>}/>
        <Route path = "/recipes" element ={<Recipes/>}/>
        <Route path = "/recipes/detail/:id" element ={<SingleRecipe/>}/>
        <Route path = "/about" element ={<About/>}/>
        <Route path = "/create" element ={<Create/>}/>
         <Route path = "/favourite" element ={<Fav/>}/>
        <Route path = "*" element ={<PageNotfound/>}/>
    </Routes>
  )
}

export default Mainroutes
