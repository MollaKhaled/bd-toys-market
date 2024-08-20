import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import app from '../../../firebase/firebase.config';

const auth = getAuth(app);
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || '/';
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        setError('');
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
        setError('Invalid email/password');
      });
  };

  const handleResetPassword = (event) => {
    const email = emailRef.current.value;
    if (!email) {
      alert('Please provide your email address to reset password');
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Please check your email');
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content">
          <div className="card bg-base-100 max-w-sm shrink-0 shadow-2xl w-96">
            <h1 className="text-4xl font-bold mb-4 mt-4 text-center p-4">Please Login!</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="flex items-center gap-2 mt-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                  />
                  <span className="label-text">Show Password</span>
                </label>
                <label className="label">
                  <Link>
                    Forgot password? Please
                    <button onClick={handleResetPassword} className="btn btn-link">
                      Reset Password
                    </button>
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline">Login</button>
              </div>
            </form>
            <label className="label mb-4 ml-8">
              <Link to="/register" className="label-text-alt link link-hover">
                New to Please Register
              </Link>
            </label>
            <p className="text-red-600 p-4 m-3">{error}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
