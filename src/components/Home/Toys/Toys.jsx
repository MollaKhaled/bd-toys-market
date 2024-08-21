import React, { useEffect, useState } from 'react';
import ToysCard from '../../ToysCard/ToysCard';
import { useLoaderData } from 'react-router-dom';

const Toys = () => {
  const [toys, setToys] = useState([]);
  const {totalToys} = useLoaderData();
  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalToys / itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()];
  console.log(totalToys);


  useEffect(() =>{
    fetch('https://bd-toys-market-server.vercel.app/toys')
    .then(res => res.json())
    .then(data => setToys(data))
  },[])
  return (
   <>
    <div className='text-center'>
      <h3 className='text-3xl text-orange-500 font-bold'>Toys</h3>
      <h1 className="text-5xl font-bold">Our Toys Area</h1>
      <p className="py-4">
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,<br /> or randomised words which don't look even slightly believable. 
      </p>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          toys.map(toy =><ToysCard
          key= {toy._id}
          toy={toy}
          ></ToysCard>)
        }
      </div>
    </div>
    {/* pagination */}
    <div className="pagination text-center mb-4 ">
      {
        pageNumbers.map(number =><button className='btn btn-warning mr-4' key={number}>{number}</button>)
      }
    </div>
   </>
  );
};

export default Toys;