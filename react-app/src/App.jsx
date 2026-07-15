import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Cars from "./pages/Cars";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

import SUV from "./pages/cars/SUV";
import Sedan from "./pages/cars/Sedan";
import Hatchback from "./pages/cars/Hatchback";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />


        {/* Nested Routing */}
        <Route path="/cars" element={<Cars />}>

          <Route path="suv" element={<SUV />} />

          <Route path="sedan" element={<Sedan />} />

          <Route path="hatchback" element={<Hatchback />} />

        </Route>


        <Route path="/contact" element={<Contact />} />

        <Route path="/profile" element={<Profile />} />


      </Routes>


      <Footer />

    </BrowserRouter>

  );
}

export default App;