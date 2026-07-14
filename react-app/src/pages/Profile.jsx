import {useRef} from "react";


function Profile(){


const input=useRef();



return(

<div>


<input ref={input}/>


<button

onClick={()=>
input.current.focus()
}

>

Focus

</button>


</div>

)

}


export default Profile;