import React from "react";
function Category() {
  return (
    <div id="Category">
      <section class="text-gray-600 body-font -translate-y-44">
        <div class="container px-5 pt-24 mx-auto">
          <div class="flex gap-3">
            <div class="p-2 md:w-1/3 bg-white border-2 border-gray-200 border-opacity-60 rounded-lg">
              <div class="flex flex-col item-center h-64 overflow-hidden">
                <div className="mx-auto mt-8">
                <img
                  class="h-16 w-16 object-cover"
                  src="https://cdn-icons-png.flaticon.com/128/2303/2303952.png"
                  alt="experience"
                />
                </div>
                
                <div class="p-6">
                  <h1 class="title-font text-xl font-bold text-center text-gray-900 mb-3">
                    3 + YEAR EXPERIENCE
                  </h1>
                  <p class="leading-relaxed mb-3">
                  Over 3 years of expertise delivering unparalleled solutions and insights for your success
                  </p>
                </div>
              </div>
            </div>
            <div class="p-2 md:w-1/3 bg-white border-2 border-gray-200 border-opacity-60 rounded-lg">
              <div class=" flex flex-col item-center h-64  overflow-hidden">
                <div className="mx-auto mt-8">
                <img
                  class="h-16 w-16 object-cover"
                  src="https://cdn-icons-png.flaticon.com/128/2352/2352167.png"
                  alt="blog"
                />
                </div>
                <div class="p-6">
                <h1 class="title-font text-xl font-bold text-center text-gray-900 mb-3">
                    DEDICATED MEMBERS
                  </h1>
                  <p class="leading-relaxed mb-3">
                  Passionate team members dedicated to exceeding expectations and achieving mutual success
                  </p>
              </div>
            </div>
            <div class="p-2 md:w-1/3 bg-white border-2 border-gray-200 border-opacity-60 rounded-lg">
              <div class="flex flex-col item-center h-64  overflow-hidden">
              <div className="mx-auto mt-8">
              <img
                  class="h-16 w-16 object-cover"
                  src="https://cdn-icons-png.flaticon.com/128/2951/2951105.png"
                  alt="blog"
                />
              </div>
                
                <div class="p-6">
                <h1 class="title-font text-xl font-bold text-center text-gray-900 mb-3">
                VALUABLE SUPPORTS
                  </h1>
                  <p class="leading-relaxed mb-3">
                  Tailored support and guidance ensuring reliability and innovation every step of the way
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}

export default Category;
