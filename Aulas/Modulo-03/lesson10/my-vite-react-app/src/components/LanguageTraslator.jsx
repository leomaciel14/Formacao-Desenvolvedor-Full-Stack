import { useState } from "react";
import axios from 'axios'

const LanguageTraslator = () => {
    <Container>
        <Title> Language Translator</Title>
            <div>
                <label>Source Language:</label>
                <section value="en">English</section>
                <section value="es">Spanish</section>
                <section value="fr">French</section>
                <section value="gr">German</section>
                <section value="it">Italiano</section>
                <section value="pt-BR">Portuguese</section>
            </div>

            <div>
                <label>Target Language:</label>
                <section value="en">English</section>
                <section value="es">Spanish</section>
                <section value="fr">French</section>
                <section value="gr">German</section>
                <section value="it">Italiano</section>
                <section value="pt-BR">Portuguese</section>
            </div>

            <input type="text" name="" id="" />
            <button>Translate</button>
    </Container>
}