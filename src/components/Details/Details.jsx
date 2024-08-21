import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
  const toyDetails = useLoaderData();
  const { _id, sellerName,toyName,price,details, picture, rating, date, email, status} = toyDetails;
  return (
    <div>
  <figure>
    <img
      src={picture}
      alt='' />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{toyName}</h2>
    <p>{details}</p>
    <div className="card-actions justify-start">
      <Link to='/'><button className="btn btn-error"><FaArrowLeft></FaArrowLeft> All Toys here</button></Link>
    </div>
  </div>
</div>
  );
};

export default Details;