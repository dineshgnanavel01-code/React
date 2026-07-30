import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import "./App.css";

function App(){

return(
<BrowserRouter>
<Routes>
<Route path="/"element={<SignIn/>}/>
<Route path="/signin"element={<SignIn/>}/>
<Route path="/signup"element={<SignUp/>}
/>
</Routes>
</BrowserRouter>

);

}


export default App;