import React, { useEffect, useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";

import { Link, useNavigate, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";
import useToken from "../../useToken/useToken";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();
  const [signInWithEmailAndPassword, user1, loading1, error1] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [token] = useToken(user || user1);
  if (token) {
    navigate(from, { replace: true });
  }

  if (loading || loading1) {
    return <Loading></Loading>;
  }

  if (error || error1) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message || error?.message}</small>
      </p>
    );
  }

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };
  const resetPassword = async (event) => {
    const email = getValues("email");
    if (email) {
      await sendPasswordResetEmail(email);
      toast("reset password send your email address");
    } else {
      toast("please enter email address");
    }
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold text-purple-500">
            Login
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-amber-900	">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-amber-900">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters or more",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            {signInError}
            <input
              className="btn w-full max-w-xs text-white bg-cyan-500"
              type="submit"
              value="Login"
            />
          </form>
          <p>
            <small>
              If user is new?{" "}
              <Link className="text-primary" to="/signup">
                Please Create New Account
              </Link>
            </small>
          </p>
          <br />
          <p>
            Forget password?{" "}
            <button
              onClick={resetPassword}
              className="bg-white text-primary border-0 mb-3"
            >
              Reset Password!!!
            </button>
          </p>{" "}
          <br />
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn bg-cyan-500	"
          >
            Google Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
