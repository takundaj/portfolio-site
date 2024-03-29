"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import AboutMeImage from "/public/images/about-me.png";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Typescript</li>
        <li>React Native</li>
        <li>Nodejs & Express</li>
        <li>Mongo DB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>2.1 - Economics BA Hons</li>
        <li>Nottingham trent University 2017 - 2020</li>
      </ul>
    ),
  },
  {
    title: "Work Experience",
    id: "work-experience",
    content: (
      <ul className="list-disc pl-2">
        <li>2 Years experience as a Mobile App Developer</li>
        <li>6 Months as a freelance Web Developer</li>
      </ul>
    ),
  },
];

type Props = {};

export default function AboutSection({}: Props) {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 items-center gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={AboutMeImage} alt="laptop" width={300} height={300} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base lg:text-lg">
            A React Native Developer with near 2 years of experience, with a
            passion for developing robust and scalable solutions that meet the
            needs of both clients and end-users.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("work-experience")}
              active={tab === "work-experience"}
            >
              {" "}
              Work Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
}
