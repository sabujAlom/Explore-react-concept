
import './App.css'
import Friends from './Friends'
import Users from './Users'


function App() {
  function handleClick(){
    alert('hello ')
  }
  const handleClick2 =() =>{
    alert('Button 2')
  }

  return (
    <>
      

      <h3>React Core Concepts 2</h3>
     <Users></Users>
     <Friends></Friends>


      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button> 
   
     
    </>
  )
}

export default App
