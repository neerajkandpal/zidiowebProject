import React from "react";

function Footer() {
  return (
    <div id="footer">
      <footer class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a
              href="https://zidio.in/index.html"
              class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            >
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
            <p class="mt-2 text-sm text-gray-500">
              At Zidio Development, we specialize in innovative software
              solutions. Our team is dedicated to delivering high-quality
              projects, fostering professional growth, and driving technological
              advancement. Discover More
            </p>
          </div>
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                class="title-font font-bold font-3xl
               text-gray-900 tracking-widest text-sm mb-3"
              >
                Company
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">About</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Our team</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Contact</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Services</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Our Services
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">IT Solutions</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Cyber Security</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Digital Marketing</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Machine Learning</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Cloud Services</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4 ml-44">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                News Letter
              </h2>
              <nav class="list-none mb-10">
              <p class="mt-2 text-sm mb-2 text-gray-500">
              Subscribe to latest Newsletter
            </p>
            <div class="relative mb-4">
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Subscribe
          </button>
              </nav>
            </div>
          </div>
        </div>
        <div class="bg-gray-100">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">
              © 2024
              <a
                href="https://zidio.in/index.html"
                rel="noopener noreferrer"
                class="text-gray-600 ml-1"
                target="_blank"
              >
                @Zidio Development. Designed by Team ZIDIO.
              </a>
            </p>
            {/* <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a class="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span> */}
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
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
        </div>
      </footer>
    </div>
  );
}

export default Footer;
