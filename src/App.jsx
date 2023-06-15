import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// import './App.css'
// import Form from './Form'
// import Registration from './assets/Registration'
import User from './User/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 style={{'backgroundColor':'#07695F','color':'white','padding':'20px','margin':'0px'}}>My First React App</h1>
      <div className='container'>
        
        {/* <Form/> */}
        {/* <Registration/> */}
        <User />
      </div>
      
    </>
  )
}

export default App
