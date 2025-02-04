import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <section>
      <Header/>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt=""
                src="https://img.freepik.com/free-photo/high-angle-clothes-bed-fast-fashion-concept_23-2149726122.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h1 className="text-2xl font-bold sm:text-3xl">
                Most Valuable Fashion Brands
              </h1>

              <h2 className="mt-4 text-gray-600">
                The FashionUnited Index of Most Recognized Fashion Brands
                gathers the largest fashion brands in the world by brand value.
                FashionUnited created an unique formula and benchmark for
                fashion brands to calculate current brand values of publicly and
                privately held fashion brands.
              </h2>

              <a
                href="https://www.linkedin.com/in/umesh-choudhary-67980a242/"
                className="mt-8 inline-block rounded border bg-gray-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-indigo-500"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default About;
