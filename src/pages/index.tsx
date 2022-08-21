import * as React from "react";

import type { ProjectData } from "../components/projects";

import { graphql, useStaticQuery } from "gatsby"
import { getImage } from 'gatsby-plugin-image'


import Navbar from "../components/navbar";
import EarthModel from "../components/earth/EarthModel";
import TagLine from "../components/tagline";
//import Terminal from "../components/terminal/Terminal";
import About from "../components/about";
import Projects from "../components/projects";
import Footer from "../components/footer";

import "../styles/pageStyle.css";

type FrontMatter = {
  slug: string,
  title: string,
  desc: string,
  hero_image: any,
  hero_image_alt: string
}

type MarkdownNodeData = {
  id: string,
  frontmatter: FrontMatter
}

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
  
  return (
    <>
      <Navbar />
      <section className="home">
        <div className="earth-container">
          <TagLine />
          <EarthModel styleName="earth" height={1200} width={1200} />
        </div>
      </section>
      <About />
      <Projects projects={convertToProjectData(allMarkdownRemark.nodes)}/>
      <Footer />
    </>
  );
}

function convertToProjectData(data: MarkdownNodeData[]): ProjectData[] {
  return data.map((node) => {
    const frontmatter = node.frontmatter;
    return {
      key: node.id,
      title: frontmatter.title,
      description: frontmatter.desc,
      slug: frontmatter.slug,
      image: getImage(frontmatter.hero_image),
      image_alt: frontmatter.hero_image_alt
    }
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
