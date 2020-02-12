import React from "react"
import Header from "../components/header";
import Container from '../components/container';
import { Link, graphql } from "gatsby"

export default ({ data }) =>
    <Container>
        <Header title={data.site.siteMetadata.homePage.title} />

        <p>
            <Link to="sobre">
                <img src={data.site.siteMetadata.homePage.img} alt="" />
            </Link>
        </p>

        <Link to="sobre">Sobre</Link>
    </Container>

export const query = graphql`
  {
    site {
      siteMetadata {
        homePage {
          img
          title
        }
      }
    }
  }
`