import React, { useEffect, useState } from 'react';
import ToysCard from '../../ToysCard/ToysCard';
import { useLoaderData } from 'react-router-dom';

const Toys = () => {
  const [toys, setToys] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const {totalToys} = useLoaderData();
  
  const totalPages = Math.ceil(totalToys / itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()];
  

  useEffect(() =>{
    async function fetchData(){
      const response = await fetch(`https://bd-toys-market-server.vercel.app/toys?page=${currentPage}&limit=${itemsPerPage}`);
      const data = await response.json();
      setToys(data);
    }
    fetchData();
  },[currentPage, itemsPerPage]);

  const options = [5, 10, 20];
  function handleSelectChange(event){
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  }
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
      <p>currentPage: {currentPage}</p>
      {
        pageNumbers.map(number =><button className='btn btn-warning mr-4' 
          key={number}
          onClick={() => setCurrentPage(number)}
          >{number}</button>)
      }
      <select value={itemsPerPage} onChange={handleSelectChange}>
        {
          options.map(option => (
            <option key ={option} value={option}>
              {option}
            </option>
          ))
        }
      </select>
    </div>
   </>
  );
};

export default Toys;