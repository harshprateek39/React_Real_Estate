import React from "react";
import Cover from "../assets/Cover.png";
import Cover2 from "../assets/Cover2.png";
import Av1 from "../assets/av1.png";
import Av2 from "../assets/av2.png";
import Av3 from "../assets/av3.png";
import Av4 from "../assets/av4.png";
const About = () => {
  return (
    <div className=" flex flex-col gap-4 py-10 px-14 items-center">
      {/* about */}

      <div className="flex flex-col gap-4 ">
        <h1 className=" text-6xl font-cerebri  font-black py-10 ">About Us</h1>
        <div className=" grid grid-cols-2 justify-between  gap-24 items-stretch">
          <p className=" font-bold font-cerebri text-justify">
            your ultimate destination for all your real estate needs. We are a
            comprehensive online platform dedicated to connecting buyers,
            sellers, and renters with their ideal properties. With our
            user-friendly interface and powerful search tools, finding your
            dream home or investment property has never been easier. Explore our
            vast database of listings, featuring residential, commercial, and
            industrial properties in . Whether you're a first-time homebuyer, a
            seasoned investor, or a tenant in search of a perfect rental, we've
            got you covered. Our team of experienced real estate professionals
            is committed to providing you with accurate, up-to-date information
            and personalized assistance throughout your real estate journey.
            Join our thriving community today and unlock a world of
            opportunities in the real estate market." your ultimate destination
            for all your real estate needs. We are a comprehensive online
            platform dedicated to connecting buyers, sellers, and renters with
            their ideal properties. With our user-friendly interface and
            powerful search tools, finding your dream home or investment
            property has never been easier. Explore our vast database of
            listings, featuring residential, commercial, and industrial
            properties in . Whether you're a first-time homebuyer, a seasoned
            investor, or a tenant in search of a perfect rental, we've got you
            covered. Our team of experienced real estate professionals is
            committed to providing you with accurate, up-to-date information and
            personalized assistance throughout your real estate journey. Join
            our thriving community today and unlock a world of opportunities in
            the real estate market.
          </p>
          <img src={Cover} className="   rounded-full mx-auto  "></img>
        </div>
      </div>

      {/* features */}
      <div className=" flex flex-col  items-center">
        <h1 className=" text-6xl font-cerebri font-black  py-10 ">
          Our Features
        </h1>
        <div className=" grid grid-cols-4  gap-20">
          <div className="  col-span-2 rounded-br-xxl   rounded-lg  shadow-lg drop-shadow-lg flex flex-col gap-3 px-6 py-10">
            <h1 className=" text-slate-700 font-cerebri font-extrabold text-xl">
              Prime Locations
            </h1>
            <p className="text-slate-500 font-cerebri text-md font-bold">
              Industrial properties. Whether you're a first-time homebuyer, a
              seasoned investor, or a tenant in search of a perfect rental.
            </p>
          </div>
          <div className="  col-span-2 rounded-bl-xxl   rounded-lg  shadow-lg drop-shadow-lg flex flex-col gap-3 px-6 py-10">
            <h1 className=" text-slate-700 font-cerebri font-extrabold text-xl">
              Prime Locations
            </h1>
            <p className="text-slate-500 font-cerebri text-md font-bold">
              Industrial properties. Whether you're a first-time homebuyer, a
              seasoned investor, or a tenant in search of a perfect rental.
            </p>
          </div>
          <div className="   rounded-r-md   rounded-lg  shadow-lg drop-shadow-lg flex flex-col gap-3 px-6 py-10">
            <h1 className=" text-slate-700 font-cerebri font-extrabold text-xl">
              Prime Locations
            </h1>
            <p className="text-slate-500 font-cerebri text-md font-bold">
              Industrial properties. Whether you're a first-time homebuyer, a
              seasoned investor, or a tenant in search of a perfect rental.
            </p>
          </div>
          <div className=" relative col-span-2 ">
            <img
              className=" rounded-full mx-auto "
              src={Cover2}
            ></img>
          </div>
          <div className="     rounded-lg  shadow-lg drop-shadow-lg flex flex-col gap-3 px-6 py-10">
            <h1 className=" text-slate-700 font-cerebri font-extrabold text-xl">
              Prime Locations
            </h1>
            <p className="text-slate-500 font-cerebri text-md font-bold ">
              Industrial properties. Whether you're a first-time homebuyer, a
              seasoned investor, or a tenant in search of a perfect rental.
            </p>
          </div>
          <div className="  col-span-2 rounded-tr-xxl   rounded-lg  shadow-lg drop-shadow-lg flex flex-col gap-3 px-6 py-10">
            <h1 className=" text-slate-700 font-cerebri font-extrabold text-xl">
              Prime Locations
            </h1>
            <p className="text-slate-500 font-cerebri text-md font-bold">
              Industrial properties. Whether you're a first-time homebuyer, a
              seasoned investor, or a tenant in search of a perfect rental.
            </p>
          </div>
          <div className="  col-span-2 rounded-tl-xxl   rounded-lg  shadow-lg drop-shadow-lg flex flex-col gap-3 px-6 py-10">
            <h1 className=" text-slate-700 font-cerebri font-extrabold text-xl">
              Prime Locations
            </h1>
            <p className="text-slate-500 font-cerebri text-md font-bold">
              Industrial properties. Whether you're a first-time homebuyer, a
              seasoned investor, or a tenant in search of a perfect rental.
            </p>
          </div>
        </div>
      </div>

      <h1 className=" self-center font-cerebri text-5xl  font-bold py-10 text-gray-800">
        Meet Our Team.
      </h1>
      <p className="text-slate-500 font-cerebri text-md font-bold">
        Industrial properties. Whether you're a first-time homebuyer, a seasoned
        investor, or a tenant in search of a perfect rental.
      </p>
      <div className=" grid grid-cols-4 gap-12 py-7 w-full">
        <div className=" flex flex-col shadow-lg drop-shadow-xl items-center gap-1 py-4 ">
          <img src={Av1} className="   rounded-full  "></img>
          <h2 className=" font-cerebri font-extrabold text-gray-700 text-xl ">
            Cathryn Murphy
          </h2>
          <p className=" text-regal-sky">Co Founder</p>
          <div className=" flex justify-between gap-4  text-2xl"></div>
        </div>
        <div className=" flex flex-col shadow-lg drop-shadow-xl items-center gap-1 py-4 ">
          <img src={Av2} className="   rounded-full  "></img>
          <h2 className=" font-cerebri font-extrabold text-gray-700 text-xl ">
            Ramsey Holland
          </h2>
          <p className=" text-regal-sky">Founder</p>
          <div className=" flex justify-between gap-4  text-2xl"></div>
        </div>
        <div className=" flex flex-col shadow-lg drop-shadow-xl items-center gap-1 py-4 ">
          <img src={Av3} className="   rounded-full  "></img>
          <h2 className=" font-cerebri font-extrabold text-gray-700 text-xl ">
            Louise Murphy
          </h2>
          <p className=" text-regal-sky">Co Founder</p>
          <div className=" flex justify-between gap-4  text-2xl"></div>
        </div>
        <div className=" flex flex-col shadow-lg drop-shadow-xl items-center gap-1 py-4 ">
          <img src={Av4} className="   rounded-full  "></img>
          <h2 className=" font-cerebri font-extrabold text-gray-700 text-xl ">
            Robert dwane
          </h2>
          <p className=" text-regal-sky">Founder</p>
          <div className=" flex justify-between gap-4  text-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
