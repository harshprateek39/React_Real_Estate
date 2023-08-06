import React from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Button } from "bootstrap";
import { AiOutlineHeart } from "react-icons/ai";
import {LuArrowUpRight} from 'react-icons/lu';
import House1 from "../assets/house1.png";
const Properties = () => {
  return (
    <div className=" flex flex-col items-center w-full py-10  ">
      <div className=" flex flex-col items-center w-11/12">
        <h1 className=" text-6xl font-cerebri font-black py-8 self-start ">
          Blogs and NewsLetters
        </h1>
        
      </div>
      <nav className=" flex justify-between gap-10 mx-5 text-gray-800 items-center focus:ring font-semibold font-cerebri text-xl w-9/12 py-6">
        <button
          className=" focus:underline focus:text-regal-sky decoration-regal-sky underline-offset-4 decoration-2 hover:text-regal-sky  transition duration-100 ease-in "
          to={"/"}
        >
          Highest Rated
        </button>
        <button
          className=" focus:underline focus:text-regal-sky decoration-regal-sky underline-offset-4 decoration-2 hover:text-regal-sky  transition duration-100 ease-in "
          to={"/about"}
        >
          Most Popular
        </button>
        <button
          className=" focus:underline focus:text-regal-sky decoration-regal-sky underline-offset-4 decoration-2 hover:text-regal-sky  transition duration-100 ease-in "
          to={"/properties"}
        >
          Oldest
        </button>
        <button
          className=" focus:underline focus:text-regal-sky decoration-regal-sky underline-offset-4 decoration-2 hover:text-regal-sky  transition duration-100 ease-in "
          to={"/blog"}
        >
          Latest
        </button>
        <button
          className=" focus:underline focus:text-regal-sky decoration-regal-sky underline-offset-4 decoration-2 hover:text-regal-sky  transition duration-100 ease-in "
          to={"/contact"}
        >
          Favourite
        </button>
        <button
          className=" focus:underline focus:text-regal-sky decoration-regal-sky underline-offset-4 decoration-2 hover:text-regal-sky  transition duration-100 ease-in "
          to={"/contact"}
        >
          This Month
        </button>
      </nav>
      <div className=" grid grid-cols-3 w-11/12 justify-between gap-x-24">
        
        <div className="flex flex-col  gap-3 ">
          <hr className="  h-0.5  my-4 bg-gray-300 border-0"></hr>
          <div className="flex justify-between ">
            
            <button className=" bg-regal-sky rounded-full font-bold  px-3  text-white">
              ARCHITECTURE
            </button>
          </div>
          <p className=" font-cerebri font-bold text-gray-700">
              JUNE 16, 2023 //FOUNDER
            </p>
          
            <div className=""><img className="w-full" src={House1}></img></div>
          
          <div className="flex justify-between items-center">
            <p className="font-cerebri font-bold text-gray-600 text-sm">
              READ BLOG
            </p>
            <AiOutlineHeart />
          </div>
          <hr className="  h-0.5 w-full my-4 bg-gray-300 border-0"></hr>
        </div> 

        <div className="flex flex-col  gap-3 ">
          <hr className="  h-0.5  my-4 bg-gray-300 border-0"></hr>
          <div className="flex justify-between ">
            <p className=" font-cerebri font-bold text-gray-700">
             
              Rs 42,400,500
            </p>
            <button className=" bg-regal-sky rounded-full  px-3  text-white">
              FOR SALE
            </button>
          </div>
          <p className="font-cerebri font-bold text-gray-600 text-sm">
            {" "}
            4 Bed ,1 Hall 1931 Sqft. Near Airport{" "}
          </p>
          
            <div className=""><img className="w-full" src={House1}></img></div>
          
          <div className="flex justify-between items-center">
            <p className="font-cerebri font-bold text-gray-600 text-sm">
              Flat 3A, Lotus Appartments,
              <br />
              Hilside Colony, Chennai
            </p>
            <AiOutlineHeart />
          </div>
          <hr className="  h-0.5 w-full my-4 bg-gray-300 border-0"></hr>
        </div> 
        <div className="flex flex-col  gap-3 ">
          <hr className="  h-0.5  my-4 bg-gray-300 border-0"></hr>
          <div className="flex justify-between ">
            <p className=" font-cerebri font-bold text-gray-700">
             
              Rs 42,400,500
            </p>
            <button className=" bg-regal-sky rounded-full  px-3  text-white">
              FOR SALE
            </button>
          </div>
          <p className="font-cerebri font-bold text-gray-600 text-sm">
            {" "}
            4 Bed ,1 Hall 1931 Sqft. Near Airport{" "}
          </p>
          
            <div className=""><img className="w-full" src={House1}></img></div>
          
          <div className="flex justify-between items-center">
            <p className="font-cerebri font-bold text-gray-600 text-sm">
              Flat 3A, Lotus Appartments,
              <br />
              Hilside Colony, Chennai
            </p>
            <AiOutlineHeart />
          </div>
          <hr className="  h-0.5 w-full my-4 bg-gray-300 border-0"></hr>
        </div> 
        <div className="flex flex-col  gap-3 ">
          <hr className="  h-0.5  my-4 bg-gray-300 border-0"></hr>
          <div className="flex justify-between ">
            <p className=" font-cerebri font-bold text-gray-700">
             
              Rs 42,400,500
            </p>
            <button className=" bg-regal-sky rounded-full  px-3  text-white">
              FOR SALE
            </button>
          </div>
          <p className="font-cerebri font-bold text-gray-600 text-sm">
            {" "}
            4 Bed ,1 Hall 1931 Sqft. Near Airport{" "}
          </p>
          
            <div className=""><img className="w-full" src={House1}></img></div>
          
          <div className="flex justify-between items-center">
            <p className="font-cerebri font-bold text-gray-600 text-sm">
              Flat 3A, Lotus Appartments,
              <br />
              Hilside Colony, Chennai
            </p>
            <AiOutlineHeart />
          </div>
          <hr className="  h-0.5 w-full my-4 bg-gray-300 border-0"></hr>
        </div> 
        <div className="flex flex-col  gap-3 ">
          <hr className="  h-0.5  my-4 bg-gray-300 border-0"></hr>
          <div className="flex justify-between ">
            <p className=" font-cerebri font-bold text-gray-700">
             
              Rs 42,400,500
            </p>
            <button className=" bg-regal-sky rounded-full  px-3  text-white">
              FOR SALE
            </button>
          </div>
          <p className="font-cerebri font-bold text-gray-600 text-sm">
            {" "}
            4 Bed ,1 Hall 1931 Sqft. Near Airport{" "}
          </p>
          
            <div className=""><img className="w-full" src={House1}></img></div>
          
          <div className="flex justify-between items-center">
            <p className="font-cerebri font-bold text-gray-600 text-sm">
              Flat 3A, Lotus Appartments,
              <br />
              Hilside Colony, Chennai
            </p>
            <AiOutlineHeart />
          </div>
          <hr className="  h-0.5 w-full my-4 bg-gray-300 border-0"></hr>
        </div> 
        <div className="flex flex-col  gap-3 ">
          <hr className="  h-0.5  my-4 bg-gray-300 border-0"></hr>
          <div className="flex justify-between ">
            <p className=" font-cerebri font-bold text-gray-700">
             
              Rs 42,400,500
            </p>
            <button className=" bg-regal-sky rounded-full  px-3  text-white">
              FOR SALE
            </button>
          </div>
          <p className="font-cerebri font-bold text-gray-600 text-sm">
            {" "}
            4 Bed ,1 Hall 1931 Sqft. Near Airport{" "}
          </p>
          
            <div className=""><img className="w-full" src={House1}></img></div>
          
          <div className="flex justify-between items-center">
            <p className="font-cerebri font-bold text-gray-600 text-sm">
              Flat 3A, Lotus Appartments,
              <br />
              Hilside Colony, Chennai
            </p>
            <AiOutlineHeart />
          </div>
          <hr className="  h-0.5 w-full my-4 bg-gray-300 border-0"></hr>
        </div> 
        <div className="flex flex-col  gap-3 ">
          <hr className="  h-0.5  my-4 bg-gray-300 border-0"></hr>
          <div className="flex justify-between ">
            <p className=" font-cerebri font-bold text-gray-700">
             
              Rs 42,400,500
            </p>
            <button className=" bg-regal-sky rounded-full  px-3  text-white">
              FOR SALE
            </button>
          </div>
          <p className="font-cerebri font-bold text-gray-600 text-sm">
            {" "}
            4 Bed ,1 Hall 1931 Sqft. Near Airport{" "}
          </p>
          
            <div className=""><img className="w-full" src={House1}></img></div>
          
          <div className="flex justify-between items-center">
            <p className="font-cerebri font-bold text-gray-600 text-sm">
              Flat 3A, Lotus Appartments,
              <br />
              Hilside Colony, Chennai
            </p>
            <AiOutlineHeart />
          </div>
          <hr className="  h-0.5 w-full my-4 bg-gray-300 border-0"></hr>
        </div> 
        <div className="flex flex-col  gap-3 ">
          <hr className="  h-0.5  my-4 bg-gray-300 border-0"></hr>
          <div className="flex justify-between ">
            <p className=" font-cerebri font-bold text-gray-700">
             
              Rs 42,400,500
            </p>
            <button className=" bg-regal-sky rounded-full  px-3  text-white">
              FOR SALE
            </button>
          </div>
          <p className="font-cerebri font-bold text-gray-600 text-sm">
            {" "}
            4 Bed ,1 Hall 1931 Sqft. Near Airport{" "}
          </p>
          
            <div className=""><img className="w-full" src={House1}></img></div>
          
          <div className="flex justify-between items-center">
            <p className="font-cerebri font-bold text-gray-600 text-sm">
              Flat 3A, Lotus Appartments,
              <br />
              Hilside Colony, Chennai
            </p>
            <AiOutlineHeart />
          </div>
          <hr className="  h-0.5 w-full my-4 bg-gray-300 border-0"></hr>
        </div> 
        <div className="flex flex-col  gap-3 ">
          <hr className="  h-0.5  my-4 bg-gray-300 border-0"></hr>
          <div className="flex justify-between ">
            <p className=" font-cerebri font-bold text-gray-700">
             
              Rs 42,400,500
            </p>
            <button className=" bg-regal-sky rounded-full  px-3  text-white">
              FOR SALE
            </button>
          </div>
          <p className="font-cerebri font-bold text-gray-600 text-sm">
            {" "}
            4 Bed ,1 Hall 1931 Sqft. Near Airport{" "}
          </p>
          
            <div className=""><img className="w-full" src={House1}></img></div>
          
          <div className="flex justify-between items-center">
            <p className="font-cerebri font-bold text-gray-600 text-sm">
              Flat 3A, Lotus Appartments,
              <br />
              Hilside Colony, Chennai
            </p>
            <AiOutlineHeart />
          </div>
          <hr className="  h-0.5 w-full my-4 bg-gray-300 border-0"></hr>
        </div> 
        </div>

        <button className=" bg-regal-sky py-2 px-4  rounded-full font-semibold text-white flex justify-between items-center gap-3">See More <LuArrowUpRight/></button>

        
      
    </div>
  );
};

export default Properties;
