import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

import Footer from '../../components/footer';
import { StickyNav } from '../../components/navbar';
import './style.css';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const image = getImage(frontmatter.hero_image);

  return (
    <>
      <StickyNav />
      <section className="project-post-container">
        <div className="project-post">
          <h1>{frontmatter.title}</h1>
          <div
            className="project-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <div className="project-post-image-container">
          <div className="project-post-image">
            <GatsbyImage image={image} alt={frontmatter.hero_image_alt} />
          </div>
          <p className="project-post-image-source ">
            Photo Credit:{' '}
            <a href={frontmatter.hero_image_credit_link}>
              {frontmatter.hero_image_credit_text}
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        hero_image_credit_link
        hero_image_credit_text
      }
    }
  }
`;
