import React from "react"
import Header from "../components/header";
import Container from '../components/container';
import { Link, graphql } from "gatsby"

export default ({ data }) => {
    const { edges } = data.allMarkdownRemark;
    return (
        <Container>
            <Header title="Projetos" />

            {edges.map(({ node }) => (
                <div key={node.id}>
                    <h2>{node.frontmatter.title}</h2>
                    <small>{node.frontmatter.date}</small>
                    <div dangerouslySetInnerHTML={ { __html: node.html } }></div>
                </div>
            ))}

            <Link to="/">Home</Link>
        </Container>
    )
}

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            title
          }
        }
      }
    }
  }
`