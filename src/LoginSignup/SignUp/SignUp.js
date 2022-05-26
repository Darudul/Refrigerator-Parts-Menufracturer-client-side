import React from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Loading from "../Loading/Loading";
import { signOut } from "@firebase/auth";
import useToken from "../../useToken/useToken";
import MyOrders from "../../Pages/DashBoard/MyOrders";

const SignUp = () => {
  const [user3, load] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user1, loading1, error1] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [token] = useToken(user || user1);
  const navigate = useNavigate();
  // const location = useLocation();
  // let from = location.state?.from?.pathname || "/";

  let signInError;

  if (loading || loading1 || load) {
    return <Loading></Loading>;
  }

  if (error || error1 || updateError) {
    signInError = (
      <p className="text-red-500">
        <small>
          {error?.message || error1?.message || updateError?.message}
        </small>
      </p>
    );
  }

  if (token) {
    navigate("/home");
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log("update done");
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold text-indigo-700">
            SignUp
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-amber-900">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-amber-900">Email</span>
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
                name="password"
                placeholder="Enter Password"
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
              value="SignUp"
            />
          </form>
          <p>
            <small>
              Already have an account?{" "}
              <Link className="text-primary" to="/login">
                Please login
              </Link>
            </small>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline bg-cyan-500 text-white"
          >
            Google Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
