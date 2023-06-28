import React from 'react';
import { Link } from 'react-router-dom';

const PopularInstructorCard = ({pop}) => {

    const {name, image} = pop
    // console.log(pop)

    return (
        <div className="card w-96 bg-[#C2DEDC] shadow-xl " data-aos="fade-up"
        data-aos-duration="3000">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Instructor Name : {name}</h2>
                
                <div className="card-actions">
                    <Link to={'/instructors'} className="btn butn">Take a look</Link>
                </div>
            </div>
        </div>
    );
};

export default PopularInstructorCard;