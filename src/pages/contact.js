import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const ContactPage = ({ data }) => {
  const email = "claire";
  const domain = "researchathena.org";

  return (
    <Layout>
      <h1>Contact</h1>
      <p>
        We are currently looking for research collaborators and funders. If you
        have any interest in collaborating or have questions, please email
        Claire <a href={`mailto:${email}@${domain}`}>{`${email}@${domain}`}</a>
      </p>
      <h2>Claire Short - Program Founder</h2>
      <p>
        <a href="https://www.linkedin.com/in/claireshort4">LinkedIn</a>
      </p>
      <p>
        Claire Short is a researcher with a passion for artificial intelligence
        and neuroscience, taking inspiration from biological systems to drive
        hypotheses to research questions in AI alignment. She has taken part in
        multiple research and artist residencies, research in neuroscience
        involving impulsive decision-making, brain simulation software, and EEG
        meditation studies, as well as work in data science, operations at the
        Atlas Fellowship, Neurotech Fellow at Foresight, and participated as a
        research scholar at SERI MATS - an AI alignment research fellowship.
        Beyond research she enjoys the connection between machines and the human
        mind in art, using EEG data and hand drawn diagrams as a tool and medium
        to uncover human emotions in a new light.
      </p>
    </Layout>
  );
};

export default ContactPage;
