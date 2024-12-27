import React from "react";
// import { Link } from "react-scroll";

function Navbar() {
  return (
    <div id="navbar">
      <div>
        <header class="text-black body-font bg-gray-200 h-auto">
          <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2838/2838912.png"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10 text-white p-2 rounded-full"
                viewBox="0 0 24 24"
              />
              <span class="ml-3 text-xl">Bengaluru,Karnataka,India</span>
            </a>
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1584/1584892.png"
                className="w-10 h-10 p-2 rounded-full"
              />
              <p>9.00 am - 5.30 pm</p>
              <a href="https://www.facebook.com/people/Zidio-Development/61556709391417/">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1077/1077041.png"
                  className="w-10 h-10 p-2 ml-5 rounded-full hover:text-blue-700"
                />
              </a>
              <a href="https://x.com/zidioDev">
              <img
                src="https://cdn-icons-png.flaticon.com/128/11823/11823292.png"
                className="w-10 h-10 p-2 rounded-full"
              />
              </a>
              <a href="https://www.linkedin.com/company/zidio-development/posts/?feedView=all">
              <img
                src="https://cdn-icons-png.flaticon.com/128/13670/13670384.png"
                className="w-10 h-10 p-2 rounded-full"
              />
              </a>
              <a href="https://www.youtube.com/">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1384/1384086.png"
                className="w-10 h-10 p-2 rounded-full"
              />
              </a>
            </nav>
          </div>
        </header>
      </div>
      <div>
        <header class="text-gray-600 body-font">
          <div class="container mx-auto flex flex-wrap p-6 flex-col md:flex-row items-center justify-between">
            <a href="https://zidio.in/index.html" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <img
                src="https://zidio.in/assets/images/home-1/zidio%20(1).png"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-auto h-10"
              />
            </a>
            <div className="flex items-center">
            <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a href="#home" class="mr-5 hover:text-gray-900">Home</a>
              <a href="#about" class="mr-5 hover:text-gray-900">About</a>
              <a href="#services" class="mr-5 hover:text-gray-900">Services</a>
              <a href="#Contact" class="mr-5 hover:text-gray-900">Contact</a>
            </nav>
            <a href="#Contact" class="inline-flex items-center text-black bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Get A Quote
            </a>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
