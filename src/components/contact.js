import React from "react"
import Section from './section';

export default () =>
    <Section id="contact" title="Contato" className="bg-gray-100">
        <form name="contact" method="post" data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <p class="hidden">
                <label>Não preencha isso se você for humano: <input name="bot-field" /></label>
            </p>

            <p>
                <label>Name <input type="text" name="name" /></label>
            </p>
            <p>
                <label>Email <input type="email" name="email" /></label>
            </p>
            <p>
                <label>Mensagem <textarea name="message" rows="5" /></label>
            </p>
            <p className="text-center">
                <button type="submit" className="btn btn-primary">Enviar</button>
            </p>
        </form>
    </Section>