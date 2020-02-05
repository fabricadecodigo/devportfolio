import React from "react"
import Header from "../components/header";
import Container from '../components/container';
import { Link } from "gatsby"

export default () => 
<Container>
    <Header title="Sobre" />
	
    <p>
        <img src="https://source.unsplash.com/800x500/?javascript" alt="" />
    </p>

    <Link to="/">Home</Link>
</Container>
