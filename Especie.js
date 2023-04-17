/*1.Obtener los datos del formulario
2. conectarnos a la ruta de la API 
3. Mostrar los mensajes correspondientes de error*/

class Especie{
    //metodo guardarEspecie() funcion asincrona para esperar la promesa

    async guardarEspecie(){
        //obtener los datos del formulario
        //ToDo: Validar datos
        const nombre=documento.getElementById("nombre").value;
        const clasificacion=documento.getElementById("clasificacion").value;
        const esperanza_vida=parseInt(documento.getElementById("esperanza_vida").value);
        const peso_promedio=parseFloat(documento.getElementById("peso_promedio").value);
    }
     async listarEspecie(){

            let especies =await fetch("http://localhost:3000/listar_especie");
            especies= await especies.json();

            const miTabla=document.json();

            // paso 2 recorrer json

            especies.forEach(
                (especie)=>{
                    const fila= miTabla. insertRow();
                    fila.inserCell().innerText=especie.id_especie;
                    fila.inserCell().innerText=especie.nombre;
                    fila.inserCell().innerText=especie.clasificacion;
                    fila.inserCell().innerText=especie.esperanza_vida;
                    fila.inserCell().innerText=especie.peso_promedio;



                }
            )
    
        }

        //crear json coger los valores y asignarlo a cada uno de los datos
        const datos={
            nombre:nombre,
            clasificacion:clasificacion,
            esperanza_vida:esperanza_vida,
            peso_promedio:peso_promedio
        };
        // To Do: falta gestionar errores
        await fetch (
            "http://localhost:3000/crear_especie",
            {
                method:"POST",
                body:JSON.stringify(datos),
                headers:{
                    "Content_Type":"application/json"
                }
            }

        );
            console.log("Registro Correcto");

    }



}
//convertir esta clase en un modulo
//1 conectarnos a la ruta /listar_especie
//2. Recorrer el json
   //2.1 Agregar una fila en la tabla por cada objeto retornado en el JSOn
export default Especie;
