import React from 'react'

function Mcards(imageURL,title,_id) {
  return (
    <div>
      <h1>Our Doctors</h1>
      <div className='Doc-card'>
        <img src={imageURL}/>
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default Mcards
