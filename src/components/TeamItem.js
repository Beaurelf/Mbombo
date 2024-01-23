import React from 'react'

function TeamItem({name, role, text, image}) {
  return (
    <div className='col-lg-4 col-md-6 col-12 p-2'>
        <div className="card shadow-sm team-item">
            <div className='card-img d-flex justify-content-center align-items-center p-2'>
                <img src={image} className="card-img-top team-item-image" alt={name}/>
            </div>
            <div className="card-body">
                <h5 className="team-item-title text-center card-title">{name}</h5>
                <p className="team-item-role text-center card-text">{role}</p>
                <p className='team-item-text text-center'>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default TeamItem