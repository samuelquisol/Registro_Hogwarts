/* Asignar casa - Cena*/

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
    Linaje: Mestizo, Muggle, Sangre pura )
Hufflepuff(`Justicia, Lealtad, Paciencia`
    Linaje: Mestizo, Muggle)
Ravenclaw(“Creatividad, Erudición, Inteligencia`
    Linaje: Mestizo, Muggle, Sangre pura)
Slytherin (`Ambición, Determinación, Astucia`
    Linaje: `Sangre Pura`) */

    const cena = {
        seleccionCasa(){
            if (estudianteHogwarts.cualidades.includes(`Valor` || `fuerza` || `audacia` && 
            estudianteHogwarts.linaje.includes(`Mestizo` || `Muggle` || `Sangre pura`))){
                estudianteHogwarts.casa = `Gryffindor`;
            }
    
            else if (estudianteHogwarts.cualidades.includes(`Justicia` || `Lealtad` || `Paciencia`&& 
            estudianteHogwarts.linaje.includes(`Mestizo` || `Muggle`))){
                estudianteHogwarts.casa = `Hufflepuff`;
            }
    
            else if (estudianteHogwarts.cualidades.includes(`Creatividad` || `Erudición` || 
            `Inteligencia` && 
            estudianteHogwarts.linaje.includes(`Mestizo` || `Muggle` || `Sangre pura`))){
                estudianteHogwarts.casa = `Ravenclaw`;
            }
            
            else if (estudianteHogwarts.cualidades.includes(`Ambición` || `Determinación` || 
            `Astucia` && estudianteHogwarts.linaje.includes(`Sangre Pura`))){
                estudianteHogwarts.casa = `Slytherin`;
            }
        }
    };
    
    cena.seleccionCasa();
