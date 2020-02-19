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
                    
                    <Link to={node.fields.slug}>
                      <h2>{node.frontmatter.title}</h2>
                    </Link>

                    <small>{node.frontmatter.date}</small>
                    <div>{node.excerpt}</div>
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
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            title
          }
        }
      }
    }
  }
`