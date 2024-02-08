import "./App.css";


import Home from "./components/Home";

//import Korg from "./components/Korg";
//<div className="boxs"> {card.map((el)=> <Korg data={el } />)}</div>

import Cards from "./components/Cards";
import { Route, Routes } from "react-router-dom";
import Magasin from "./components/Magasin";
import Occasion from "./components/Occasion";


function App() {
  
  
  
  return (
    <div>
   
    <Routes>
     <Route  path="/" element={<Home />}></Route>
     <Route  path="/mag" element={<Magasin />}></Route>
     <Route  path="/occasion" element={<Occasion />}></Route>
     </Routes>  
     
      <Cards />
    

    
    </div>
  );
}

export default App;
