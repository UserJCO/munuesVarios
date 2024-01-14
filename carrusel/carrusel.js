const contenedorDiapositivas = document.getElementById("contenedor_diapositivas");
const diapositiva = document.querySelector(".diapositiva");
const flechaAnterior = document.getElementById("flecha_anterior");
const flechaSiguiente = document.getElementById("flecha_siguiente");

flechaSiguiente.addEventListener("click", (event) => {
    const slideWidth = diapositiva.clientWidth;
    contenedorDiapositivas.scrollLeft += slideWidth;
  });

  flechaAnterior.addEventListener("click", () => {
    const slideWidth = diapositiva.clientWidth;
    contenedorDiapositivas.scrollLeft -= slideWidth;
  });