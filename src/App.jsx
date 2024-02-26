import { useState } from 'react'
import './App.css'
import { HomeScreen } from './screens/homseScreen/homeScreen'
import { Header } from './component/header/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <HomeScreen/>
    </>
  )
}

export default App
