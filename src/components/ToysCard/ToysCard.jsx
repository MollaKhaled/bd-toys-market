import React from 'react';
import { Link } from 'react-router-dom';

const ToysCard = ({toy}) => {
  const { _id, sellerName,toyName,price,details, picture, rating} = toy;
  return (
    <div className="mx-20 card bg-base-100 w-96 shadow-xl">
    <figure className="px-10 pt-10">
      <img
        src={picture}
        alt=""
        className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">Toy Name: {toyName}</h2>
      <p>Seller Name: {sellerName}</p>
      <p className='text-xl text-orange-500'>Price:${price}</p>
      {details.length < 0 ? <></> :
            <>{details.slice(0, 0)}<Link to={`/toys/${_id}`}>Details</Link></>
          }
      <div className="card-actions">
        <Link to={`/book/${_id}`}><button className="btn btn-warning">Book Now</button></Link>
      </div>
    </div>
  </div>
  );
};

export default ToysCard;