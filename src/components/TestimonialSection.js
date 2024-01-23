import React, {useState} from 'react'

const testimonials = [
  {
    name : "DIFFO",
    testimonial: "Projet prometteur qui suscite l'envie de croire en un avenir meilleur.",
  },
  {
    name : "DANIEL",
    testimonial: "Projet prometteur qui suscite l'envie de croire en un avenir meilleur." 
  }
]

function TestimonialSection() {
  const [Index, setIndex] = useState(0)
  const updateIndex = (index) => {
    if(index < 0){
      setIndex(testimonials.length - 1)
    }
    else if(index === testimonials.length){
      setIndex(0)
    }
    else{
      setIndex(index)
    }
  }
  return (
    <div className='testimonials d-flex justify-content-center align-items-center flex-column mb-4'>
      <h2>Témoignages</h2>
      <p className='m-0'>{testimonials[Index].testimonial}</p>
      <h6>{testimonials[Index].name}</h6>
      <div className='d-flex justify-content-around align-items-center gap-2'>
        <button className='button' onClick={() => updateIndex(Index - 1)}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button className='button' onClick={() => updateIndex(Index + 1)}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  )
}

export default TestimonialSection
