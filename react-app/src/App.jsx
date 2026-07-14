import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";

import Services from "./pages/Services";
import Service1 from "./pages/Service1";
import Service2 from "./pages/Service2";
import Service3 from "./pages/Service3";

import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

import ManageCars from "./components/ManageCars";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetails />} />

        {/* ✅ Nested Routing setup */}
        <Route path="/services" element={<Services />}>
          <Route path="service1" element={<Service1 />} />
          <Route path="service2" element={<Service2 />} />
          <Route path="service3" element={<Service3 />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/manage" element={<ManageCars />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
