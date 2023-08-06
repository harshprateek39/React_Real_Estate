import React, { useState } from "react";

import { BiSolidTime } from "react-icons/bi";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { FaPhone } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import Av1 from "../assets/av1.png";
import Av2 from "../assets/av2.png";
import Av3 from "../assets/av3.png";
import Av4 from "../assets/av4.png";
const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [description, setDescription] = useState("");

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log("Form submitted!");
  };
  return (
    <div className="flex flex-col py-14 px-10 gap-4">
      <h1 className=" text-5xl font-cerebri  font-extrabold ">
        Reach Out To Us
      </h1>
      <div className=" grid grid-cols-2 gap-24 justify-between w-full ">
        {/* form */}

        <form className="flex flex-col gap-8 " onSubmit={handleSubmit}>
          <div className="flex justify-between gap-2-">
            <div className="flex flex-col ">
              <label
                htmlFor="fullName"
                className="  font-bold font-cerebri text-sm "
              >
                Full Name:
              </label>
              <input
                className=" bg-gray-200 rounded-md h-10 px-2 w-72"
                type="text"
                id="fullName"
                value={fullName}
                onChange={handleFullNameChange}
                placeholder="Enter your full name"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="phoneNumber"
                className="  font-bold font-cerebri text-sm "
              >
                Phone Number:
              </label>
              <input
                className=" bg-gray-200 rounded-md h-10 px-2 w-72"
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="  font-bold font-cerebri text-sm "
            >
              Email:
            </label>
            <input
              className=" bg-gray-200 rounded-md h-10 px-3"
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your email address"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="dropdown"
              className="  font-bold font-cerebri text-sm "
            >
              What is your enquiry about?
            </label>
            <select
              id="dropdown"
              className="bg-gray-200 rounded-md h-10 px-3"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value="">Select one</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="description"
              className="  font-bold font-cerebri text-sm "
            >
              Description:
            </label>
            <textarea
              className=" bg-gray-200 rounded-md h-48 px-3 py-3"
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className=" bg-regal-sky text-white rounded-2xl w-3/12 self-center h-10 px-3"
          >
            Send Message
          </button>
        </form>

        {/* details */}

        <div className="flex flex-col gap-8 items-start">
          <h1 className=" font-cerebri text-regal-sky font-bold text-4xl pr-12">
            Get in touch to schedule a visit to your new house.
          </h1>
          <h1 className=" text-sm font-cerebri font-semibold text-gray-600 pr-12">
            {" "}
            Kindly fill this form with your details about your inquiries and we
            would respond your inquiry shortly.
          </h1>
          <hr className=" w-full h-0.5  my-4 bg-gray-300 border-0"></hr>

          <div className="flex flex-col gap-6">
            <div className="flex gap-4 ">
              <PiPaperPlaneTiltFill className=" text-regal-sky text-4xl " />{" "}
              <div className="flex flex-col">
                <h1 className=" font-cerebri font-semibold">Send an email.</h1>
                <h1 className=" text-regal-sky font-bold text-sm font-cerebri">
                  invest@gharperfect.com
                </h1>
              </div>
            </div>
            <div className="flex gap-4 ">
              {" "}
              <FaPhone className=" text-regal-sky text-4xl " />{" "}
              <div className="flex flex-col">
                <h1 className=" font-cerebri font-semibold">Give us a call.</h1>
                <h1 className=" text-regal-sky font-bold text-sm font-cerebri">
                  +91 93834 43322
                </h1>
              </div>
            </div>
            <div className="flex gap-4 ">
              {" "}
              <MdLocationPin className=" text-regal-sky text-4xl " />{" "}
              <div className="flex flex-col">
                <h1 className=" font-cerebri font-semibold">Office address.</h1>
                <h1 className=" text-regal-sky font-bold text-sm font-cerebri">
                  Dehradun, Utrakhand
                </h1>
              </div>
            </div>
            <div className="flex gap-4 ">
              {" "}
              <BiSolidTime className=" text-regal-sky text-4xl " />{" "}
              <div className="flex flex-col">
                <h1 className=" font-cerebri font-semibold">Working hours.</h1>
                <h1 className=" text-regal-sky font-bold text-sm font-cerebri">
                  Mon-Fri: 10am-5pm
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className=" self-center font-cerebri text-5xl  font-bold py-10 text-gray-800">
        The Boards
      </h1>
      <div className=" grid grid-cols-4 gap-12 py-7">
        <div className=" flex flex-col shadow-lg drop-shadow-xl items-center gap-1 py-4 ">
          <img src={Av1} className="   rounded-full  "></img>
          <h2 className=" font-cerebri font-extrabold text-gray-700 text-xl ">
            Cathryn Murphy
          </h2>
          <p className=" text-regal-sky">Co Founder</p>
          <div className=" flex justify-between gap-4  text-2xl">
            <FiLinkedin />
            <FiTwitter />
          </div>
        </div>
        <div className=" flex flex-col shadow-lg drop-shadow-xl items-center gap-1 py-4 ">
          <img src={Av2} className="   rounded-full  "></img>
          <h2 className=" font-cerebri font-extrabold text-gray-700 text-xl ">
            Ramsey Holland
          </h2>
          <p className=" text-regal-sky">Founder</p>
          <div className=" flex justify-between gap-4  text-2xl">
            <FiLinkedin />
            <FiTwitter />
          </div>
        </div>
        <div className=" flex flex-col shadow-lg drop-shadow-xl items-center gap-1 py-4 ">
          <img src={Av3} className="   rounded-full  "></img>
          <h2 className=" font-cerebri font-extrabold text-gray-700 text-xl ">
            Louise Murphy
          </h2>
          <p className=" text-regal-sky">Co Founder</p>
          <div className=" flex justify-between gap-4  text-2xl">
            <FiLinkedin />
            <FiTwitter />
          </div>
        </div>
        <div className=" flex flex-col shadow-lg drop-shadow-xl items-center gap-1 py-4 ">
          <img src={Av4} className="   rounded-full  "></img>
          <h2 className=" font-cerebri font-extrabold text-gray-700 text-xl ">
            Robert dwane
          </h2>
          <p className=" text-regal-sky">Founder</p>
          <div className=" flex justify-between gap-4  text-2xl">
            <FiLinkedin />
            <FiTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
