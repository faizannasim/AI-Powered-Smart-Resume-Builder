import React from 'react'

function Logout({onLogout}) {
  return (
    <div className='max-w-md mx-auto pt-5 text-center'>
        <button className='btn btn-danger' onClick={onLogout}>
            Logout
        </button>
        
    </div>
  )
}

export default Logout