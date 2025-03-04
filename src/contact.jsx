import React from "react";

function Contact() {
  return (
    <section id="Contact" class="text-gray-600 body-font relative">
      <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          {/* <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/dir//Zidio+Development+Pvt.+Ltd+QJ8H%2B8GW+Jigani,+Bengaluru,+Karnataka+560105/@12.7658604,77.6288219,19z/data=!4m8!4m7!1m0!1m5!1m1!1s0x84179333b909112d:0x99b7aa8200259bb9!2m2!1d77.6288219!2d12.7658604?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe> */}
          <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div class="lg:w-1/2 px-6">
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p class="mt-1">
                Zidio Development Pvt. Ltd QJ8H+8GW, Jigani, Bengaluru,
                Karnataka 560105
              </p>
            </div>
            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                href="mailto:support@zidio.in"
                class="text-indigo-500 leading-relaxed"
              >
                support@zidio.in
              </a>
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <a href="tel:+918455807965" class="leading-relaxed">
                +91 8455807965
              </a>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 class="text-gray-900 text-3xl mb-1 font-bold title-font">
            Write to Us Anytime
          </h2>
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
