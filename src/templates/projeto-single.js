import React from "react"
import Header from "../components/header";
import Container from '../components/container';
import Project from '../components/project';

export default ({ data }) => {
  const project = data.markdownRemark;

  return (
    <Container>
      <Header />
      <Project project={project} />
    </Container>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        date(formatString: "DD/MM/YYYY")
        title
        img
        techs
      }
      html
      id
    }
  }
`