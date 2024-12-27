import React from "react";

const Home = () => {
  return (
    <div
      id="home"
      className="w-full h-auto pb-8 sm:h-screen sm:pb-0 bg-gradient-to-r from-violet-300 to-fuchsia-400"
    >
      <div className="flex flex-col items-center justify-center h-full mx-auto px-36 md:flex-row">
        <div className="flex flex-col justify-center h-full pt-20 sm:pt-0">
       <p>SOFTWARE DEVELOPMENT & CONSULTANCY</p>
          <h2 className="mt-10 text-4xl font-bold text-black sm:text-7xl sm:mt-0">
          BUSINESS INNOVATION THREOUGH TECHNOLOGY
          </h2>
          <p className="py-4 text-gray-900 max-w-prose">
          Leading Business Evolution with Tailored and Innovative Software Solutions for Sustainable Growth
          </p>
          <div className="flex space-x-4 md:flex-row">
          <div className="flex items-center justify-between px-4 mb-4 sm:px-0 sm:mb-0 sm:flex sm:justify-start sm:gap-16">
            <div>
            <a href="/resume.pdf" download={true} className="flex items-center px-8 py-2 my-2 text-white duration-300 rounded-md shadow-lg cursor-pointer shadow-black font-poppins w-fit bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105">Let's Talk </a></div>
          </div>
          <div className="flex items-center justify-between px-4 mb-4 sm:px-0 sm:mb-0 sm:flex sm:justify-start sm:gap-16">
            <div>
            <a href="/resume.pdf" download={true} className="flex items-center px-8 py-2 my-2 text-white duration-300 rounded-md shadow-lg cursor-pointer shadow-black font-poppins w-fit bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105">Read More </a></div>
          </div>
          </div>
        </div>

        <div className="items-center hidden w-[50rem] md:flex">
       
          <img
            src= "https://zidio.in/assets/images/home-2/hero-thumb.png"
            alt="my profile"
            className="h-full mx-auto md:w-full hover:animate-pulse"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
