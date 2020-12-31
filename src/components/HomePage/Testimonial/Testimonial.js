import React from 'react';

const Testimonial = ({ testimonial }) => {
    return (
        <div className='card shadow-sm'>
            <div className="card-body">
                <p className="card-text text-center">
                    {testimonial.quote}
                </p>
            </div>
            <div className="card-footer d-flex align-item-center">
                <img src={testimonial.img} width="60" alt="" className="mx-3" />
                <div className="">
                    <h6>{testimonial.name}</h6>
                    <p className="m-0">{testimonial.from}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;