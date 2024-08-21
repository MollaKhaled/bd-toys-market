import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";




const Bookings = () => {
const {user} = useContext(AuthContext);
const [bookings, setBookings] = useState([])
const url = `http://localhost:3000/toyBookings?email=${user?.email}`
useEffect(() => {
     fetch(url)
     .then(res => res.json())
     .then(data =>setBookings(data))
},[])
const handleDelete = id => {
  const proceed = confirm("Are You sure you want to delete")
  if (proceed) {
    fetch(`http://localhost:3000/toyBookings/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert('deleted successful');
          const remaining = bookings.filter(booking => booking._id !== id);
          setBookings(remaining)
        }
      })
  }
}
const handleConfirm  = id => {
  fetch(`http://localhost:3000/toyBookings/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ status: 'confirm' })
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.modifiedCount > 0) {
        const remaining = bookings.filter(booking => booking._id !== id);
        const updated = bookings.find(booking => booking._id == id);
        updated.status = 'confirm'
        const newBookings = [updated, ...remaining];
        setBookings(newBookings);
      }
    })

}

  return (
    <div>
      <h2>booking {bookings.length}</h2>
      <div className="overflow-x-auto">
        <table className="table font-bold">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="font-bold">Photo</th>
              <th className="font-bold">Email</th>
              <th className="font-bold">Toy Name</th>
              <th className="font-bold">Price</th>
              <th className="font-bold">Delivery Date</th>
              <th className="font-bold">Status</th>
            </tr>
          </thead>
          <tbody>

            {
              bookings.map(booking => <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
              ></BookingRow>)
            }

          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Bookings;