

import Especie from "./Especie.js";

const miEspecie=Especie();
miEspecie.listarEspecie()
especies.forEach(
    (especie) => {
        const fila = miTabla.insertRow();
        const tabla= document.getElementById("miTabla");
        fila.inserCell().innerText = especie.id_especie;
        fila.inserCell().innerText = especie.nombre;
        fila.inserCell().innerText = especie.clasificacion;
        fila.inserCell().innerText = especie.esperanza_vida;
        fila.inserCell().innerText = especie.peso_promedio;



    }
)

