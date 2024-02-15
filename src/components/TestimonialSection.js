import React, {useState} from 'react'
import './TestimonialSection.css'
import man from '../assets/img/homme.png'
import woman from '../assets/img/femme.png'

const testimonials = [

  {
    name : "",
    surname : 'Elvire',
    age : 31,
    sex : 'F',
    testimonial: "Je suis satisfaite du suivi, les assistants personnels qui viennent à domicile sont formés et certifiés et sont très compétents.En plus j’ai eu droit à un check-up gratuit entierement à la charge de Mbombo. Bref je suis très contente et satisfaite jusqu’ici",
  },
  {
    name : '',
    surname : 'Georges',
    age : 61,
    sex : 'M',
    testimonial: "Chaque semaine, un assistant personnel vient à mon domicile surveiller ma santé et m’aider au quotidien. En plus, les frais sont abordables et payés par mes enfants qui sont au Canada et en France. Je suis très satisfait du service.",
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
    <section className='my-container'>
      <div className=' grid d-flex justify-content-center align-items-center flex-column mb-4' data-aos="fade-up">
        <div className='testimonials px-5 py-4 mb-3'>
          <div className='text-center'>
            <h2 className='title-section'>Ce que nos clients disent</h2>
          </div>
          <div className='d-flex justify-content-center align-items-center gap-5'>
            <div className='d-flex justify-content-center align-items-center flex-column gap-2'>
              <img src={(testimonials[Index].sex === 'F' ? woman : man)} alt='profile'/>
              <h4 className='name mb-0'>{testimonials[Index].name} {testimonials[Index].surname}, {testimonials[Index].age} ans</h4>
            </div>
            <div className='comment'>
              <p className='m-0'>“{testimonials[Index].testimonial}”</p>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-around align-items-center gap-2'>
          <button className='button next' onClick={() => updateIndex(Index - 1)}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button className='button previous' onClick={() => updateIndex(Index + 1)}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
