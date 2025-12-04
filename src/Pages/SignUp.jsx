import React, { use, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuEyeOff } from "react-icons/lu";

const SignUp = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const photo = form.photo.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    // ✅ Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      return toast.error(
        "Password must have:\n• At least one uppercase letter\n• At least one lowercase letter\n• Minimum 6 characters"
      );
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate(`${location.state ? location.state : "/"}`);
          })
          .catch((error) => {
            setUser(user);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center text-[18px] font-bold">Create an account</h1>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-sm mb-5 mt-10">
        <form onSubmit={handleSignup} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />

            <label className="label">Photo Url</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo Url"
              required
            />

            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            <div className="relative">
              <label className="label">Password</label>
              <input
                name="password"
                type={show ? "text" : "password"}
                className="input"
                placeholder="Password"
                required
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute  top-8 z-10 right-6"
              >
                {show ? <MdOutlineRemoveRedEye /> : <LuEyeOff />}
              </span>
            </div>

            <button type="submit" className="btn btn-neutral mt-4">
              Sign Up
            </button>
          </fieldset>
        </form>
      </div>

      <div className="flex items-center gap-2">
        <p>Already have an account?</p>
        <Link to="/auth/login">
          <button className="font-bold text-blue-500">Log in</button>
        </Link>
      </div>
      <Toaster />
    </div>
  );
};

export default SignUp;
