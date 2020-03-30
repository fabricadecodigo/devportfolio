import React from 'react'
import styles from './project.module.scss'
import { Link } from 'gatsby';

export default props => {
    const project = props.project;
    return (
        <div className={styles.projectContainer}>

            <div className={styles.projectImageContainer}>
                <img src={project.frontmatter.img} />
            </div>

            <div className={styles.projectInfoContainer}>
                <Link to={project.fields.slug}>
                    <h3 className={styles.title}>{project.frontmatter.title}</h3>
                </Link>
                <small className={styles.date}>{project.frontmatter.date}</small>

                <p dangerouslySetInnerHTML={{ __html: project.html }}></p>
                <ul className={styles.technologies}>
                    {project.frontmatter.techs.split(',').map((technologie, index) => (
                        <li key={index}>{technologie}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}