window.addEventListener('DOMContentLoaded', function () {
    // Seleciona o canvas
    var canvas = document.getElementById('renderCanvas');

    // Cria o engine do Babylon.js
    var engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });

    // Cria a cena
    var createScene = function () {
        var scene = new BABYLON.Scene(engine);

        // Habilita a captura do canal alpha
        engine.preserveDrawingBuffer = true;

        // Configura a cor do fundo da cena para transparente
        scene.clearColor = new BABYLON.Color4(22, 22, 22, 0.5); // RGBA (R=0, G=0, B=0, A=0)

        // Adiciona uma câmera e a movimentação dela
        var camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), scene);
        camera.attachControl(canvas, true);

        // Adiciona uma luz
        var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0), scene);

        // Carregar um modelo .obj
        BABYLON.SceneLoader.ImportMesh("", "./_assets/fone_teste-2/", "cgaxis_airpods_max_silver_obj.obj", scene, function (meshes) {
            // O modelo foi carregado
            console.log("Modelo carregado!");

            // Posiciona o modelo
            meshes[0].position = BABYLON.Vector3.Zero();

            // Escala o modelo, se necessário
            meshes[0].scaling = new BABYLON.Vector3(0.01, 0.01, 0.01);

            // Rotaciona o modelo, se necessário
            meshes[0].rotation = new BABYLON.Vector3(0, Math.PI, 0);

            // Configura o material para suportar transparências, se necessário
            meshes[0].material.alpha = 0.5; // Exemplo: torna o modelo 50% transparente
        });

        return scene;
    };

    // Cria a cena
    var scene = createScene();

    // Inicia o render loop
    engine.runRenderLoop(function () {
        scene.render();
    });

    // Ajusta o tamanho do canvas quando a janela é redimensionada
    window.addEventListener('resize', function () {
        engine.resize();
    });
});