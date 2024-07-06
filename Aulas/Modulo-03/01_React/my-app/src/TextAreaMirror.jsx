import React, { useState } from 'react';

const TextAreaMirror = () => {
    // Estado para o texto
    const [text, setText] = useState('');

    // Função para atualizar o estado conforme o usuário digita
    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <textarea
                value={text}
                onChange={handleChange}
                rows="10"
                cols="50"
                placeholder="Digite aqui..."
                style={{ width: '100%', boxSizing: 'border-box' }}
            />
            <div style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                backgroundColor: 'white',
                padding: '5px',
                fontSize: '12px',
                borderTopLeftRadius: '5px',
                border: '1px solid #ccc',
                borderRight: 'none',
                borderBottom: 'none'
            }}>
                {text.length} caracteres
            </div>
            <div>
                <h3>Texto digitado:</h3>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default TextAreaMirror;
