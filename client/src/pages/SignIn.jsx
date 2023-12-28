import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setformData] = useState({});
  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
        <input
          className="border p-3 rounded-lg"
          type="text"
          placeholder="Email"
          id="email"
          onChange={handleChange}
        />
        <input
          className="border p-3 rounded-lg"
          type="text"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />
        <button className="bg-slate-700 p-3 rounded text-white font-bold uppercase hover:opacity-95 disabled:opacity-80">
          Sign In
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Don't have an account?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-700">sign up</span>
        </Link>
      </div>
    </div>
  );
}
