import React from "react";
import Nav from "./Nav";

const Hero = () => {
  return (
    <>
      <section className="bg-hero-pattern bg-center bg-cover h-screen relative opacity-80">
        <div className="container m-auto px-4 md:px-0">
          <Nav />
          <div className="absolute top-1/2 md:right-9 md:w-1/4 md:top-2/4 ">
            <h1 className="mb-3 text-white text-1xl">
              Welcome to Mma-store, where style meets convenience. Explore a
              curated selection of fashion, gadgets, and more. Shop smarter
              today!.
            </h1>
            <button className="rounded-md  bg-red-500 py-1 px-4 hover:opacity-70 text-white">
              Shop Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
