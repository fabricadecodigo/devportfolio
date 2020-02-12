import React from 'react';
import styles from './container.module.scss';
import { useStaticQuery, graphql } from "gatsby"

export default ({ children }) => {
    const { site } = useStaticQuery(graphql`
        {
            site {
            siteMetadata {
                footerText
            }
            }
        }
    `)
    return (
        <div>
            <div className={styles.container} >
                {children}
                <div className={styles.footer}>{site.siteMetadata.footerText}</div>
            </div>
        </div>
    )
}
