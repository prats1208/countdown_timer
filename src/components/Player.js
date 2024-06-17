import React, { useRef, useState } from 'react'

const Player = () => {

  const inputName = useRef() 
  const [name,setName] = useState('')
  
  // *below input related commented code not needed/can be skipped bcoz of useRef
  // const [isSumitted,setIssumitted] = useState(false)
  // function handleName(e){
  //   setIssumitted(false);
  //   setName(e.target.value);
    
  // }


  function handlesetName(){
    // setIssumitted(true);
    console.log(inputName.current);
    setName(inputName.current.value);
    inputName.current.value=''; //direct dom manipulation;imperative codeing;not declarative as React does
  }

  return (
    <section id="player">
      <h2>Welcome {name ?? 'unknown entity'}</h2> 
      {/* (isSumitted && name !='') 
         shortucut for name ? name : 'else' 
      */}
      <p>
        <input type="text" 
        ref={inputName}
        // value={name} 
        // onChange={handleName} 
        />
        <button onClick={handlesetName}>Set Name</button>
      </p>
    </section>
  )
}

export default Player