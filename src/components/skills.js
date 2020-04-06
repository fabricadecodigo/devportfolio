import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styles from './skills.module.scss';
import Section from './section';
import Skill from './skill';

const Skills = () => {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          skills {
            name
            progress
          }
        }
      }
    }
  `)
    return (
        <Section id="skills" title="O que eu tenho conhecimento">
            <div className={styles.container}>            
                {data.site.siteMetadata.skills.map((skill, index) => (
                    <div key={index}>                        
                        <Skill name={skill.name} progress={skill.progress} />
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default Skills
