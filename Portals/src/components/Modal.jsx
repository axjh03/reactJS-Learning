import React from 'react'

function Modal(props) {
  return (
    <div className='modal'>
        <div className='modal-content'>
            <button onClick={()=>{props.controller(false)}} className='close-btn'>&times;</button>
            <h2>Modal</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minus, optio exercitationem, ipsa quisquam placeat ex cum quod eligendi atque, adipisci architecto reprehenderit cumque nobis iusto. Nobis dolore a ab laborum possimus, alias placeat, vel, accusamus necessitatibus officia esse quas.</p>
        </div>
    </div>
  )
}

export default Modal