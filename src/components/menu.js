import React from 'react'
import { Link } from 'gatsby';

export default () =>
    <div className="flex flex-wrap justify-center">
        <Link to="/" className="mx-2">Home</Link>
        <a href="#sobre" className="mx-2">Sobre</a>
        <a href="#experiences" className="mx-2">Experiências</a>
        <a href="#projects" className="mx-2">Projetos</a>
        <a href="#skills" className="mx-2">Skills</a>
        <a href="#contact" className="mx-2">Contato</a>
    </div>