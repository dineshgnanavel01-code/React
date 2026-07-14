import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

import {CarProvider} from "./context/CarContext";


ReactDOM.createRoot(
document.getElementById("root")
)
.render(

<CarProvider>

<App/>

</CarProvider>

);