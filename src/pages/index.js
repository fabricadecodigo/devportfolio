import React from "react"
import Container from '../components/container';
import Header from "../components/header";
import About from '../components/about';
import Jobs from '../components/jobs';
import Projects from '../components/projects';

export default () =>
  <Container>
    <Header />
    <About />
    <Jobs />
    <Projects />
  </Container>
