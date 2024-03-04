console.log(estudianteHogwarts);
//|||||||||||||||||||||||||||||||||||||||||||||||||

const formulario = document.querySelector('.formulario');
const formInicial = document.querySelector('.formInicial');
const datosEstudiante = document.querySelector('.datosEstudiante');
const botonEnviar = document.querySelector('#botonEnviar');

/* Hiddens */

hiddensInicial()

function hiddensInicial(){
    formulario.hidden = false;
    formInicial.hidden = false;
    botonEnviar.children[0].hidden = false;
}

/*                  Formulario                  */
//________________________________________________

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

/* Padres de las Entradas */
const nombreForm = document.querySelector('#nombreForm');
const edadForm = document.querySelector('#edadForm');
const familiaForm = document.querySelector('#familiaForm');
const linajeForm = document.querySelector('#linajeForm');
const cualidadesForm = document.querySelector('#cualidadesForm');

/* Event Listeners */
nombreForm.addEventListener('input', event =>{
    datosIngresados.nombreDatoIngresado = event.target.value;
})

edadForm.addEventListener('input', event =>{
    datosIngresados.edadDatoIngresado = event.target.value;
})

familiaForm.addEventListener('input', event =>{
    datosIngresados.familiaDatoIngresado = event.target.value;
})

linajeForm.addEventListener('input', event =>{
    datosIngresados.linajeDatoIngresado = event.target.value;
})

cualidadesForm.addEventListener('input', event =>{
    datosIngresados.cualidadesDatoIngresado = event.target.value;
})

botonEnviar.addEventListener('click', ocultarForm);

function ocultarForm(){
    if( datosIngresados.nombreDatoIngresado === ``||
        datosIngresados.edadDatoIngresado === ``||
        datosIngresados.familiaDatoIngresado === ``||
        datosIngresados.linajeDatoIngresado === ``||
        datosIngresados.cualidadesDatoIngresado === ``){
        
        alert('Completa los campos vacíos')
    }

    else{
        
        
        formulario.hidden = true;

        formInicial.hidden = true;    

        nuevasOpciones()
    }
}

function nuevasOpciones(){
    
    botonEnviar.innerHTML = `    
    <section class="btnDatosEstudiante" id="btnDatosEstudiante">
        <input type="submit" value="Información del Estudiante" id="submit" hidden>
    </section>

    <section class="btnIrCena" id="btnIrCena">
        <input type="submit" value="Ir a la Cena" id="submit" hidden>
    </section>   
    `

    configuracionBotones();
}

function configuracionBotones(){
    const btnDatosEstudiante = document.querySelector('.btnDatosEstudiante');
    btnDatosEstudiante.children[0].hidden = false
    btnDatosEstudiante.addEventListener('click', mostrarDatosEstudiante);

    const btnIrCena = document.querySelector('#btnIrCena');
    btnIrCena.children[0].hidden = false;
    btnIrCena.addEventListener('click', irCena);

    mostrarDatosEstudiante();

//------------------------------------------------

//________________________________________________

/*               Datos Estudiante               */
//________________________________________________

function mostrarDatosEstudiante(){

    btnDatosEstudiante.children[0].hidden = true
    btnIrCena.children[0].hidden = true;

    datosEstudiante.hidden = false;

    /* Destructuring */
    const {nombreDatoIngresado, edadDatoIngresado, familiaDatoIngresado, 
    linajeDatoIngresado, cualidadesDatoIngresado} = datosIngresados;

    console.table(`Nombre: ${nombreDatoIngresado} \nEdad: ${edadDatoIngresado} \nFamilia: ${familiaDatoIngresado} \nLinaje: ${linajeDatoIngresado} \nCualidades: ${cualidadesDatoIngresado}`);

    estudianteHogwarts.forEach((estudiante)=>{
        const {imagen} = estudiante;
        const contenedorImagen = document.querySelector('.contenedorDataElements');
        const imagenPerfilUsuario = document.createElement('p');
        imagenPerfilUsuario.innerHTML = `
            <img src="img/${imagen}" alt="">
        `
        contenedorImagen.children[0].appendChild(imagenPerfilUsuario)        
    });
    
    /* Nombre */
    const nombreAlmacenado = document.querySelector('#nombreAlmacenado');
    const mostrarNombre = document.createElement('p');
    mostrarNombre.innerHTML = `
        <p>${nombreDatoIngresado}</p>
    `;
    nombreAlmacenado.appendChild(mostrarNombre);
    
    /* Edad */
    const edadAlmacenada = document.querySelector('#edadAlmacenada');
    const mostrarEdad = document.createElement('p');
    mostrarEdad.innerHTML = `
        <p>${edadDatoIngresado}</p>
    `;
    edadAlmacenada.appendChild(mostrarEdad);

    /*  */
    const familiaAlmacenada = document.querySelector('#familiaAlmacenada');
    const mostrarFamilia = document.createElement('p');
    mostrarFamilia.innerHTML = `
        <p>${familiaDatoIngresado}</p>
    `;
    familiaAlmacenada.appendChild(mostrarFamilia);

    const linajeAlmacenado = document.querySelector('#linajeAlmacenado');
    const mostrarLinaje = document.createElement('p');
    mostrarLinaje.innerHTML = `
        <p>${linajeDatoIngresado}</p>
    `;
    linajeAlmacenado.appendChild(mostrarLinaje);

    const contenedorCualidadesAlmacenadas = document.querySelector('#contenedorCualidadesAlmacenadas');
    const mostrarCualidades = document.createElement('p');
    mostrarCualidades.innerHTML = `
        <p>${cualidadesDatoIngresado}</p>
    `;
    contenedorCualidadesAlmacenadas.appendChild(mostrarCualidades);   

}
}
//-----------------------------------------------------------------------

//_______________________________________________________________________

//                         Asignar casa - Cena
//_______________________________________________________________________

function irCena(){
    datosEstudiante.hidden = true;
}

const cena = {
    
    seleccionCasa(){

        const casa = Object.create(estudianteHogwarts)
        const {linajeDatoIngresado, cualidadesDatoIngresado} = datosIngresados;

        if (cualidadesDatoIngresado.includes(`Valor` || `fuerza` || `audacia` && 
        linajeDatoIngresado.includes(`Mestizo` || `Muggle` || `Sangre pura`))){
            casa = `Gryffindor`;
        }

        else if (cualidadesDatoIngresado.includes(`Justicia` || `Lealtad` || `Paciencia`&& 
        linajeDatoIngresado.includes(`Mestizo` || `Muggle`))){
            casa = `Hufflepuff`;
        }

        else if (cualidadesDatoIngresado.includes(`Creatividad` || `Erudición` || 
        `Inteligencia` && 
        linajeDatoIngresado.includes(`Mestizo` || `Muggle` || `Sangre pura`))){
            casa = `Ravenclaw`;
        }
        
        else if (cualidadesDatoIngresado.includes(`Ambición` || `Determinación` || 
        `Astucia` && linajeDatoIngresado.includes(`Sangre Pura`))){
            casa = `Slytherin`;
        }

        console.log(datosIngresados.casa);
    }
};

cena.seleccionCasa();

