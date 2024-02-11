"use client";
import React from "react";
import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementList = [
  { metric: "Projects", value: "4", postfix: " " },
  { prefix: "", metric: "Users", value: "1" },
  { metric: "Certifications", value: "0" },
  { metric: "Years Experience", value: "2" },
];

export default function AchievementSection({}) {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:px-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-17 flex flex-row items-center justify-around">
        {achievementList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col item-center justify-center"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row mx-auto">
                {achievement.prefix}
                @ts-ignore
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    //@ts-expect-error
                    return {
                      mass: 1,
                      friciton: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
