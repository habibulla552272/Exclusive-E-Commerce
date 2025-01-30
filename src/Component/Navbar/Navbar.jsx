import React from "react";
import Contact from "./../../pages/Contact";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="md:flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-serif">Exclusive</h2>
          </div>
          <div>
            <ul className="flex flex-col md:flex-row gap-5 md:text-xl font-serif">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact </Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/sign-up">Sign Up</Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-1 md:gap-3">
            <div className="flex items-center justify-center border px-2 py-2 rounded-xl text-gray-600">
              <input
                className="outline-0 px-2"
                type="text"
                placeholder="What are you looking for ?"
              />
              <p className="text-2xl">
                <CiSearch />
              </p>
            </div>
            <div className="flex items-center gap-2 md:gap-4 text-2xl md:text-3xl">
              <p>
                <CiHeart />
              </p>
              <p>
                <FaShoppingCart />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
