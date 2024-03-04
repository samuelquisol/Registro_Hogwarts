//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||



// // ----------------------------- Hogwarts -----------------------------
// const confirmacion = confirm(` ------------- Pasos Visualización de Ejercicios -------------
// \n1. Clickea Cancelar para poder inspeccionar la página. 
// 2. Inspecciona la página con click derecho y selecciona la 
// Opción Console.
// 3. Después de inspeccionarla, Refresca la página y clickea 
// Aceptar para visualizar los resultados de los ejercicios.`);

// if (confirmacion === false) {
//   console.log('Inspeccionando Página...');
//   console.log('');
//   console.log(`      Pasos Visualización de Ejercicios`);

//   console.log(`1. Clickea Cancelar para poder inspeccionar la página.`)
//   console.log(`2. Inspecciona la página con click derecho y selecciona la Opción Console.`)
//   console.log(`3. Después de inspeccionarla, Refresca la página y clickea Aceptar para visualizar los resultados de los ejercicios.`);
// } 

// else{

    
    //_______________________________________________________________________

    //                              Paso 1
    //_______________________________________________________________________

        /*                         Resumen
        // Creando el Objeto que contiene la información del Estudiante

    //                          Instrucciones
    /* Eres estudiante de Hogwarts, tienes la edad suficiente para entrar 
    a estudiar, tienes padres, y un linaje de sangre, aun no sabes tu casa, 
    ni tu animal patronus, también tienes cualidades, que son muy importantes
    para que el sombrero seleccionador te asigne una casa. Crear un objeto, 
    con:

    Nombre, edad, familia, linaje, casa, animal patronus, cualidades (debes 
    tener en tus cualidades solo los 3 de alguna de las casas):  */

    /* 
    “Valor, fuerza, audacia` 
    `Justicia, Lealtad, Paciencia` 
    “Creatividad, Erudición, Inteligencia` 
    `Ambición, Determinación, Astucia`

    Linajes: Mestizo, muggle, Sangre pura*/
    
        

    const estudianteHogwarts = {
        imagen: `samuel.jpg`,
        nombre: `Samuel`,
        edad: 18,
        familia: `Quintero`,
        linaje: `muggle`,
        casa: ``,
        animalPatronus: ``,
        cualidades: [`Justicia`, `Lealtad`, `Paciencia`],
        expectoPatronus: function(){
            if(this.animalPatronus === ``){
                console.log(`No puedo lanzar Expecto Patronum. !Aun no se cual es mi animal protector`);
                console.log(`Lo absorbe el Dementor, termina en la enfermeria`)
            }else{
                console.log(`Expecto Patronum¡¡ !Aparece, ${this.animalPatronus}`)
            }
        },

        enfrentarDementor:function(){
            this.animalPatronus = defensaContraLasArtesOscuras.generarAnimalPatronus();
            console.log('Un Dementor aparece');
            this.expectoPatronus();
        }
        
    };

    //_______________________________________________________________________

    //                              Paso 2
    //_______________________________________________________________________
        //                         Resumen
        // Creando el Objeto que contiene la información de los profesores

    //                          Instrucciones
    /* Es un año difícil en Hogwarts, ya que corren rumores que el 
    innombrable ha vuelto, y el famoso Harry Potter también ha 
    ingresado contigo ¡¡¡

    Crear Objeto de clases:
    tus clases y tus profesores:

    transformaciones: `Profesor Kevin Slughorn`,
    herbologia: `Profesor Maria Umbridge`,
    pociones: `Profesor Liliana McGonagall`,
    encantamientos: `Profesora Jackie`,
    defensaContraLasArtesOscuras: `Profesor Robinson Snape `,
    animalesMagicos: `Profesor David Filch`,
    historiaDeMagia: `Profesor Ronald Sprout` */

    const clases = {
        transformaciones: `Profesor Kevin Slughorn`,
        herbologia: `Profesor Maria Umbridge`,
        pociones: `Profesor Liliana McGonagall`,
        encantamientos: `Profesora Jackie`,
        defensaContraLasArtesOscuras: `Profesor Robinson Snape `,
        animalesMagicos: `Profesor David Filch`,
        historiaDeMagia: `Profesor Ronald Sprout`
    }
    //_______________________________________________________________________

    //                              Paso 3
    //_______________________________________________________________________

        /*                         Resumen
        Creando un Objeto contenedor de una función que selecciona la Casa*/

    //                          Instrucciones
    /* Inicia un nuevo día, es el día del sombrero seleccionador¡¡
    hay una gran cena de bienvenida, estas tu con todos tus compas, según tu 
    linaje y cualidades, el sombrero seleccionador te asignara una casa. */

    /* crear un objeto que sirva para escoger la casa al que pertenece el 
    estudiante, será condicional según tus cualidades y linaje.

    Gryffindor (`Valor, fuerza, audacia`
        Linaje: Mestizo, muggle, Sangre pura )
    Hufflepuff(`Justicia, Lealtad, Paciencia`
        Linaje: Mestizo, muggle)
    Ravenclaw(“Creatividad, Erudición, Inteligencia`
        Linaje: Mestizo, muggle, Sangre pura)
    Slytherin (`Ambición, Determinación, Astucia`
        Linaje: `Sangre Pura`) */
        
        
    const cena = {
        seleccionCasa(){
            if (estudianteHogwarts.cualidades.includes(`Valor` || `fuerza` || `audacia` && 
            estudianteHogwarts.linaje.includes(`Mestizo` || `muggle` || `Sangre pura`))){
                estudianteHogwarts.casa = `Gryffindor`;
            }

            else if (estudianteHogwarts.cualidades.includes(`Justicia` || `Lealtad` || `Paciencia`&& 
            estudianteHogwarts.linaje.includes(`Mestizo` || `muggle`))){
                estudianteHogwarts.casa = `Hufflepuff`;
            }

            else if (estudianteHogwarts.cualidades.includes(`Creatividad` || `Erudición` || 
            `Inteligencia` && 
            estudianteHogwarts.linaje.includes(`Mestizo` || `muggle` || `Sangre pura`))){
                estudianteHogwarts.casa = `Ravenclaw`;
            }
            
            else if (estudianteHogwarts.cualidades.includes(`Ambición` || `Determinación` || 
            `Astucia` && estudianteHogwarts.linaje.includes(`Sangre Pura`))){
                estudianteHogwarts.casa = `Slytherin`;
            }
        }
    };

    cena.seleccionCasa();

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

    //                              Paso 6
    //_______________________________________________________________________

    console.log(`           3. Mostrar información del estudiante`);
    console.log(`                       con los cambios.`);

    //                          Instrucciones
    //Mostrar información del estudiante con los cambios realizados a su Objeto

    console.log(`Información compconsta del estudiante:`);
    console.log(`Nombre: ${estudianteHogwarts.nombre}`);
    console.log(`Edad: ${estudianteHogwarts.edad}`);
    console.log(`Linaje: ${estudianteHogwarts.linaje}`);
    console.log(`Casa: ${estudianteHogwarts.casa}`);
    console.log(`Animal del Expecto Patronum:`, estudianteHogwarts.animalPatronus);
    console.log(`Cualidades:`, estudianteHogwarts.cualidades.join(`, `));
    console.log(`-----------------------------------------`);

//}

//     //_______________________________________________________________________

//     //                       Paso 7 - Adicional 1
//     //_______________________________________________________________________

//     /*                            Resumen
//         Creación de Objeto `clasePociones` como contenedor de la información 
//         acerca de los profesores y de la preparación de la poción Felix Felicis, 
//         y posteriormente la Creación de las Funciones `crearPocion()` y 
//         `cambioProfesor()`, que retornan resultados específicos tomando como 
//         referencia la información encontrada en el Objeto anteriormente 
//         mencionado*/

//     //                         Instrucciones
//     /* Crear un Objeto clasePociones, con su profesor, y horario, donde debe 
//     tener unos ingredientes: 2 Crisopos y 1 Tallo de Descurainia sophia, y 
//     tiempo de preparacion de 5 mins, si no, queda mal y hara daño, todo para 
//     crear la poción Felix Felicis.*/

//     // -------------------------- Objeto --------------------------

//     const clasePociones = {
//             datosProfesores: {
//                 Profesor1: {
//                     nombre: `Horace Slughorn`,
//                     horario: `6 am`,
//                 },

//                 Profesor2: {
//                     nombre: `Severus Snape`,
//                     horario: `7 am`,
//                 },
//             },

//             preparacionFelixFelicis: {
//                 ingredientes: {
//                     Crisopos: 2,
//                     TalloDescurainiaSophia: 1
//                 },
                
//                 tiempoPreparacion: 5,
//             },
//         }

//     // ------------------ Creación de la Poción ------------------

//     crearPocion = function(){
//         cantidadCrisopos = Number(prompt(`---- Creación de la Poción ---- 
//         \nIngresa la cantidad de Crisopos: `));
//         console.log(`Cantidad de Crisopos: ${cantidadCrisopos}`);

//         cantidadTallos = Number(prompt(`---- Creación de la Poción ---- 
//         \nIngresa la cantidad de Tallos de Descurainia sophia: `));
//         console.log(`Cantidad de Tallos: ${cantidadTallos}`);

//         cantidadTiempo = Number(prompt(`---- Creación de la Poción ---- 
//         \nIngresa la cantidad de Tiempo de Preparación: `));
//         console.log(`Cantidad de Tiempo: ${cantidadTiempo}`);

//         if (cantidadCrisopos === 2 && cantidadTallos === 1 && 
//             cantidadTiempo === 5){
//                 resultadoPocion = true
//             }
//             else{
//                 resultadoPocion = false
//             }
//     }

//     alert('Creación de la Poción Felix Felicis');
//     console.log('         4. Creación de la Poción Felix Felicis');

//     crearPocion();
        
//     // -------------------- Cambio Profesores --------------------

//     /* Luego de realizarla, la consecuencia será cambiar el profesor de pociones 
//     por el de animales.*/

//     cambioProfesor();

//     function cambioProfesor(){
//         if (resultadoPocion === false){
//             console.log('La poción falló, fuiste herido');
//             alert('La poción falló, fuiste herido');
//         }
//         else{
//             nuevoProfesor1 = clasePociones.datosProfesores.
//             Profesor1.nombre = `Silvanus Kettleburn`,

//             nuevoProfesor2 = clasePociones.datosProfesores.
//             Profesor2.nombre = `Rubeus Hagrid`,
            
//             console.log('La poción fue exitosa, Los profesores han sido cambiados');
//             alert('La poción fue exitosa, Los profesores han sido cambiados');

//             console.log
//             (`Horace Slughorn fue reemplazado por ${nuevoProfesor1}`);
//             alert
//             (`Horace Slughorn fue reemplazado por ${nuevoProfesor1}`);

//             console.log
//             (`Severus Snape fue reemplazado por ${nuevoProfesor2}`);
//             alert
//             (`Severus Snape fue reemplazado por ${nuevoProfesor2}`);
//         };  
//     }
// }

/*__________________________________________________________________________ */

/*                       Paso 8 - Adicional 2 */
/*__________________________________________________________________________ */

/*                             Resumen
        Uso del DOM para reemplazar datos, llamado por Id's, 
        actualización de datos con los valores almacenados en 
        los Id's, uso de funciones*/

/*                           Instrucciones 
    Realizar CSS de Hogwarts para la creación del primer objeto, realizarlo 
    en forma formulario, poner imagen avatar del estudiante y el entorno tema 
    de Hogwarts */

//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||