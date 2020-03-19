import React from 'react'

export default (props) =>
    <section id={props.id} className={"section-portfolio-item " + props.className}>
        <h2 className="text-3xl font-bold uppercase text-center">{props.title}</h2>
        {props.children}
    </section>