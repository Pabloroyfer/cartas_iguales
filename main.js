let eleccion=[];
let imagen=[];
let contador=0;

function generarImagen(){
    imagen = [
        '<img src="imagenes/pingüino.png"></img>',
        '<img src="imagenes/abeja.png"></img>',
        '<img src="imagenes/conejo.png"></img>',
        '<img src="imagenes/loro.png"></img>',
        '<img src="imagenes/oveja.png"></img>',
        '<img src="imagenes/periquito.png"></img>',
    ]
}

function generarCartas(){
    generarImagen();
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
                        ${imagen[0]}
                    </div>
                </div>
            </div>
            `)
            if(i%2==1){
                imagen.splice(0,1);
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
            if(contador===6){
                alert("ganaste");
            }
        }
    }, 1000);
}



const nuevo = document.querySelector(".nuevo");
nuevo.addEventListener("click", generarCartas);

