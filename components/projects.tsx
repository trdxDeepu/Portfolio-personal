"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/hooks/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);

  return (
    <section
      id="projects"
      className="scroll-mt-28 mb-28 cursor-pointer"
      ref={ref}
    >
      <SectionHeading>My Projects </SectionHeading>
      <div className=" grid grid-cols-1 gap-4  md:grid-cols-2 md:gap-5 ">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
