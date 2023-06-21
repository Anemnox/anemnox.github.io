import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';

import useWindowDimensions from '../../tools/useWindowDimensions';

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
        <a 
          className="inline-block no-underline w-[300px] min-w-[300px] h-[400px] bg-white shadow-crd m-[20px] transition-all align-top hover:shadow-hvrcrd"
          href={'/projects' + data.slug}
          key={data.key}
        >
          <div className="flex h-[175px] w-full overflow-hidden">
            <GatsbyImage
              image={data.image}
              alt={data.image_alt}
              objectFit="cover"
            />
          </div>
          <h3
            className="px-[20px] text-2xl"
          >{data.title}</h3>
          <p
            className='px-[20px] text-sm'
          >{data.description}</p>
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
      projectItems.push(<div className="inline-block w-[300px] min-w-[300px] h-[400px] m-[20px] align-top"></div>);
    }

    return (
      <section id="projects"
        className='mx-auto w-4/5 text-center pb-[100px]'
      >
        <h2 className='font-bold text-2xl pb-4'>Projects</h2>
        <hr />
        <div className="block text-center">
          {showAll ? projectItems : projectItems.slice(0, numberToShow)}
        </div>
        <div
          className="cursor-pointer mx-auto inline-block bg-black text-white rounded-xl p-[10px] font-bold transition-all hover:bg-white hover:text-black"
          onClick={(): void => setShowAll(!showAll)}
        >
          {showAll ? 'Hide' : 'See More'}
        </div>
      </section>
    );
  }
  return (<div></div>);
};

export default Projects;
