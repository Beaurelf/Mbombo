import React from 'react'
import { useNavigate } from 'react-router-dom'

function ServiceItem({title, text, image, lg}) {
  const navigate = useNavigate()
  return (
    <div className={`col-lg-${lg} col-md-6 col-12 p-2`}>
      <div className="service-item card shadow-sm p-4"  data-aos="fade-up">
        <div className="card-body">
          <img className ="mb-3" src={image} width={100} height={100} alt={title}/>
          <h5 className="service-item-title card-title">{title}</h5>
          <p className="service-item-text card-text">{text}</p>
          <button className='button'onClick={() => navigate('/services')}>en savoir plus...</button>
        </div>
      </div>
    </div>
  )
}

export default ServiceItem
