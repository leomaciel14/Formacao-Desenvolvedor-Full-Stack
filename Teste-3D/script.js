import * as THREE from './node_modules/three/build/three.module.js';
import { OBJLoader } from './node_modules/three/examples/jsm/loaders/OBJLoader.js';

const canvas = document.querySelector('#webgl-output');

if (!canvas) {
    console.error('Canvas not found!');
}

// Cria a cena
const scene = new THREE.Scene();

// Cria a câmera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Cria o renderizador com fundo transparente
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);

// Adiciona o renderizador ao documento
document.body.appendChild(renderer.domElement);

// Carrega o modelo OBJ
const loader = new OBJLoader();

loader.load(
    './_assets/fone_3d.obj',
    (object) => {
        // Ajusta a escala e a posição do modelo
        object.scale.set(0.1, 0.1, 0.1);
        object.position.set(0, 0, 0);

        // Adiciona o modelo à cena
        scene.add(object);

        console.log('Modelo carregado com sucesso');
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% carregado');
    },
    (error) => {
        console.error('Ocorreu um erro ao carregar o modelo', error);
    }
);

// Função de renderização
function animate() {
    requestAnimationFrame(animate);

    // Renderiza a cena
    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Inicia a animação
animate();