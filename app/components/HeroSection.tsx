"use client";
import React from "react";
import Image from "next/image";
import heroImage from "/public/images/3D-coding-icon.png";
import { TypeAnimation } from "react-type-animation";

type Props = {};

const TypingHeroTitle = (props: Props) => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Takunda",
        1000,
        "a Mobile Developer",
        1000,
      ]}
      wrapper="span"
      speed={10}
      repeat={Infinity}
    />
  );
};

const HeroSection = (props: Props) => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r  from-blue-500 to-slate-500">
              Hello, I'm{" "}
            </span>
            <br />
            <TypingHeroTitle />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit modi vero.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-slate-500 to-blue-500 hover:bg-slate-200 text-white">
              Hire me
            </button>
            <button className="p-0.5 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-slate-500 to-blue-500 border-white mt-3 hover:bg-slate-800">
              <span className="bg-[#121212] rounded-full block py-2 px-5 hover:bg-slate-800">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full  w-[2500px] h-[250px] lg:w-[400px] lg:h-[400px] relative ">
            <Image
              src={heroImage}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="3d coding art"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
