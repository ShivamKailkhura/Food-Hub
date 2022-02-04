import react from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from "./Page1/Header";

import Footer from "./Page1/Footer";
import Copyright from "./Page1/Copyright";

import Gap from "./Page1/gap";

import PageOne from "./Page1/PageOne";
import Burger from "./Associates/Burger/burger";
import Pizza from "./Associates/Pizza/pizza";
import Dosa from "./Associates/Dosa/dosa";
import MilkShake from "./Associates/MilkShake/milkshake";
import MangoShake from "./Associates/MangoShake/mangoshake";
import HotChocolate from "./Associates/HotChocolate/hotchocolate";
import Dinner from "./Associates/Dinner/dinner";

function App() {
  return (
    <Router className="site">
      <Header />
      <Gap />
      <Routes>
        <Route exact path='/' element={<PageOne/>}/>
          
        <Route exact path='/burger' element={<Burger/>}/>
        <Route exact path='/pizza' element={<Pizza/>}/>
        <Route exact path='/dosa' element={<Dosa/>}/>
        <Route exact path='/dinner' element={<Dinner/>}/>
        <Route exact path='/hotchocolate' element={<HotChocolate/>}/>
        <Route exact path='/milkshake' element={<MilkShake/>}/>
        <Route exact path='/mangoshake' element={<MangoShake/>}/>
       
      </Routes>
      <Footer />
      <Copyright />
    </Router>
  );
}

export default App;
