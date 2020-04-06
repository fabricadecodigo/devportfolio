import React from "react"
import Section from './section';

export default () =>
    <Section id="contact" title="Contato" className="bg-gray-100">
        <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
            <p className="hidden">
                <label>Não preencha isso se você for humano: <input name="bot-field" /></label>
            </p>

            <p>
                <label>Nome <input type="text" name="name" /></label>
            </p>
            <p>
                <label>E-mail <input type="email" name="email" /></label>
            </p>
            <p>
                <label>Mensagem <textarea name="message" rows="5" /></label>
            </p>
            <p className="text-center">
                <button type="submit" className="btn btn-primary">Enviar</button>
            </p>

        </form>
    </Section>