import React from 'react';
import styles from './jobs.module.scss';
import { useStaticQuery, graphql } from "gatsby"

import Section from './section';
import JobDate from './job-date';
import JobDescription from './job-description';

const Jobs = () => {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          jobs {
            company
            date
            description
            role
          }
        }
      }
    }
  `)
    return (
        <Section id="sobre" title="Experiências profissionais">
            <div className="relative my-5">
                <div className={styles.timeline}></div>
                {
                    data.site.siteMetadata.jobs.map((job, index) => {
                        const isLeftSide = index % 2 === 0;

                        return (
                            <div key={index} className={`${styles.timelineContainer} ${isLeftSide ? styles.timelineItemLeft : styles.timelineItemRight}`}>
                                <div className={styles.timelineIcon}></div>

                                {isLeftSide ? (
                                    <>                                    
                                        <JobDate className={`${styles.timelineItem} ${styles.timelineItemDate}`}
                                            value={job.date} />

                                        <JobDescription
                                            className={`${styles.timelineItem} ${styles.timelineItemDescription}`}
                                            company={job.company}
                                            date={job.date}
                                            role={job.role}
                                            description={job.description} />
                                    </>
                                ) : (
                                    <>
                                        <JobDescription
                                            className={`${styles.timelineItem} ${styles.timelineItemDescription}`}
                                            company={job.company}
                                            date={job.date}
                                            role={job.role}
                                            description={job.description} />

                                        <JobDate className={`${styles.timelineItem} ${styles.timelineItemDate}`}
                                            value={job.date} />
                                    </>
                                )}
                            </div>
                        )
                    })
                }

            </div>
        </Section>
    )
}

export default Jobs
