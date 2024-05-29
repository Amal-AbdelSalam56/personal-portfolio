import React from "react";
import { skills } from "./../data/skills";

function Skills() {
  return (
    <>

      <div className="mb-10">
        <div className="mb-10 flex justify-between border-b border-primary-light
         dark:border-secondary-dark pb-3 gap-3 ">
        </div>
      </div>

      <div className="mt-10 flex flex-col md:flex-row justify-between relative items-center">

        <h2 className="relative text-3xl w-full text-center md:text-left font-bold md:max-w-lg mb-10 md:mr-10 md:mb-0 md:w-max mr-0 text-ternary-dark dark:text-ternary-light">
          I got the experience.
          <br />
          Here is my toolbelt for success.
          <img
            className="sqD bottom-[-80px] left-[-50px] lg:bottom-[-50px] lg:left-[-35px] z-[-10]"
            src="/static/doodles/skills/laptop.svg" alt=""
          />
          <img
            className="sqD hidden md:block top-[140px] right-0 lg:top-[105px]"
            src="/static/doodles/skills/coding.svg" alt=""
          />
          <img
            className="sqD hidden md:block top-[200px] right-[50px] lg:top-[170px] lg:right-[50px]"
            src="/static/doodles/skills/youtube.svg" alt=""
          />
          <img
            className="sqD top-[-15px] right-[-15px]"
            src="/static/doodles/skills/fillStar.svg" alt=""
          />
        </h2>
        <div className="grid skills relative max-w-lg w-full mx-auto md:mx-none gap-x-8 gap-y-12 sm:gap-8 md:gap-12 grid-cols-3 sm:grid-cols-6 items-center place-content-center text-ternary-dark dark:text-ternary-light">
          {skills.map((item, index) => {
            return (
              <div
                title={item.title}
                key={index}
                className="w-10  mx-auto flex items-center flex-col justify-center"
              >
                <img src={item.icon} style={{height:"2rem"}} alt="" />
                <p className=" text-xs text-fun-gray font-bold mt-3 opacity-80">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skills;
