

import './App.css'
import { Text } from './components/Text/Text' 
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'

function App() {
  

  return (
    <>
    <div id='app-container'>
    <div id ='scrollable'>
        <Navbar />
         <Text variant='h1' >Hi there</Text>
         <Text variant='h2'>Hi there</Text>
         <Text variant='p'>Hi there</Text>
         <Text variant='span'>Hi there</Text>
    </div>
    <Footer />
    </div>

    </>
  )
}

export default App
