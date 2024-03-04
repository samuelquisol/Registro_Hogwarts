//_______________________________________________________________________

//                              Paso 4
//_______________________________________________________________________

console.log(`             1. Clase de Transformaciones.`);


/*                             Resumen
    Creación de las funciones `realizarTransformacionRiddikulus` y 
    `enfrentarBoggart`, determinadas como propiedades del Objeto: 
    claseTransformaciones, y no como variables */

//                          Instrucciones
/* primer día de clases: vas temprano a clase de transformaciones, en clase 
de transformaciones que es un objeto, con transformaciones con --boggarts--, 
«Altera la habilidad de un --boggart-- para cambiar de forma y provoca risa 
para derrotarlo.» esto se logra con el encantamiento --`Riddikulus`--. */

/* En este paso, estás creando un objeto llamado claseTransformaciones que
representa la clase de Transformaciones. Estableces el nombre del profesor,
el horario y una propiedad para rastrear la transformación de los boggarts.*/

// Paso 1 - Definir la clase de Transformaciones
const claseTransformaciones = {
    profesor: clases.transformaciones,
    hora: `9 AM`,
    boggartTransformado: null,

    /*Paso 2 - Crear una función para realizar la transformación con 
    `Riddikulus` */
    
    /* Aquí defines una función realizarTransformacionRiddikulus dentro 
    de claseTransformaciones. Esta función verifica si hay un boggart 
    presente y,  si es así, realiza la transformación con el encantamiento 
    `Riddikulus`. */

    realizarTransformacionRiddikulus: function(){
        if(this.boggartTransformado === null){
            console.log(`¡Un Boggart aparecio en la clase de transformaciones¡¡`);

        }else{
            console.log(`}!Riddikulus¡ El boggart se transforma y da risa. 
            Es ahora un ${this.boggartTransformado.formaTransformada}`)
        }
    },

    // Paso 3: Crear una función para enfrentar un boggart
    /* Aquí defines otra función enfrentarBoggart dentro de
    claseTransformaciones. Esta función toma un boggart como argumento,
    muestra un mensaje con la forma original del boggart, realiza la
    transformación y muestra el resultado. */

    enfrentarBoggart: function(boggart){
        console.log(`!Un boggart ha aprecido en la clase de Transformaciones¡`);
        console.log(`Forma original del boggart: ${boggart.formaOriginal}`);
        this.boggartTransformado={
            formaOriginal: boggart.formaOriginal,
            formaTransformada: `Payaso gracioso`
        };

        this.realizarTransformacionRiddikulus
    }
};

// - Paso 4: Uso y llamada a las funciones
/* En este paso, creas un objeto boggartEjemplo y luego llamas a la función
enfrentarBoggart de claseTransformaciones para enfrentar el boggart. */
const boggartEjemplo = {
    formaOriginal: `Puerco araña`
}

claseTransformaciones.enfrentarBoggart(boggartEjemplo);
console.log(`-----------------------------------------`);


//_______________________________________________________________________

//                              Paso 5
//_______________________________________________________________________

console.log(`      2. Clase de Defensa Contra las Artes Oscuras.`);

/*                             Resumen
    Creación de la propiedad `animalPatronus` como array y 
    `generarAnimalPatronus` como función que arroja un valor aleatorio*/

//                          Instrucciones
/* puedes ir agregando las demás clases, pero es importante que vayas a la 
clase de defensa contra las artes oscuras, para puedas defenderte de los 
dementores que han escapado de Azkaban. */

const defensaContraLasArtesOscuras = {
    profesor: clases.defensaContraLasArtesOscuras,
    hora: `10 AM`,
    

/* crear un objeto con nombre defensaContraLasArtesOscuras con la función 
de generar un animal de patronus, lo genere random y llenar la variable, 
de la propiedad animalPatronus.*/

    animalPatronus: [`Ciervo`, `Aguila`, `Dragon`, `Fenix`, `Tlacuache`, `Libelula`],
    
    generarAnimalPatronus: function(){
        const indiceAleatorio = Math.floor(Math.random()* defensaContraLasArtesOscuras.
        animalPatronus.length);
        return this.animalPatronus[indiceAleatorio];
}
};

/* Crear función donde aparece un dementor, y si el estudiante tiene ya su 
animal patronus detiene el dementor, si no, el estudiante será absorbido, 
y será llevado a la enfermería */

estudianteHogwarts.enfrentarDementor();
console.log(`Animal del expecto Patronum: `, estudianteHogwarts.animalPatronus)
console.log(`-----------------------------------------`);


//_______________________________________________________________________

//                       Paso 7 - Adicional 1
//_______________________________________________________________________

/*                            Resumen
    Creación de Objeto `clasePociones` como contenedor de la información 
    acerca de los profesores y de la preparación de la poción Felix Felicis, 
    y posteriormente la Creación de las Funciones `crearPocion()` y 
    `cambioProfesor()`, que retornan resultados específicos tomando como 
    referencia la información encontrada en el Objeto anteriormente 
    mencionado*/

//                         Instrucciones
/* Crear un Objeto clasePociones, con su profesor, y horario, donde debe 
tener unos ingredientes: 2 Crisopos y 1 Tallo de Descurainia sophia, y 
tiempo de preparacion de 5 mins, si no, queda mal y hara daño, todo para 
crear la poción Felix Felicis.*/

// -------------------------- Objeto --------------------------

const clasePociones = {
        datosProfesores: {
            Profesor1: {
                nombre: `Horace Slughorn`,
                horario: `6 am`,
            },

            Profesor2: {
                nombre: `Severus Snape`,
                horario: `7 am`,
            },
        },

        preparacionFelixFelicis: {
            ingredientes: {
                Crisopos: 2,
                TalloDescurainiaSophia: 1
            },
            
            tiempoPreparacion: 5,
        },
    }

// ------------------ Creación de la Poción ------------------

crearPocion = function(){
    cantidadCrisopos = Number(prompt(`---- Creación de la Poción ---- 
    \nIngresa la cantidad de Crisopos: `));
    console.log(`Cantidad de Crisopos: ${cantidadCrisopos}`);

    cantidadTallos = Number(prompt(`---- Creación de la Poción ---- 
    \nIngresa la cantidad de Tallos de Descurainia sophia: `));
    console.log(`Cantidad de Tallos: ${cantidadTallos}`);

    cantidadTiempo = Number(prompt(`---- Creación de la Poción ---- 
    \nIngresa la cantidad de Tiempo de Preparación: `));
    console.log(`Cantidad de Tiempo: ${cantidadTiempo}`);

    if (cantidadCrisopos === 2 && cantidadTallos === 1 && 
        cantidadTiempo === 5){
            resultadoPocion = true
        }
        else{
            resultadoPocion = false
        }
}

alert('Creación de la Poción Felix Felicis');
console.log('         4. Creación de la Poción Felix Felicis');

crearPocion();
    
// -------------------- Cambio Profesores --------------------

/* Luego de realizarla, la consecuencia será cambiar el profesor de pociones 
por el de animales.*/

cambioProfesor();

function cambioProfesor(){
    if (resultadoPocion === false){
        console.log('La poción falló, fuiste herido');
        alert('La poción falló, fuiste herido');
    }
    else{
        nuevoProfesor1 = clasePociones.datosProfesores.
        Profesor1.nombre = `Silvanus Kettleburn`,

        nuevoProfesor2 = clasePociones.datosProfesores.
        Profesor2.nombre = `Rubeus Hagrid`,
        
        console.log('La poción fue exitosa, Los profesores han sido cambiados');
        alert('La poción fue exitosa, Los profesores han sido cambiados');

        console.log
        (`Horace Slughorn fue reemplazado por ${nuevoProfesor1}`);
        alert
        (`Horace Slughorn fue reemplazado por ${nuevoProfesor1}`);

        console.log
        (`Severus Snape fue reemplazado por ${nuevoProfesor2}`);
        alert
        (`Severus Snape fue reemplazado por ${nuevoProfesor2}`);
    };  
}