function mudarClasse(id) {
    let botao = document.getElementById(id);
    if (botao.classList.contains("botao")) {
        botao.classList.remove("botao");
        botao.classList.add("novo-botao");
    } else {
        botao.classList.remove("novo-botao");
        botao.classList.add("botao");
    }
}

function mudarCor(cor) {
    switch(cor) {
        case 1:
            document.body.style.backgroundColor = "#042940";
            break;
        case 2:
            document.body.style.backgroundColor = "#005C53";
            break;
        case 3:
            document.body.style.backgroundColor = "#9FC131";
            break;
        case 4:
            document.body.style.backgroundColor = "#DBF227";
            break;
        case 5:
            document.body.style.backgroundColor = "#6B8E23";
            break;
        default:
            document.body.style.backgroundColor = "#fff";
            break;
    }
}
