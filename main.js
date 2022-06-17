// Constantes
const facil = document.querySelector(".facil");
const intermedio = document.querySelector(".intermedio");
const dificil = document.querySelector(".dificil");
const especial = document.querySelector(".especial");
const ganar = document.querySelector(".ganar");
const perder= document.getElementById("perder");
//variables generales
let eleccion=[];
let imagenFacil=[];
var contadorFacil=0;
let imagenIntermedio=[];
var contadorIntermedio=0;
let contador=0;
let imagenDificil=[];
// Variables crono
let min= 00;
let seg= 00;
let cent= 00;
let corriendo = null;


//CRONOMETRO

function tiempo(){
    minutos=(document.getElementById('minutos')).innerHTML = min + " m";
    segundos=(document.getElementById('segundos')).innerHTML = seg + " s";
    centesimas=(document.getElementById('centesimas')).innerHTML = cent;
}
//funcion para que el cronometro funcione
function crono(){
    if(corriendo){
        reiniciar();
    }
    else{
        setTimeout(iniciarCrono,3000);
    }
}
// Reiniciar el cronometro
function reiniciar(){
    min = 0;
    seg = 0;
    cent = 0;
}
// Detenerlo
function detener(){
    clearInterval(corriendo);
    corriendo = null;
};

// Iniciar
function iniciarCrono (){
    const sumarMinuto = () => {

		if(min < 99) min ++;
	}
	const sumarSegundo = () => {

		if(seg === 59){
			seg = 0;
			sumarMinuto();
		}
		else{
			seg++;
		}
	}
    const incrementar = () =>{
        if(cent === 99){
            cent = 0;
            sumarSegundo();
        }
        else{
            cent ++;
        }
        tiempo();
    }
    corriendo = setInterval(incrementar,10);
}

tiempo();

// NIVELES DE JUEGO

// Nivel facil (menos fotos)
function generarImagenFacil(){
    imagenFacil = [
        '<img src="imagenes/pingüino.png"></img>',
        '<img src="imagenes/abeja.png"></img>',
        '<img src="imagenes/conejo.png"></img>',
        '<img src="imagenes/loro.png"></img>',
        '<img src="imagenes/oveja.png"></img>',
        '<img src="imagenes/periquito.png"></img>',
    ]
}

function generarCartasFacil(){
    generarImagenFacil();
    let tablero = document.getElementById("tablero");
    let tarjetas=[];
    for (let i = 0; i < 12; i++){
        tarjetas.push(`
            <div class="area_tarjeta" onclick="elegirTarjetaFacil(${i})">
                <div class="tarjeta" id="tarjeta${i}">
                    <div class="cara delante">
                        <p>?</p>
                    </div>
                    <div class="cara debajo">
                        ${imagenFacil[0]}
                    </div>
                </div>
            </div>
            `)
            if(i%2==1){
                imagenFacil.splice(0,1);
            }
    }
    tarjetas.sort(()=>Math.random()-0.5);
    //console.log(tarjetas);
    tablero.innerHTML = tarjetas.join("");
    
}

function elegirTarjetaFacil(i){
    let tarjeta = document.getElementById("tarjeta"+i);
    //console.log(tarjeta);
    if(tarjeta.style.transform != "rotateY(180deg)"){
        tarjeta.style.transform= "rotateY(180deg)";
        eleccion.push(i);
        console.log(eleccion, eleccion.length);
        
    }
    if(eleccion.length == 2 ){
        eliminarFacil(eleccion);
        eleccion = [];
        
    }
    
}

function eliminarFacil(eleccion){
    setTimeout(()=>{
        let debajo1= document.getElementById("tarjeta"+eleccion[0]);
        let debajo2= document.getElementById("tarjeta"+eleccion[1]);
        if (debajo1.innerHTML != debajo2.innerHTML){
            let tarjeta1= document.getElementById("tarjeta"+eleccion[0]);
            let tarjeta2= document.getElementById("tarjeta"+eleccion[1]);
            tarjeta1.style.transform = "rotateY(0deg)";
            tarjeta2.style.transform = "rotateY(0deg)";
        }
        else{
            debajo1.style.background = "yellow";
            debajo2.style.background = "yellow";
            contadorFacil ++;
            console.log(contadorFacil);
            if(contadorFacil ===6){
                ganar.style.display="block";
                contadorFacil=0;
                detener();
            }
        }
    }, 1000);
}

// Nivel intermedio (más fotos)
function generarImagenIntermedio(){
    imagenIntermedio = [
        '<img src="imagenes/pingüino.png"></img>',
        '<img src="imagenes/abeja.png"></img>',
        '<img src="imagenes/conejo.png"></img>',
        '<img src="imagenes/loro.png"></img>',
        '<img src="imagenes/oveja.png"></img>',
        '<img src="imagenes/periquito.png"></img>',
        '<img src="imagenes/ballena.png"></img>',
        '<img src="imagenes/cangrejo.png"></img>',
        '<img src="imagenes/elefante.png"></img>',
        '<img src="imagenes/fish.png"></img>',
        '<img src="imagenes/gato.png"></img>',
        '<img src="imagenes/insecto.png"></img>',
    ]
}

function generarCartasIntermedio(){
    generarImagenIntermedio();
    let tablero = document.getElementById("tablero");
    let tarjetas=[];
    for (let i = 0; i < 24; i++){
        tarjetas.push(`
            <div class="area_tarjeta" onclick="elegirTarjetaIntermedio(${i})">
                <div class="tarjeta" id="tarjeta${i}">
                    <div class="cara delante">
                        <p>?</p>
                    </div>
                    <div class="cara debajo">
                        ${imagenIntermedio[0]}
                    </div>
                </div>
            </div>
            `)
            if(i%2==1){
                imagenIntermedio.splice(0,1);
            }
    }
    tarjetas.sort(()=>Math.random()-0.5);
    //console.log(tarjetas);
    tablero.innerHTML = tarjetas.join("");   
}

function elegirTarjetaIntermedio(i){
    let tarjeta = document.getElementById("tarjeta"+i);
    //console.log(tarjeta);
    if(tarjeta.style.transform != "rotateY(180deg)"){
        tarjeta.style.transform= "rotateY(180deg)";
        eleccion.push(i);
        console.log(eleccion, eleccion.length);
        
    }
    if(eleccion.length == 2 ){
        eliminarIntermedio(eleccion);
        eleccion = [];        
    }   
}

function eliminarIntermedio(eleccion){
    setTimeout(()=>{
        let debajo1= document.getElementById("tarjeta"+eleccion[0]);
        let debajo2= document.getElementById("tarjeta"+eleccion[1]);
        if (debajo1.innerHTML != debajo2.innerHTML){
            let tarjeta1= document.getElementById("tarjeta"+eleccion[0]);
            let tarjeta2= document.getElementById("tarjeta"+eleccion[1]);
            tarjeta1.style.transform = "rotateY(0deg)";
            tarjeta2.style.transform = "rotateY(0deg)";
        }
        else{
            debajo1.style.background = "yellow";
            debajo2.style.background = "yellow";
            contadorIntermedio ++;
            console.log(contadorIntermedio);
            if(contadorIntermedio===12){
                ganar.style.display="block";
                contadorIntermedio=0;
                detener();
            }
        }
    }, 1000);
}

// Nivel dificil (todas las fotos)
function generarImagen(){
    imagenDificil= [
        '<img src="imagenes/pingüino.png"></img>',
        '<img src="imagenes/abeja.png"></img>',
        '<img src="imagenes/conejo.png"></img>',
        '<img src="imagenes/loro.png"></img>',
        '<img src="imagenes/oveja.png"></img>',
        '<img src="imagenes/periquito.png"></img>',
        '<img src="imagenes/ballena.png"></img>',
        '<img src="imagenes/cangrejo.png"></img>',
        '<img src="imagenes/elefante.png"></img>',
        '<img src="imagenes/fish.png"></img>',
        '<img src="imagenes/gato.png"></img>',
        '<img src="imagenes/insecto.png"></img>',
        '<img src="imagenes/pez.png"></img>',
        '<img src="imagenes/rata.png"></img>',
        '<img src="imagenes/serpiente.png"></img>',
        '<img src="imagenes/tiburon.png"></img>',
        '<img src="imagenes/tigre.png"></img>',
        '<img src="imagenes/vaca.png"></img>',
    ]
}

function generarCartas(){
    generarImagen();
    let tablero = document.getElementById("tablero");
    let tarjetas=[];
    for (let i = 0; i < 34; i++){
        tarjetas.push(`
            <div class="area_tarjeta" onclick="elegirTarjeta(${i})">
                <div class="tarjeta" id="tarjeta${i}">
                    <div class="cara delante">
                        <p>?</p>
                    </div>
                    <div class="cara debajo">
                        ${imagenDificil[0]}
                    </div>
                </div>
            </div>
            `)
            if(i%2==1){
                imagenDificil.splice(0,1);
            }
    }
    tarjetas.sort(()=>Math.random()-0.5);
    //console.log(tarjetas);
    tablero.innerHTML = tarjetas.join("");   
}

function elegirTarjeta(i){
    let tarjeta = document.getElementById("tarjeta"+i);
    //console.log(tarjeta);
    if(tarjeta.style.transform != "rotateY(180deg)"){
        tarjeta.style.transform= "rotateY(180deg)";
        eleccion.push(i);
        console.log(eleccion, eleccion.length);
        
    }
    if(eleccion.length == 2 ){
        eliminar(eleccion);
        eleccion = [];        
    }   
}

function eliminar(eleccion){
    setTimeout(()=>{
        let debajo1= document.getElementById("tarjeta"+eleccion[0]);
        let debajo2= document.getElementById("tarjeta"+eleccion[1]);
        if (debajo1.innerHTML != debajo2.innerHTML){
            let tarjeta1= document.getElementById("tarjeta"+eleccion[0]);
            let tarjeta2= document.getElementById("tarjeta"+eleccion[1]);
            tarjeta1.style.transform = "rotateY(0deg)";
            tarjeta2.style.transform = "rotateY(0deg)";
        }
        else{
            debajo1.style.background = "yellow";
            debajo2.style.background = "yellow";
            contador ++;
            console.log(contador);
            if(contador===17){
                ganar.style.display="block";
                contador=0;
                detener();
            }
        }
    }, 1000);
}

// Nivel muy dificil (jugamos contra el cronometro)

//CRONOMETRO

function tiempoD(){
    segundos=(document.getElementById('segundos')).innerHTML = seg + " s";
    centesimas=(document.getElementById('centesimas')).innerHTML = cent;
}
//funcion para que el cronometro funcione
function cronoD(){
    if (corriendo){
        perder.style.display="block";
    }
    if(corriendo){
        reiniciar();
    }
    else{
        setTimeout(iniciarCronoD,3000);
    }
}
// Reiniciar el cronometro
function reiniciarD(){
    seg = 5;
    cent = 0;
}

// Iniciar
function iniciarCronoD (){
	const restarSegundo = () => {
        seg --;
        if(seg === -1){
            seg = 0;
            cent=0;
            detener();
        }
	}
    const incrementar = () =>{
        if(cent === 0){
            cent = 99;
            restarSegundo();
        }
        else{
            cent --;
        }
        tiempo();
    }
    corriendo = setInterval(incrementar,10);
}
//Fin
function finalizarCrono(){
    perder.style.display = "block";

}
function finCrono(){
    if(corriendo){
        reiniciar();
    }
    else{
        setTimeout(finalizarCrono,8000);
    }
}


function generarCartasCrono(){
    generarImagenIntermedio();
    let tablero = document.getElementById("tablero");
    let tarjetas=[];
    for (let i = 0; i < 24; i++){
        tarjetas.push(`
            <div class="area_tarjeta" onclick="elegirTarjetaCrono(${i})">
                <div class="tarjeta" id="tarjeta${i}">
                    <div class="cara delante">
                        <p>?</p>
                    </div>
                    <div class="cara debajo">
                        ${imagenIntermedio[0]}
                    </div>
                </div>
            </div>
            `)
            if(i%2==1){
                imagenIntermedio.splice(0,1);
            }
    }
    tarjetas.sort(()=>Math.random()-0.5);
    //console.log(tarjetas);
    tablero.innerHTML = tarjetas.join("");   
}

function elegirTarjetaCrono(i){
    let tarjeta = document.getElementById("tarjeta"+i);
    //console.log(tarjeta);
    if(tarjeta.style.transform != "rotateY(180deg)"){
        tarjeta.style.transform= "rotateY(180deg)";
        eleccion.push(i);
        console.log(eleccion, eleccion.length);
        
    }
    if(eleccion.length == 2 ){
        eliminarCrono(eleccion);
        eleccion = [];        
    }   
}

function eliminarCrono(eleccion){
    setTimeout(()=>{
        let debajo1= document.getElementById("tarjeta"+eleccion[0]);
        let debajo2= document.getElementById("tarjeta"+eleccion[1]);

        if (debajo1.innerHTML != debajo2.innerHTML){
            let tarjeta1= document.getElementById("tarjeta"+eleccion[0]);
            let tarjeta2= document.getElementById("tarjeta"+eleccion[1]);
            tarjeta1.style.transform = "rotateY(0deg)";
            tarjeta2.style.transform = "rotateY(0deg)";
        }
        else{
            debajo1.style.background = "yellow";
            debajo2.style.background = "yellow";
            contadorIntermedio ++;
            console.log(contadorIntermedio);
            if(contadorIntermedio===12){
                ganar.style.display="block";
                contadorIntermedio=0;
                detener();
            }
        }
    }, 1000);
}



  
    
//Hacer click en los niveles de dificultad

facil.addEventListener("click", ()=>{
    reiniciar();
    generarCartasFacil();
    if (ganar.style.display="block" && contadorFacil == 0){
        ganar.style.display="none";
        detener();
    }
    if(ganar.style.display="none"){
        detener();
    }
    contadorFacil=0;
    crono();
});


intermedio.addEventListener("click", ()=>{
    reiniciar();
    generarCartasIntermedio();
    if (ganar.style.display="block" && contadorIntermedio == 0){
        ganar.style.display="none";
        detener();
    }
    if(ganar.style.display="none"){
        detener();
    }
    contadorIntermedio=0;
    crono();
});


dificil.addEventListener("click", ()=>{
    reiniciar();
    generarCartas();
    if (ganar.style.display="block" && contador == 0){
        ganar.style.display="none";
        detener();
    }
    if(ganar.style.display="none"){
        detener();
    }
    contador=0;
    crono();
});


especial.addEventListener("click", ()=>{
    reiniciarD();
    generarCartasCrono();
    if (ganar.style.display="block" && contadorIntermedio == 0){
        ganar.style.display="none";
        detener();
    }
    if(ganar.style.display="none"){
        detener();
    }
    // MIRAR POR AQUII *********************************************************************************************************************************************************************************************************************************
    contadorIntermedio=0;
    cronoD();
    finCrono();
});