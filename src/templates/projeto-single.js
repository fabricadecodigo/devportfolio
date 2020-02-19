import React from "react"
import Header from "../components/header";
import Container from '../components/container';
import { Link } from "gatsby"

export default ({ data }) => {
    const projeto = data.markdownRemark;

    return (        
        <Container>
            <Header title={projeto.frontmatter.title} />
            <small>{projeto.frontmatter.date}</small>

            <div dangerouslySetInnerHTML={{ __html: projeto.html }}></div>

            <Link to="projetos">Projetos</Link>
        </Container>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "DD/MM/YYYY")
        title
      }
      html
    }
  }
`