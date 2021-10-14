let animado = document.querySelectorAll(".animado");

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado - 250 < scrollTop) {
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarArriba");
        }
    }
}

window.addEventListener("scroll", mostrarScroll);

let derechaa = document.querySelectorAll(".derechaa");

function mostrarscroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var t = 0; t < derechaa.length; t++) {
        let alturatraslate = derechaa[t].offsetTop;
        if (alturatraslate - 200 < scrollTop) {
            derechaa[t].classList.add("derecha");
            derechaa[t].style.opacity = 1;
        }
    }
}

window.addEventListener("scroll", mostrarscroll);

let izquierdaa = document.querySelectorAll(".izquierdaa");

function mostrarscrolL() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < izquierdaa.length; i++) {
        let alturaAnimado = izquierdaa[i].offsetTop;
        if (alturaAnimado - 200 < scrollTop) {
            izquierdaa[i].style.opacity = 1;
            izquierdaa[i].classList.add("izquierda");
        }
    }
}

window.addEventListener("scroll", mostrarscrolL);