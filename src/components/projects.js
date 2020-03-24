import React from 'react'
import Section from './section';
import styles from './projects.module.scss'

export default () =>
    <Section id="sobre" className="bg-gray-100" title="Projetos pessoais que trabalhei">

        {/* Projeto */}
        <div className={styles.projectContainer}>
            {/* Imagem */}
            <div className={styles.projectImageContainer}>
                <img src="http://www.fabricadecodigo.com/wp-content/uploads/elementor/thumbs/app-todo-com-ionic-ogd6rpbwgkg8mbyll61x8ez2zohiqvp8xbg4eysni8.png" />
            </div>
            {/* Info */}
            <div className={styles.projectInfoContainer}>
                <h3 className={styles.title}>Nome do projeto</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus urna ac lectus maximus, nec hendrerit turpis consequat.
                    Aenean porta tincidunt neque a vulputate. Nullam at sapien mollis, pellentesque sapien sed, porta ex. Nam vitae ultrices ligula.
                    Vivamus justo nulla, ullamcorper ac fermentum eget, convallis nec ligula. In elementum laoreet tempor. Vivamus convallis nibh
                    et vulputate efficitur. Nam pellentesque ex in feugiat molestie.
                </p>
                <ul className={styles.technologies}>
                    <li>Ionic</li>
                    <li>Html</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>Html</li>
                    <li>Ionic</li>
                </ul>
            </div>
        </div>

        {/* Projeto */}
        <div className={styles.projectContainer}>
            {/* Imagem */}
            <div className={styles.projectImageContainer}>
                <img src="http://www.fabricadecodigo.com/wp-content/uploads/elementor/thumbs/app-todo-com-ionic-ogd6rpbwgkg8mbyll61x8ez2zohiqvp8xbg4eysni8.png" />
            </div>
            {/* Info */}
            <div className={styles.projectInfoContainer}>
                <h3 className={styles.title}>Nome do projeto</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus urna ac lectus maximus, nec hendrerit turpis consequat.
                    Aenean porta tincidunt neque a vulputate. Nullam at sapien mollis, pellentesque sapien sed, porta ex. Nam vitae ultrices ligula.
                    Vivamus justo nulla, ullamcorper ac fermentum eget, convallis nec ligula. In elementum laoreet tempor. Vivamus convallis nibh
                    et vulputate efficitur. Nam pellentesque ex in feugiat molestie.
                </p>
                <ul className={styles.technologies}>
                    <li>Ionic</li>
                    <li>Html</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>Html</li>
                    <li>Ionic</li>
                </ul>
            </div>
        </div>

        <div className="text-center">
            <a href="#" className="btn btn-primary">Ver todos</a>
        </div>
    </Section>