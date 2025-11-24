
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";
const App = () => {
  return (
    <div className='py-10 px-[10%] min-h-screen w-full bg-gray-800 font-thin text-white'>
     
    <Navbar/>
    <Mainroutes/>
    </div>
  )
}

export default App
