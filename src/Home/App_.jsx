import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='HomeComponent'>
        <div className='HomeHead'>
          <h2>Head</h2>
        </div>
        <div className='HomeBody'>
          <h2>Body</h2>
        </div>
        <div className='HomeFoot'>
          <h2>Footer</h2>
        </div>
      </div>
      <div className='HomeComponent'>
        <div className='HomeHead'>
          <h2>Head</h2>
        </div>
        <div className='HomeBody'>
          <h2>Body</h2>
        </div>
        <div className='HomeFoot'>
          <h2>Footer</h2>
        </div>
      </div>
    </>
  )
}

export default App
