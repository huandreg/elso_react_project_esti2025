import { useState } from "react"

function ToggleSwitch(){
    const [toggle, setToggle] = useState(false)
    function clicked(){
        setToggle(!toggle)
    }
    return (
        <div onClick={clicked} 
        className={toggle ? "toggleSwitch on" : "toggleSwitch"}>
            <div></div>
        </div>
    )
}

export default ToggleSwitch