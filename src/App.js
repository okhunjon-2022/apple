import './App.css';
import {Routes,Route} from "react-router-dom"
import Accesstories from "./router/accesstories/Accesstories"
import Airpods from "./router/airpods/Airpods"
import Home from "./router/home/Home"
import Ipad from "./router/ipad/Ipad"
import Iphone from "./router/iphone/Iphone"
import Only from "./router/only/Onlu"
import Store from "./router/store/Store"
import Support from "./router/support/Support"
import Tv from "./router/tv/Tv"
import Wacht from "./router/watch/Wacht"
import Navbar from "./components/navbar/Navbar"
import Mac from './router/mac/Mac';


function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/accesstories' element={<Accesstories/>} />
        <Route path='/airpods' element={<Airpods/>} />
        <Route path='/ipad' element={<Ipad/>} />
        <Route path='/iphone' element={<Iphone/>} />
        <Route path='/only' element={<Only/>} />
        <Route path='/store' element={<Store/>} />
        <Route path='/support' element={<Support/>} />
        <Route path='/tv' element={<Tv/>} />
        <Route path='/watch' element={<Wacht/>} />
        <Route path='/mac' element={<Mac/>} />
      </Routes>


    </div>
  );
}

export default App;
