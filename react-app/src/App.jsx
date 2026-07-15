import {Routes, Route} from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Vehicles from "./pages/Vehicles";
import Customers from "./pages/Customers";
import Drivers from "./pages/Drivers";
import Bookings from "./pages/Bookings";

import Services from "./pages/Services/Services";
import MonthlyBookings from "./pages/Services/MonthlyBookings";
import Reports from "./pages/Services/Reports";


function App(){

return(

<Routes>


<Route element={<Layout/>}>


<Route path="/" element={<Home/>}/>

<Route path="/dashboard" element={<Dashboard/>}/>

<Route path="/vehicles" element={<Vehicles/>}/>

<Route path="/customers" element={<Customers/>}/>

<Route path="/drivers" element={<Drivers/>}/>


<Route 
path="/bookings/:id" 
element={<Bookings/>}
/>



<Route 
path="/services" 
element={<Services/>}
>


<Route 
path="monthly"
element={<MonthlyBookings/>}
/>


<Route 
path="reports"
element={<Reports/>}
/>


</Route>



</Route>


</Routes>


)

}


export default App;