import {createContext} from "react";


export const UserContext=createContext();


export function UserProvider({children}){


const user={
name:"Arun",
role:"Customer"
}


return(

<UserContext.Provider value={user}>

{children}

</UserContext.Provider>

)

}