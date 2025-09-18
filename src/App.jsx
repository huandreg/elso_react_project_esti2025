import { useState } from 'react'
import './App.css'
import ToggleSwitch from './components/ToggleSwitch'

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
      <ToggleSwitch/>
      <ToggleSwitch/>
      <ToggleSwitch/>
      <ToggleSwitch/>
      <ToggleSwitch/>
      <ToggleSwitch/>
      <ToggleSwitch/>
      <ToggleSwitch/>
      <ToggleSwitch/>
      <ToggleSwitch/>
      <ToggleSwitch/>
      <ToggleSwitch/>
      <ToggleSwitch/>
      <ToggleSwitch/>
      <ToggleSwitch/>

    </>
  )
}

export default App
