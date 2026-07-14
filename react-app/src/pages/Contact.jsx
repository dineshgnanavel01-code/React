import {useState} from "react";


function Contact(){


const [email,setEmail]=useState("");

const [message,setMessage]=useState("");



function submit(e){

e.preventDefault();


if(!email.includes("@"))

setMessage("Invalid Email");

else

setMessage("Message Sent Successfully");


}



return(

<form onSubmit={submit}>


<input

value={email}

placeholder="Email"

onChange={
e=>setEmail(e.target.value)
}

/>


<button>
Submit
</button>


<p>
{message}
</p>


</form>

)

}


export default Contact;