import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Text } from './components/Text/Text' 
import { Navbar } from './components/Navbar/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar />
         <Text variant='h1' >Hi there</Text>
         <Text variant='h2'>Hi there</Text>
         <Text variant='p'>Hi there</Text>
         <Text variant='span'>Hi there</Text>
    </>
  )
}

export default App
