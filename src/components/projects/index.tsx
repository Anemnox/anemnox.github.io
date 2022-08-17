import React, { useState } from "react";

import { GatsbyImage } from 'gatsby-plugin-image'

import "./style.css";

type ProjectProps = {
  projects: ProjectData[]
}

export type ProjectData = {
  key: string,
  title: string,
  description: string,
  slug: string,
  image: any,
  image_alt: string
}

export const Projects = (props: ProjectProps): JSX.Element => {
  const projectElement = (data: ProjectData) => {
    return (
      <a className="project-card" href={"/projects" + data.slug} key={data.key}>
        <div className="project-card-image">
          <GatsbyImage image={data.image} alt={data.image_alt} objectFit="cover"/>
        </div>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </a>
    );
  }

  return (
    <section className="projects">
      <h2>Projects</h2>
      <hr />
      <div className="project-list">
        {props.projects.map((projectDat) => (
          projectElement(projectDat)
        ))}
      </div>
    </section>
  );
}

export default Projects;
