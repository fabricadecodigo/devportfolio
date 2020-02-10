import React from "react"
import Header from "../components/header";
import Container from '../components/container';
import { Link } from "gatsby"

export default () =>
    <Container>
        <Header title="Home" />

        <p>
            <Link to="sobre">
                <img src="https://source.unsplash.com/800x500/?javascript" alt="" />
            </Link>
        </p>

        <Link to="sobre">Sobre</Link>
    </Container>
