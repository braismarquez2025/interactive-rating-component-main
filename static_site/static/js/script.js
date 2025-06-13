let botones = document.querySelectorAll(".content_numbers-btn");
let numeros = document.querySelector(".content_numbers");
let numeroEscogido = document.getElementById("num");
let botonClicado;


botones.forEach(boton => {
    boton.addEventListener("click", (event) => {
        boton.style.backgroundColor = "#FC7614";
        boton.style.color = "#131518";
        numeros.style.cursor = "default";
       
        botonClicado = event.currentTarget;
     
        botones.forEach(b => {
            if (b !== botonClicado) {
                b.style.pointerEvents = "none";
            }
        })
        
        numeroEscogido.textContent = botonClicado;



    });
});


