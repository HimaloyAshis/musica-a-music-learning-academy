import React from 'react';

const InstructorCard = ({instructor}) => {
    const {class_Image,class_Name,price,Instructor_Name,seats} = instructor
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={class_Image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body  py-2">
                <h2 className="card-title">Class_Name: {class_Name}</h2>
                <p>Instructor_Name: {Instructor_Name}</p>
                <p>Seats: {seats}</p>
                <p>price: $ {price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;