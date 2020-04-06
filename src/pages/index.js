import React from "react"
import Container from '../components/container';
import Header from "../components/header";
import About from '../components/about';
import Jobs from  '../components/jobs';
import Projects from '../components/projects';
import Skills from '../components/skills';
import Contact from '../components/contact';

export default () =>
  <Container>
    <Header />
    <About />
    <Jobs />
    <Projects limit="2" />
    <Skills />
    <Contact />
  </Container>
