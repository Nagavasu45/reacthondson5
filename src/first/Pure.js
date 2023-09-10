import React, { useState } from "react"
function Pure(){
    const [name,nameSet]=useState("human");
return(
<>
<div> A pure component in React is a component that renders the same output for the 
    same state and props. This means that if the state and props of a pure component 
    do not change, then the component will not re-render. This can improve performance, 
    as React will not need to re-render the component's DOM tree.
    
</div>
<h2> Hi, This is my pure component </h2>
<h2>the present name:{name} </h2>
<button onClick={()=>nameSet("Garikipati")}>seeMyName

</button>
</>
)
}
export default Pure