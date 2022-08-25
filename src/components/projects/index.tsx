import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';

import useWindowDimensions from '../../tools/useWindowDimensions';
import './style.css';

type ProjectProps = {
  projects: ProjectData[];
};

export type ProjectData = {
  key: string;
  title: string;
  description: string;
  slug: string;
  image: any;
  image_alt: string;
};

const minWidth = 360;

const CARD_WIDTH = 340;

const SECTION_WIDTH = 0.8;

export const Projects = (props: ProjectProps): JSX.Element => {
  const isBrowser = typeof window !== "undefined"
  if (isBrowser) {
    const [showAll, setShowAll]: [boolean, Function] = useState(false);


    const { width: screenWidth } = useWindowDimensions();

    const projectElement = (data: ProjectData) => {
      return (
        <a className="project-card" href={'/projects' + data.slug} key={data.key}>
          <div className="project-card-image">
            <GatsbyImage
              image={data.image}
              alt={data.image_alt}
              objectFit="cover"
            />
          </div>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </a>
      );
    };

    const numberToShow =
      Math.floor((screenWidth * SECTION_WIDTH - minWidth) / CARD_WIDTH) + 1;

    let projectItems = props.projects.map((projectDat) =>
      projectElement(projectDat),
    );

    let extraItems = (projectItems.length - numberToShow) % numberToShow;

    for (let i = 0; i < extraItems; i++) {
      projectItems.push(<div className="invis-card"></div>);
    }

    return (
      <section id="projects">
        <h2>Projects</h2>
        <hr />
        <div className="project-list">
          {showAll ? projectItems : projectItems.slice(0, numberToShow)}
        </div>
        <div className="show-hide" onClick={(): void => setShowAll(!showAll)}>
          {showAll ? 'Hide' : 'See More'}
        </div>
      </section>
    );
  }
  return (<div></div>);
};

export default Projects;
