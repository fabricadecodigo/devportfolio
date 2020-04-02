import React from "react"
import Section from './section';

export default () =>
    <Section id="contact" title="Contato" className="bg-gray-100">
        <form name="contact" data-netlify="true">
            <p>
                <label>Name <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Email <input type="email" name="email" /></label>
            </p>
            <p>
                <label>Mensagem <textarea name="message"  rows="5" /></label>
            </p>
            <p className="text-center">
                <button type="submit" className="btn btn-primary">Enviar</button>
            </p>
        </form>
    </Section>