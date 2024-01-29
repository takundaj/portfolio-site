"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTab from "./ProjectTab";

type Props = {};

const projectData = [
  {
    id: 1,
    title: "Project 1",
    description:
      "This was the first ever project i build in my development journey.",
    image: "/images/project1.jpg",
    tags: ["All", "Web"],
    gitUrl: "/",
    preview: "/",
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "This was the first ever project i build in my development journey.",
    image: "images/project2.jpeg",
    tags: ["All", "Web"],
    gitUrl: "/",
    preview: "/",
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "This was the first ever project i build in my development journey.",
    image: "/images/project3.jpg",
    tags: ["All", "Mobile"],
    gitUrl: "/",
    preview: "/",
  },
  {
    id: 4,
    title: "Project 4",
    description:
      "This was the first ever project i build in my development journey.",
    image: "/images/project4.jpg",
    tags: ["All", "Web"],
    gitUrl: "/",
    preview: "/",
  },
  {
    id: 5,
    title: "Project 5",
    description:
      "This was the first ever project i build in my development journey.",
    image: "/images/project1.jpg",
    tags: ["All", "Mobile"],
    gitUrl: "/",
    preview: "/",
  },
];

export default function ProjectSection({}: Props) {
  const [tab, setTab] = useState("All");

  const handleTagChange = (newTab: string) => {
    setTab(newTab);
  };

  const filteredProjects = projectData.filter((projectData) => {
    return projectData.tags.includes(tab);
  });

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTab
          name="All"
          onClick={handleTagChange}
          isSelected={tab === "All"}
        />
        <ProjectTab
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tab === "Mobile"}
        />
        <ProjectTab
          name="Web"
          onClick={handleTagChange}
          isSelected={tab === "Web"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            preview={project.gitUrl}
          />
        ))}
      </div>
    </>
  );
}
