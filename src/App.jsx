import { useState } from 'react'
import './App.css'
import ToggleSwitch from './components/ToggleSwitch'
import ProgressBar from './components/ProgressBar'
import AddToCartBtn from './components/AddToCartBtn'

function App() {
  const [szam, setSzam] = useState(0)

  function noveldASzamot(){
    setSzam(szam + 1)
  }

  return (
    <>
      <h1>Hello React!🚀</h1>
      <h2>A szám: {szam}</h2>
      <button onClick={noveldASzamot}>Kattints!</button>

      <ToggleSwitch/>

      <br/>

      <AddToCartBtn/>
      <br/>
      <ProgressBar max={100} color="green" current={szam}/>
      <br/>
      <ProgressBar max={1000} current={360}/>
      <br/>
      <ProgressBar max={100} color="#FFAAFF" current={30}/>
      <br/>
      <ProgressBar max={400} current={60}/>
    </>
  )
}

export default App
