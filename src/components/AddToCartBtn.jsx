import React, { useState } from 'react'

const AddToCartBtn = () => {
  const [quantity, setQuantity] = useState(0)

  const increase = () => {setQuantity(quantity + 1)}
  const decrease = () => {setQuantity(quantity-1)}

  return (
  <> 
  { quantity == 0 ? 
  <div className='cartBtn' onClick={increase}>🛒 Kosárba</div> : 
  <div className='cartBtn btnHolder'>
    <button onClick={decrease}>-</button>
    {quantity}
    <button onClick={increase}>+</button>
  </div> }
  </>
  )
}

export default AddToCartBtn