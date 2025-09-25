import React from 'react'

const ProgressBar = (props) => {
  const {max, current, color} = props
  return (
    <div className='progressBar'>
        <div style={{
            width: current / (max / 100) + "%",
            background: color ? color : "red"
        }}></div>
    </div>
  )
}

export default ProgressBar