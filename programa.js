const arreglo = [//AQUI HE CREADO EL ARREGLO QUE CONTIENE LOS DATOS A MOSTRAR DE LA INFORMACION DE LOS EDFICIOS//
{foto:'imagenes/edificio1.webp',empresa:'UrbanArtisans',costo:'$150,000',medida:'41,20 m²'}, //AQUI HE DEFINIDO LAS 4 VARIABLES A MOSTRAR QUE SON FOTO,EMPRESA, COSTO Y MEDIDA
{foto:'imagenes/edificio2.webp',empresa:'ApexConstructs',costo:'$170,500',medida:'48,35 m²'},
{foto:'imagenes/edificio3.webp',empresa:'InnovArchitects',costo:'$185,900',medida:'55,10 m²'},
{foto:'imagenes/edificio4.webp',empresa:'Construcciones L & L',costo:'$199,899',medida:'70,25 m²'},
{foto:'imagenes/edificio5.webp',empresa:'House Constructions',costo:'$230,550',medida:'76,41 m²'},
{foto:'imagenes/edificio6.webp',empresa:'Constructora Mateo',costo:'$290,100',medida:'88,11 m²'},
{foto:'imagenes/edificio7.webp',empresa:'Constructora Jiménez ',costo:'$310,700',medida:'112,15 m²'},
{foto:'imagenes/edificio8.webp',empresa:'Valle Edificante', costo:'$345,120',medida:'121,23 m²'},
{foto:'imagenes/edificio9.webp',empresa:'Amazonía Proyectos',costo:'$361,990',medida:'136,44 m²'},
{foto:'imagenes/edificio10.webp',empresa:'Constructora Bosque',costo:'$408,520',medida:'150,17 m²'}
];

let currentIndex = 0; //SE UTILIZA CURRENT INDEX PARA INICIALIZAR EN LA POSICION 0 DEL ARREGLO POR LO QUE MOSTRARA EL PRIMER OBJETO DEL ARREGLO
const cambiador = document.getElementById('cambiador'); //AQUI SE UTILIZO LOS ELEMENTOS DOM PARA LLAMAR A LAS ACCIONES POR EL NOMBRE DEL ID DECLARADO EN EL HTML
const empresa = document.getElementById('empresa');
const costo = document.getElementById('costo');
const medida = document.getElementById('medida');
const alerta = document.getElementById('alerta');



function actualizacion(index) { //ESTA FUNCION HACE QUE SE ACTUALICE EL CONTENIDO DE LA PAGINA CON LA INFORMACION DEL EDIFICIO QUE CAMBIE CON LOS BOTONES
    const actualizado = arreglo[index];cambiador.src = actualizado.foto;
    empresa.textContent = actualizado.empresa; //DEFINIMOS QUE MUESTRE EL CONTENIDO EN TEXTO DENTRO DE LOS ELEMENTOS CON ESE ID
    costo.textContent = actualizado.costo;
    medida.textContent = actualizado.medida;
}


//AQUI SE CREA EL EVENT LISTENER PARA EL BOTON VOLVER LA CUAL NOS PERMITIRA RETROCEDER EN LA LISTA DEL ARREGLO DE LOS EDIFICIOS 
document.getElementById('volver').addEventListener('click', () => { //DECLARAMOS QUE SE DE LA FUNCION DANDOLE CLICK AL ELEMENTO CON EL NOMBRE VOLVER
    if (currentIndex > 0) { //AQUI SE DECLARA UNA CONDICIONAL PARA PODER VERIFICAR SI EL INDICA ACTUAL ES MAYOR QUE 0 PARA QUE EL USUARIO NO PUEDA RETROCEDER EN LA LISTA DE EDIFICIOS
        currentIndex--;
        actualizacion(currentIndex); //LLAMA A LA FUNCION ACTUALIZADA
        alerta.classList.add('prueba'); //DE CUMPLIRSE SE OCULTA EL MENSAJE DECLARADO COMO "PRUEBA" EN EL HTML
    } else {
        alerta.textContent = 'Ya no puedes volver'; //AQUI DEFINIMOS QUE SALTE LA ALERTA EN CASO SE CUMPLA LA CONDICION
        alerta.classList.remove('prueba'); // Y AQUI LA QUITAMOS EN CASO EL USUARIO AVANCE Y YA NO INTENTE RETROCEDER
    }
});

//AQUI SE CREA EL EVENT LISTENER PARA EL BOTON SIGUIENTE LA CUAL NOS PERMITIRA AVANZAR EN LA LISTA DEL ARREGLO DE LOS EDIFICIOS 
document.getElementById('siguiente').addEventListener('click', () => {  //DECLARAMOS QUE SE DE LA FUNCION DANDOLE CLICK AL ELEMENTO CON EL NOMBRE SIGUIENTE
    if (currentIndex < arreglo.length -1) { //AQUI SE DECLARA UNA CONDICIONAL PARA PODER VERIFICAR QUE EL INDICE ACTUAL NO SE INCREMENTE MAS ALLA DEL ULTIMO INDICE DEL ARREGLO PARA QUE EL USUARIO NO PUEDA AVANZAR UNA VEZ LLEGADO AL LIMITE EN LA LISTA DE EDIFICIOS
        currentIndex++;
        actualizacion(currentIndex); //LLAMA A LA FUNCION ACTUALIZADA
        alerta.classList.add('prueba');  //DE CUMPLIRSE SE OCULTA EL MENSAJE DECLARADO COMO "PRUEBA" EN EL HTML
    } else {
        alerta.textContent = 'Ya no puedes continuar';//AQUI DEFINIMOS QUE SALTE LA ALERTA EN CASO SE CUMPLA LA CONDICION
        alerta.classList.remove('prueba'); // Y AQUI LA QUITAMOS EN CASO EL USUARIO RETROCEDA Y YA NO INTENTE AVANZAR
    }
});



