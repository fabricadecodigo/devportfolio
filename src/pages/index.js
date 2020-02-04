import React from "react"
import Header from "../components/header";
import { Link } from "gatsby"

export default () => 
<div>
	<Header title="Home" />	
    
    <p>
        <Link to="sobre">
            <img src="https://source.unsplash.com/800x500/?javascript" alt="" />    
        </Link>        
    </p>

    <Link to="sobre">Sobre</Link>
</div>
