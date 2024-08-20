import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Register = () => {
  const { createUser, user } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = event => {
    event.preventDefault();
    setSuccess('');
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    setSuccess('User has been created successfully.');
    if (!/(?=.*[A-Z])/.test(password)) {
      setError('Please add at least one Uppercase !')
      return;
    }
    else if (!/(?=.[0-9].*[0-9])/.test(password)) {
      setError('Please add at least two Number')
      return;
    }
    else if (password.length < 6) {
      setError("please add at least 6 character in your password")
      return;
    }

    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError('');
        form.reset();
      })
      .catch(error => {
        console.log(error.message);
        setError(error.message);

      })
  }
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content">
        <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl w-96 ">
          <h1 className="text-4xl font-bold mb-4 mt-4 text-center p-4 ">Please Register!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <label className="label mb-4 ml-8">
            <Link to='/login' className="label-text-alt link link-hover">Already have an account? Please Login </Link>
          </label>
          <p className='text-red-600 p-4 m-3'>{error}</p>
          <p className='text-green-600 p-4 m-3'>{success}</p>
        </div>
      </div>
    </div>
  );
};
export default Register;