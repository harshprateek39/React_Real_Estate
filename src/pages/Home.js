import React from 'react'
import Banner from '../assets/banner.png';
import {RiArrowDropDownLine} from 'react-icons/ri';
import {BiRightArrowAlt} from 'react-icons/bi';

import Img1 from '../assets/Image1.png'
import Img2 from '../assets/Image2.png'
import Img3 from '../assets/Image3.png'
import Img4 from '../assets/Image4.png'
import Img6 from '../assets/Image6.png'
import Img7 from '../assets/Image7.png'
import Img8 from '../assets/Image8.png'

const Home = () => {
  
  return (
    <div className='flex flex-col items-center'>
  {/* banner */}

    <div className=' w-full relative flex flex-col items-center'>
    <img className='  w-full  object-cover object-top filter brightness-75 ' src={Banner}></img>
    <div className=' absolute w-1/3 h-full flex flex-col justify-center top-0 left-0 leading-normal p-9 drop-shadow-lg  '><h1 className=' text-white text-6xl font-cerebri font-bold leading-relaxed drop-shadow-lg '>Help you Find Suitable Home is Our Priority</h1></div>

   {/* search bar */}

    <div className=' w-10/12  h-28 absolute -bottom-14  shadow-lg bg-white rounded-xl flex items-center justify-evenly'>
      <button className='flex justify-between px-4 items-center h-2/5 w-1/6 drop-shadow-md shadow-2xl text-slate-600  outline-slate-300 outline rounded-lg outline-1 ' ><p> Location</p> <RiArrowDropDownLine className=' text-3xl'/> </button>
      <button className='flex justify-between px-4 items-center h-2/5 w-1/6 drop-shadow-md shadow-2xl text-slate-600  outline-slate-300 outline rounded-lg outline-1 ' ><p> Category</p> <RiArrowDropDownLine className=' text-3xl'/> </button>
      <button className='flex justify-between px-4 items-center h-2/5 w-1/6 drop-shadow-md shadow-2xl text-slate-600  outline-slate-300 outline rounded-lg outline-1 ' ><p> Property Type</p> <RiArrowDropDownLine className=' text-3xl'/> </button>
      <button className='flex justify-center px-4 items-center h-2/5 w-2/12 drop-shadow-md shadow-2xl rounded-lg  bg-regal-sky  ' ><p className=' text-white'> Search</p>  </button>
    </div>
    </div>

    {/* featured property */}

    <div className=' min-h-screen bg-slate-50 flex flex-col py-12 w-11/12 items-center'>
       <div className=' py-20  flex flex-col items-center  gap-10 w-9/12 '>
             <h1 className=' font-cerebri text-5xl font-bold '>Featured Properties</h1>
             <p className=' text-center  font-medium text-slate-600 '>A key feature for a hotel website is an intuitive and efficient online booking system, allowing guests to easily check room availability, select their desired dates, choose from different room types, and make reservations directly on the website. 
             By providing a seamless and user-friendly booking experience, hotels can enhance customer satisfaction and streamline the reservation process, ultimately boosting conversions and driving more direct bookings.</p>
        </div>

       <div className=' grid grid-cols-3 gap-12  w-full '>
          <div className=' row-span-2 rounded-md'> <img  className=' w-full h-full rounded-md' src={Img1}></img></div>
          <div className=' rounded-md  relative  ' onMouseEnter={ ()=>{}}><img className=' rounded-md w-full h-full brightness-200' src={Img2}></img>  <div className='absolute w-full h-full flex flex-col justify-center items-center top-0 gap-3 backdrop-brightness-50 text-white  '>
          <h2 className=' font-cerebri font-bold'>New Property</h2>
          <p> Surf throug the wide variety of our Hotels</p>
          <button  className=' bg-regal-sky rounded-full w-8 h-8 font-extrabold ring-4'> <BiRightArrowAlt className=' mx-auto text-white  '/></button>
          </div></div>
          <div className=' rounded-md '><img className='  rounded-md w-full h-full' src={Img3}></img></div>
          <div className=' rounded-md '><img className='  rounded-md w-full h-full' src={Img4}></img></div>
          <div className=' rounded-md '><img className='  rounded-md w-full h-full' src={Img6}></img></div>
       </div> 
      

  {/* recent property */}

       <div className=' py-20  flex flex-col items-center  gap-10 w-9/12 '>
             <h1 className=' font-cerebri text-5xl font-bold '>Recent Properties</h1>
             <p className=' text-center  font-medium text-slate-600 '> hotels can enhance customer satisfaction and streamline the reservation process, ultimately boosting conversions and driving more direct bookings.</p>
        </div>
  
{/* wrapper */}

        <div className=' grid grid-cols-2 gap-12  w-10/12 '>
           <div className=' rounded-md  '><img className='  rounded-md w-full h-full' src={Img7}></img></div>
              <div className=' flex flex-col gap-5 justify-around bg-cyan-50 px-10 py-10 rounded-md '> 
                <h1 className=' text-regal-sky font-bold text-4xl'>3BHK Flat, Mumbai</h1>
                <p className=' font-medium text-slate-600'>Keep in mind that Mumbai's real estate market is known for its high prices, particularly 
                      in popular areas such as Bandra, Juhu, Worli, and South Mumbai. 
                       However, you can also find relatively more affordable options in
                    suburban areas like Andheri, Powai, Thane, Navi Mumbai ...<button className=' text-regal-sky'> Read More</button>
                </p>
                <h1 className=' font-medium text-4xl'>Rs. 20000/Month</h1>
              </div>
              <div className=' flex flex-col gap-5 bg-cyan-50 px-10 py-10 rounded-md justify-around '> 
                <h1 className=' text-regal-sky font-bold text-4xl'>5B2HK Luxary Flat, Delhi</h1>
                <p className=' font-medium text-slate-600'>Consider factors such as proximity to workplaces, educational 
                institutions, healthcare facilities, markets, transportation options, and overall connectivity when choosing a location for
                 your flat in Delhi. Additionally, evaluate the security measures, parking facilities, and any additional charges like
                  maintenance fees associated with the residential complex or building....<button className=' text-regal-sky'> Read More</button>
                </p>
                <h1 className=' font-medium text-4xl'>Rs. 26000/Month</h1>
              </div>
           <div className=' rounded-md '><img className='  rounded-md w-full h-full' src={Img8}></img></div>
          
        </div>
    </div>

  {/* last button */}

    <button className=' bg-regal-sky h-12 w-36 my-10 text-white rounded-xl font-medium'> Read More</button>
    </div>
  )
}

export default Home