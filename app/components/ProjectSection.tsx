"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTab from "./ProjectTab";
import { motion, useInView } from "framer-motion";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTab: string) => {
    setTab(newTab);
  };

  const filteredProjects = projectData.filter((projectData) => {
    return projectData.tags.includes(tab);
  });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
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
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              preview={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
