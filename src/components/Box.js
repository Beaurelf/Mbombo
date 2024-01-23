import React from 'react'

function Box({title, text, lg}) {
  return (
    <div className={`col-lg-${lg} col-md-6 col-12 p-2`}>
      <div className="box card shadow p-1">
        <div className="card-body">
          <h5 className="box-title card-title">{title}</h5>
          <p className="box-text card-text">{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Box
