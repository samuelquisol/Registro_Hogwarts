console.log(estudianteHogwarts);

/*                 Imagen Insertada Dinámicamente                 */

estudianteHogwarts.forEach((estudiante)=>{
    const {imagen} = estudiante;
    const contenedorImagen = document.querySelector('.contenedorImagen');
    const imagenPerfilUsuario = document.createElement('p');
    imagenPerfilUsuario.innerHTML = `
        <img src="img/${imagen}" alt="">
    `
    contenedorImagen.appendChild(imagenPerfilUsuario)        
})

//------------------------------------------------------------------

/*               Mostrar Información del Estudiante               */
const botonEnviar = document.querySelector('#botonEnviar');
botonEnviar.addEventListener('click', mostrarInformacion);

/* Funciones */
function mostrarInformacion(){

    /* Destructuring */
    const {nombreDatoIngresado, edadDatoIngresado, familiaDatoIngresado, 
    linajeDatoIngresado, cualidadesDatoIngresado} = datosIngresados;

    console.log(`Nombre: ${nombreDatoIngresado}`);
    console.log(`Edad: ${edadDatoIngresado}`);
    console.log(`Familia: ${familiaDatoIngresado}`);
    console.log(`Linaje: ${linajeDatoIngresado}`);
    console.log(`Cualidades: ${cualidadesDatoIngresado}`);

/*     formulario.reset();
 */}