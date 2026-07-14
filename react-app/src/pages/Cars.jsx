import {useEffect,useState} from "react";
import {useSearchParams} from "react-router-dom";

import CarCard from "../components/CarCard";


function Cars(){


const [cars,setCars]=useState([]);


const [searchParams]=useSearchParams();


const brand=searchParams.get("brand");



useEffect(()=>{

fetch("https://fakestoreapi.com/products")

.then(res=>res.json())

.then(data=>{

setCars(
data.map(item=>({

id:item.id,
name:item.title,
price:item.price,
model:"2026"

}))
)

})

.catch(error=>{

console.log(error);

});


},[]);



return(

<div>

<h1>
Available Cars
</h1>


{

brand &&

<h3>
Brand : {brand}
</h3>

}



{

cars.map(car=>(

<CarCard

key={car.id}

car={car}

/>

))

}


</div>

)

}


export default Cars;