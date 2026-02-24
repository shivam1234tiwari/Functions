import React from 'react'

const App = () => {
  function btnClicked(){
    console.log('Hello!');
  }
  function sub(){
    alert('submit..');
  }
  return (
    <>
    <label htmlFor="name">Name:</label>
       <input onChange={(elem)=>{
      btnClicked(elem)
     }}
      type="text"placeholder='enter name' />
      <button onClick={(elem)=>{
        sub(elem)
      }}className='btn'>Submit</button>
    </>
  )
}

export default App
