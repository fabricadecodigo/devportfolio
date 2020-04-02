import React from 'react'
import styles from './skill.module.scss';


export default (props) =>
    <div className={styles.container}>
        {props.name}

        <div className={styles.progressContainer}>
            <div className={styles.progressValue} style={{ width: `${props.progress}%` }}></div>
        </div>
    </div>