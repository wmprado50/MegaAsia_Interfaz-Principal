//Funcion para el boton de ir hacia el encabezado de la interfaz
function irhaciaArriba(pxPantalla) {
  window.addEventListener("scroll", () => {
    var scroll = document.documentElement.scrollTop;


    var botonArriba = document.getElementById("irArriba");

    if (scroll > pxPantalla) {
      botonArriba.style.right = 20 + "px";
    } else {
      botonArriba.style.right = -100 + "px";
    }
  });
}

irhaciaArriba(350);


const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += 500;
  })

  preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= 500;
  })
})

const descuentosContainers = [...document.querySelectorAll('.descuentos-container')];
const nxtBtn2 = [...document.querySelectorAll('.nxt-btn2')];
const preBtn2 = [...document.querySelectorAll('.pre-btn2')];

descuentosContainers.forEach((item, i) => {

  nxtBtn2[i].addEventListener('click', () => {
    item.scrollLeft += 500;
  })

  preBtn2[i].addEventListener('click', () => {
    item.scrollLeft -= 500;
  })
})

//Instrucciones para quitar el scroll lateral a la hora de abrir el boton de categorias "Menu de categorias"

var scrollbody = document.getElementById("bodyid");
const contmenucateg = document.getElementById("menucategorias");
const cuadrocategorias = document.getElementById("cuadrocategorias");

const closescroll = () => {
  scrollbody.style.overflow = "hidden";
};
const visiscroll = () => {
  scrollbody.style.overflow = "visible";
};

if (document.getElementById("btncat")) {
  var button = document.getElementById("btncat");

  button.addEventListener("click", () => {
    closescroll();
    contmenucateg.style.opacity = "1";
    contmenucateg.style.visibility = "visible";
    cuadrocategorias.style.transform = "translateX(0%)";
  });
}

if (document.getElementById("btncerrar")) {
  var button = document.getElementById("btncerrar");

  button.addEventListener("click", () => {
    visiscroll();
    contmenucateg.style.opacity = "0";
    contmenucateg.style.visibility = "hidden";
    cuadrocategorias.style.transform = "translateX(-100%)";
  });
}

/*La misma funcionalidad de arriba, pero aplicada al boton de categorias que aparece en el responsive
de tablet y movil (ubicado al lado del logo de mega asia) */

if (document.getElementById("btncat2")) {
  var button = document.getElementById("btncat2");

  button.addEventListener("click", () => {
    contmenucateg.style.opacity = "1";
    contmenucateg.style.visibility = "visible";
    cuadrocategorias.style.transform = "translateX(0%)";
    closescroll();

  });
}
if (document.getElementById("btncerrar")) {
  var button = document.getElementById("btncerrar");

  button.addEventListener("click", () => {
    visiscroll();
    contmenucateg.style.opacity = "0";
    contmenucateg.style.visibility = "hidden";
    cuadrocategorias.style.transform = "translateX(-100%)";
  });
}


/* Instruccion para hacer un reload a la hora de clikear el logo de mega asia */
if (document.getElementById("btnlogoreload")) {
  var button = document.getElementById("btnlogoreload");

  button.addEventListener("click", () => {
    location.reload();
    window.location.href = window.location.href;
  });
}

//Instruccion para sacar el cuadro de categorias clickeando fuera de esta
let contenidocategorias = document.querySelectorAll(".container-menucateg")[0];

window.addEventListener('click', function (e) {
  console.log(e.target)

  if (e.target == contenidocategorias) {

    visiscroll();
    contmenucateg.style.opacity = "0";
    contmenucateg.style.visibility = "hidden";
    cuadrocategorias.style.transform = "translateX(-100%)";
  }
})


const flecha1 = document.getElementById("flecha1"),
  flecha2 = document.getElementById("flecha2"),
  flecha3 = document.getElementById("flecha3"),
  flecha4 = document.getElementById("flecha4"),
  flecha5 = document.getElementById("flecha5"),
  flecha6 = document.getElementById("flecha6");

var punto1 = document.getElementById("punto1"),
  punto2 = document.getElementById("punto2"),
  punto3 = document.getElementById("punto3");


flecha1.addEventListener('click', () => {
  punto1.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  punto2.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  punto3.style.backgroundColor = "#DC3036";
})


flecha2.addEventListener('click', () => {
  punto1.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  punto3.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  punto2.style.backgroundColor = "#DC3036";
})


flecha3.addEventListener('click', () => {
  punto3.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  punto2.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  punto1.style.backgroundColor = "#DC3036";
})


flecha4.addEventListener('click', () => {
  punto1.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  punto2.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  punto3.style.backgroundColor = "#DC3036";
})


flecha5.addEventListener('click', () => {
  punto1.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  punto3.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  punto2.style.backgroundColor = "#DC3036";
})

flecha6.addEventListener('click', () => {
  punto3.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  punto2.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  punto1.style.backgroundColor = "#DC3036";
})

punto1.addEventListener('click', () => {
  punto3.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  punto2.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  punto1.style.backgroundColor = "#DC3036";
})

punto2.addEventListener('click', () => {
  punto3.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  punto1.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  punto2.style.backgroundColor = "#DC3036";
})

punto3.addEventListener('click', () => {
  punto1.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  punto2.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  punto3.style.backgroundColor = "#DC3036";
})


