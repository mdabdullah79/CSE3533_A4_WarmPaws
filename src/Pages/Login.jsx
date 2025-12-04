import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { LuEyeOff } from "react-icons/lu";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { signIn } = use(AuthContext);
  const Location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);

  console.log(Location.state);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(`${Location.state ? Location.state : "/"}`);
        toast.success("Login Successful");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setError("Invalid Email or Password");
      });

    console.log({ email, password });
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-[18px] font-bold">Log in</h1>
        <form
          onSubmit={handleLogin}
          className="card bg-base-100 w-full max-w-sm shrink-0 shadow-sm mb-5 mt-10"
        >
          <div className="card-body">
            <fieldset className="fieldset">
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

              <a
                className="link link-hover"
                onClick={() =>
                  navigate("/auth/forgot-password", {
                    state: {
                      email: document.querySelector('input[name="email"]')
                        .value,
                    },
                  })
                }
              >
                Forgot password?
              </a>

              <p id="invalid" className="text-red-500">{error}</p>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
            </fieldset>
          </div>
        </form>
        <div className="flex items-center gap-2">
          <p>Don’t you have an account? </p>
          <Link state={Location.state} to="/auth/signup">
            <button className="font-bold text-blue-500">Sign up</button>
          </Link>
        </div>
      </div>
      <Toaster/>
    </>
  );
};

export default Login;
