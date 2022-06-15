//variables
let eleccion=[];
let imagenFacil=[];
let imagenIntermedio=[];
let imagenDificil=[];
let contador=0;

//modo facil
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
            <div class="area_tarjeta" onclick="elegirTarjeta(${i})">
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
            contador ++;
            console.log(contador);
            if(contador===6){
                ganar = document.querySelector(".ganar");
                ganar.style.display="block";
                contador=0;
            }
        }
    }, 1000);
}

//modo intermedio
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
        '<img src="imagenes/pez.png"></img>',
        '<img src="imagenes/rata.png"></img>',
        '<img src="imagenes/serpiente.png"></img>',
        '<img src="imagenes/tiburon.png"></img>',
        '<img src="imagenes/tigre.png"></img>',
        '<img src="imagenes/vaca.png"></img>',
    ]
}

function generarCartas(){
    generarImagenIntermedio();
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
                ganar = document.querySelector(".ganar");
                ganar.style.display="block";
                ganar.style.fontSize="200px";
                contador=0;
            }
        }
    }, 1000);
}

//modo dificil


//llamadas_constantes
const facil = document.querySelector(".facil");
facil.addEventListener("click", ()=>{
    generarCartasFacil();
    if (ganar.style.display="block"){
        ganar.style.display="none";
    }
});

const intermedio = document.querySelector(".intermedio");
intermedio.addEventListener("click", ()=>{
    generarCartas();
    if (ganar.style.display="block"){
        ganar.style.display="none";
    }
});