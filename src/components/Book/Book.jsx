import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../hooks/useTitle';

const Book = () => {
  useTitle('Book')
  const toy = useLoaderData();
  const { user } = useContext(AuthContext)
  const { _id, sellerName, toyName, price, details, picture, rating } = toy;
  const handleBookToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;
    const booking = {
      sellerName,
      email,
      date,
      picture,
      toyName,
      service_id: _id,
      price: price
    }
    console.log(booking);
    fetch('https://bd-toys-market-server.vercel.app/toyBookings', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(booking),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          alert('Toy book successfully')
        }
      })
  }
  return (
    <div>
      <form onSubmit={handleBookToy} className="card-body">
        <h2 className="items-center text-center text-5xl text-bold">Book Toy: {toyName}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' placeholder="name" defaultValue={user?.displayName} className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input type="text" defaultValue={'$' + price} className="input input-bordered" required />
          </div>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary btn-block " type="submit" value='Order Confirm' />
        </div>
      </form>
    </div>
  );
};

export default Book;