import React from "react";

function About() {
  return (
    <div>
      <div
        id="about"
        className="w-full h-auto px-32 pb-8 bg-blue-200 sm:h-screen sm:pb-0 "
      >
        <div className="flex flex-col items-center justify-center h-full px-2 mx-auto gap-14 md:flex-row">
          <div className="flex items-center md:w-[80rem]">
            <img
              src="https://zidio.in/assets/images/home-2/about-thumb.png"
              alt="my profile"
              className="w-2/3 mx-auto h-50 md:w-full hover:animate-pulse"
            />
          </div>
          <div className="flex flex-col justify-center h-full pt-20 sm:pt-0">
            <p>Software Development & Services</p>
            <h2 className="mt-10 text-xl font-bold text-black sm:text-7xl sm:mt-0">
              Your Reliable Partner for IT Services Dedicated to Your Success
            </h2>
            <p className="py-4 text-gray-900 max-w-prose">
              At Zidio, we're your trusted IT services partner, ensuring your
              success with reliable solutions tailored to your business needs.
              Count on us for robust software development, comprehensive IT
              support, and cutting-edge technology solutions that empower your
              business to thrive.
            </p>
            <div className="flex items-center justify-between px-4 mb-4 sm:px-0 sm:mb-0 sm:flex sm:justify-start sm:gap-16"></div>
            <div className="flex items-center justify-between px-4 mb-4 sm:px-0 sm:mb-0 sm:flex sm:justify-start sm:gap-16">
              <div>
                <a
                  href="/resume.pdf"
                  download={true}
                  className="flex items-center px-8 py-2 my-2 text-white duration-300 rounded-md shadow-lg cursor-pointer shadow-black font-poppins w-fit bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-105"
                >
                  ABOUT MORE{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
