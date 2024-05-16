import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Infobox from './Infobox';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Infobox/>
    </>
  )
}

export default App
