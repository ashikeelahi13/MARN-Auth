import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export default function NotFound() {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser)
  return (
    <div className="h-96 flex flex-col justify-center gap-2">
      <h1 className="self-center text-8xl">404</h1>
      <p className="self-center text-xl">Page Not found...</p>
      <Link className="mx-auto" to="/">
        <button className="bg-violet-800 mt-2 text-white px-4 py-2 rounded-lg">
          {
            currentUser ? "Go to home page" : "Go to Sign In Page"
          }
        </button>
      </Link>
    </div>
  );
}
