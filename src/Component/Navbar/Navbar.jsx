import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { tanStackData } from "../TanStack/TanStackQuery";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  // Fetching data inside the component
  const { data } = useQuery({
    queryKey: ["application"],
    queryFn: tanStackData,
  });

  // Ensure products is always an array
  const products = Array.isArray(data) ? data : data?.products || [];




  // Search state
  const [searchData, setSearchData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  // Handle search input
  const searchHandler = (e) => {
    const value = e.target.value;
    setSearchTerm(value);



    // Filter products based on search term
    if (value !== "") {
      const filteredData = products.filter((item) => {
        return (
          item.title.toLowerCase().includes(value.toLowerCase()) ||
          item.brand.toLowerCase().includes(value.toLowerCase()) ||
          item.category.toLowerCase().includes(value.toLowerCase())
        );
      });
      setSearchData(filteredData);
    } else {
      setSearchData([]);
    }
  };
  // Navbar menu & crus respons ......................................
  let [menuShow, setMenuShow] = useState(false)

  const hendelMenuBar = () => {
    setMenuShow(!menuShow)       
  }
  
  

  return (
    <section >
      <div className="border-b ">
        <div className="container mx-auto md:flex items-center py-5 px-2 ">
          {/* Logo */}
          <h2 className="font-bold text-2xl w-[25%]">Exclusive</h2>

          {/* Navigation & Search */}
          <div className="md:flex md:flex-row flex flex-col-reverse md:justify-between w-[75%] ">

            {/* Navigation Links */}
            <ul className={ ` md:flex md:gap-10  py-2 md:static   ${menuShow ? ' ' : ' top-[100px] -left-[200px] absolute  '}`}>
              <li className="md:hover:border-b">
                <Link to="/">Home</Link>
              </li>
              <li className="md:hover:border-b">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="md:hover:border-b">
                <Link to="/about">About</Link>
              </li>
              <li className="md:hover:border-b">
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>

            {/* Search & Icons */}
            <div className="relative flex text-center gap-4 items-center">
              {/* Search Input */}
              <div className="flex px-1 rounded-sm w-[230px] py-2 justify-between bg-[#F5F5F5] relative">
                <input
                  onChange={searchHandler}
                  value={searchTerm}
                  className="outline-none w-[200px] bg-transparent"
                  type="search"
                  placeholder="What are you looking for?"
                  aria-label="Search"
                />
                <button className="text-[22px]" aria-label="Search">
                  <FiSearch />
                </button>
              </div>

              {/* Icons */}
              <div className="flex py-2 gap-5 text-[22px]">
                <Link to=''>
                <button aria-label="Wishlist">
                  <Link to="/wishlist" >
                  <AiOutlineHeart />
                  </Link>
                </button>
                
                </Link>
                <Link to="/card">
                <button aria-label="Cart">
                  <AiOutlineShoppingCart />
                </button>
                </Link>
              </div>

              <div className="">
                <p onClick={ hendelMenuBar} className="md:hidden text-2xl  "> {menuShow === true ? <RxCross2 />: <MdMenu />} </p>
              </div>

                {/* Show search results */}
              <div className=" ">

              {searchData.length > 0 && (
                <div className=" right-0 w-[230px] md:w-[369px] md: bg-white shadow-md rounded-md z-50 h-72 overflow-y-scroll overflow-hidden absolute top-12">
                  {searchData.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-3 border-b p-2 h-36 overflow-hidden hover:bg-gray-100"
                    >
                      <img
                        src={item.image || "https://via.placeholder.com/50"}
                        alt={item.title}
                        className="w-[33%]  object-cover rounded  h-full "
                      />
                      <div className="flex w-[70%] gap-2 items-center justify-center">
                        <h3 className="text-sm font-semibold max-w-[70%] h-32 overflow-hidden flex items-center justify-center">{item.title}</h3>
                        <p className="text-xs text-gray-600 w-[30%]">${item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
