/*1.Obtener los datos del formulario
2. conectarnos a la ruta de la API 
3. Mostrar los mensajes correspondientes de error*/

class Especie {
    //metodo guardarEspecie() funcion asincrona para esperar la promesa

    async guardarEspecie() {
        //obtener los datos del formulario
        //ToDo: Validar datos
        const datos = {
            nombre: documento.getElementById("nombre").value,
            clasificacion : documento.getElementById("clasificacion").value,
            esperanza_vida :parseInt(documento.getElementById("esperanza_vida").value),
            peso_promedio :parseFloat(documento.getElementById("peso_promedio").value)
        }

        await fetch(
            "http://localhost:3000/crear_especie",
            {
                method: "POST",
                body: JSON.stringify(datos),
                headers: {
                    "Content_Type": "application/json"
                }
            }

        );
    }
     async listarEspecie(){

            let especies = await fetch("http://localhost:3000/listar_especie");
            especies = await especies.json();
            return especies;

            

            // paso 2 recorrer json


        }

        //crear json coger los valores y asignarlo a cada uno de los datos



    }


//convertir esta clase en un modulo
//1 conectarnos a la ruta /listar_especie
//2. Recorrer el json
//2.1 Agregar una fila en la tabla por cada objeto retornado en el JSOn
export default Especie;
