import React from "react"
import Container from '../components/container';
import Header from "../components/header";
import Project from '../components/project';
import { Link } from "gatsby"


export default ({ data }) => {
    const project = data.markdownRemark;

    return (        
        <Container>
          <Header />          
          <Project project={project} />>
        </Container>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      fields {
        slug
      }
      frontmatter {
        date(formatString: "DD/MM/YYYY")
        img
        techs
        title
      }
      html
      id
    }
  }
`