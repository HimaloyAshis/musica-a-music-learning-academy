import React from 'react';
import { Link } from 'react-router-dom';

const PopularCard = ({ pop }) => {

    const {class_Image,class_Name} = pop

    return (
        <div className="card w-96 bg-[#C2DEDC] text-[#0B2447] shadow-xl">
            <figure className="px-10 pt-10">
                <img src={class_Image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Class Name : {class_Name}</h2>
                
                <div className="card-actions">
                    <Link to={'/class'} className="btn butn">Take a look</Link>
                </div>
            </div>
        </div>
    );
};

export default PopularCard;