import React, { useEffect, useRef, useState } from 'react'

function Form() {
    const lofi=useRef(null
        )
const[change, setChange]=useState("")
       
        useEffect(()=>{

            document.title=`tittle:${change}`
})

const kyllo=(e)=>{
setChange(e.target.value)
}



  return (
    <div>
      <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" aria-label=".form-control-lg example"/>
<input className="form-control" type="text" onChange={kyllo}  ref={lofi}>
<input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" aria-label=".form-control-sm example"/></input>
    </div>
  )
}

export default Form
