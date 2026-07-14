import { createContext, useContext, useReducer } from "react";
import carReducer from "../reducer/carReducer";


const CarContext = createContext();


const initialCars = [];


export function CarProvider({children}) {


const [cars,dispatch] = useReducer(
    carReducer,
    initialCars
);



return (

<CarContext.Provider
value={{
    cars,
    dispatch
}}
>

{children}

</CarContext.Provider>

)

}



export function useCar(){

return useContext(CarContext);

}