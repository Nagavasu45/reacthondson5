import React, { useState } from "react"
function Higher2(props){
    const [name,nameSet]=useState("vasu");
return(
<>
<div>
Higher-order component (HOC) is a React function that takes a component as an argument 
and returns a new component. It is a great way to add functionality to components without 
having to modify their code. HOCs are often used to add things like state management, routing,
 and authentication to component
</div>
<h2> Hi, This is my HOC2 component </h2>
<h2>the present Name:{name} </h2>
<button onClick={()=>nameSet("Nagavasu")}>seeMyName

</button>
{
    <div style={{background:"red"}}>{<props.child />}</div>
    
}
{
    <div style={{background:"blue"}}>{<props.child />}</div>
}
</>
)
}
export default Higher2