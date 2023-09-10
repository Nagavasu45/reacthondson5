import React, { useState } from "react"
function Higher1(){
    const [age,ageSet]=useState(26);
return(
<>
<h2> Hi, This is my HOC1 component </h2>
<h2>the present age:{age} </h2>
<button onClick={()=>ageSet(age+1)}>seeMyAge

</button>
</>
)
}
export default Higher1