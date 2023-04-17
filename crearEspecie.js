

import Especie from "./Especie.js";

const miEspecie = new Especie();

const miBoton = document.getElementById("btnProcesar");

miBoton.addEventListener("click",
    async (event) => {
        event.preventDefault();
        // para deshabilitar el boton
        miBoton.disabled = true;

        await miEspecie.guardarEspecie();
    }
);