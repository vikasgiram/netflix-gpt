import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { addUser} from '../utils/userSlice';

import { validator } from "../utils/validator";
import { useNavigate } from "react-router-dom";
import { USER_AVTAR } from "../utils/constants";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [erroMsg, setErroMsg] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch(addUser);

  const user = useSelector((state)=> state.user);

  useEffect(() =>{
    if(user){
      navigate('/browse');
    }
  })
  

  const handleSubmit = () => {
    const msg = validator(email.current.value, password.current.value, name?.current?.value);
    setErroMsg(msg);

    if(msg) return;

    if(isSignUp){
      // Sing up logic
      const profileUrl=USER_AVTAR;
      dispatch(addUser({name: name.current.value, email: email.current.value, password: password.current.value,profileUrl }));
      navigate('/browse');
    }
    else{
      // Sign In logic
      console.log("Sign In");
    }

  };

  const HandleSignUpClick = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
      <Header />
      <div className="absolute bg-black w-12/4 mx-auto left-0 right-0 w-1/4 top-1/4 p-10 text-white bg-opacity-80 rounded-lg z-10">
        <h1 className="text-2xl font-bold mb-6">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        <form className=" text-white" onSubmit={(e) => e.preventDefault()}>
          {isSignUp && (
            <input
              ref={name}
              className="bg-black bg-opacity-60  border border-gray-500 rounded-sm p-4 w-full my-3"
              type="text"
              placeholder="Name"
            />
          )}
          <input
            ref={email}
            className="bg-black bg-opacity-60  border border-gray-500 rounded-sm p-4 w-full my-3"
            type="email"
            placeholder="Email"
          />
          <input
            ref={password}
            className="bg-black bg-opacity-60 border border-gray-500 rounded-sm p-4 w-full my-3"
            type="password"
            placeholder="Password"
          />
            <p className="text-red-600">{erroMsg}</p>
          <button
            onClick={handleSubmit}
            style={{ backgroundColor: "rgb(229, 9, 20)" }}
            className="rounded-md p-3 w-full my-6 font-bold "
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
          <p className="text-center text-gray-300">OR</p>
          <button className="bg-white bg-opacity-20 rounded-md p-3 w-full my-2 font-bold ">
            Use a sign-in-code
          </button>
          {!isSignUp && (
            <button className="rounded-md p-3 w-full  font-bold ">
              Forget Password?
            </button>
          )}

          {isSignUp ? (
            isSignUp && (
              <p>
                Allredy Registered?
                <span
                  className="font-bold cursor-pointer"
                  onClick={HandleSignUpClick}
                >
                  Sign In Now
                </span>
              </p>
            )
          ) : (
            <p>
              New to Netflix?{" "}
              <span
                className="font-bold cursor-pointer"
                onClick={HandleSignUpClick}
              >
                Sign up Now
              </span>
            </p>
          )}
        </form>
      </div>
      <div>
        <img
          className="absolute inset-0 w-full h-full object-cover filter brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg"
          alt="background"
        />
      </div>
    </div>
  );
};

export default Login;
