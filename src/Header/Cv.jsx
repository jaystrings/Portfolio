import React from 'react'
import cv from '../Assets/Adejumo_john.pdf'
function Cv() {
  return (
    <div className='cv'>
     <a href={cv} download className ='btn'>Download Cv</a>
     <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Cv
