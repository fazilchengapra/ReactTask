import React, { useEffect, useState } from 'react'

const Button = () => {
    const [color, setColor] = useState(1)

    useEffect(() => {
      console.log('hey i am fazil');
      
    })
  return (
    <div style={{display: 'flex'}}>
        <button style={{background: color === 2 && 'green'}} onClick={() => setColor(2)}>aa</button>
        <button style={{background: color === 1 && 'green'}} onClick={() => setColor(1)}>bb</button>
    </div>
  )
}

export default Button