import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import * as React from 'react';

//import Terminal from "../components/terminal/Terminal";
import About from '../components/about';
import ArrowButton from '../components/arrow';
//import EarthModel from '../components/earth/EarthModel';
import Footer from '../components/footer';
import { MainNav, StickyNav } from '../components/navbar';
import type { ProjectData } from '../components/projects';
import Projects from '../components/projects';
import SpaceWindow from '../components/spaceWindow';
import TagLine from '../components/tagline';

import '../styles/global.css';
import '../styles/pageStyle.css';

type FrontMatter = {
  slug: string;
  title: string;
  desc: string;
  hero_image: any;
  hero_image_alt: string;
};

type MarkdownNodeData = {
  id: string;
  frontmatter: FrontMatter;
};

// markup
const IndexPage = (): JSX.Element => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            slug
            title
            desc
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
            hero_image_alt
          }
        }
      }
    }
  `);

  let aboutRef = React.createRef<HTMLDivElement>();

  return (
    <>
      <section id="home">
        <SpaceWindow />
        <ArrowButton onClick={() => aboutRef.current?.scrollIntoView()}/>
      </section>
      <StickyNav />
      <About innerRef={aboutRef} />
      <Projects projects={convertToProjectData(allMarkdownRemark.nodes)} />
      <Footer />
    </>
  );
};

function convertToProjectData(data: MarkdownNodeData[]): ProjectData[] {
  return data.map((node) => {
    const frontmatter = node.frontmatter;
    return {
      key: node.id,
      title: frontmatter.title,
      description: frontmatter.desc,
      slug: frontmatter.slug,
      image: getImage(frontmatter.hero_image),
      image_alt: frontmatter.hero_image_alt,
    };
  });
}

export default IndexPage;

export function Head(): JSX.Element {
  return (  
    <>
      <title>Andrew Jang</title>
      <meta name="description" content="Andrew Jang's personal website!" />
    </>
  );
}
