import React, {useState} from 'react'

function OfferSection({offers}) {

    const [visibleCompositions, setVisibleCompositions] = useState({});

    const toggleCompositionVisibility = (index) => {
        setVisibleCompositions(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <section className='offer-section row mb-4 p-1'>
            {
                offers.map((offer, index) => {
                    return(
                        <div className=' col-sm-12 col-md-6 col-lg-6 p-2 position-relative' key={index}>
                            <div className="card card-offer" style={{height: visibleCompositions[index] ? 'auto' : 250}}>
                                <div className="card-header  d-flex justify-content-between">
                                    <h5>{offer.name}</h5>
                                    <h5>{offer.price}$ par mois</h5>
                                </div>
                                <div className="card-body">
                                    <div className="card-text">
                                        <p>{offer.description}</p>
                                        {visibleCompositions[index] &&
                                            <>
                                                <p>Ce forfait comprend:</p>
                                                <ul>
                                                    {offer.composition.map((c, compIndex) => (
                                                        <li key={compIndex}>
                                                            <i className="fa-regular fa-hand-point-right mx-2"></i>
                                                            <span>{c}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        }
                                    </div>
                                    <button className="button button-offer" onClick={() => toggleCompositionVisibility(index)}>
                                        {!visibleCompositions[index] ? 'plus de details' : 'moins de details'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default OfferSection