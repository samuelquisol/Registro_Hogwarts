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

const estudianteHogwarts = [
    {
        imagen: `samuel.jpg`,
        nombre: `Samuel`,
        edad: 18,
        familia: `Quintero Solís`,
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
    }
];

//--------------------------------------------------------------------------------------------

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


//--------------------------------------------------------------------------------------------

//_______________________________________________________________________

//                           2_App.js
//_______________________________________________________________________

/* Objeto Receptor de Datos Ingresados */
const datosIngresados = {
    nombreDatoIngresado:``,
    edadDatoIngresado:``,
    familiaDatoIngresado:``,
    linajeDatoIngresado:``,
    cualidadesDatoIngresado:``
}