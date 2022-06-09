
function generarCartas(){
    let tablero = document.getElementById("tablero");
    let tarjetas=[];
    for (let i = 0; i < 12; i++){
        tarjetas.push(`
            <div class="area_tarjeta">
                <div class="tarjeta">
                    <div class="cara delante">
                        <p>?</p>
                    </div>
                    <div class="cara debajo">
                        <img src="imagenes/pingüino.png"></img>
                    </div>
                </div>
            </div>
            `)
    }
    console.log(tarjetas);
    tablero.innerHTML = tarjetas.join(" ");
}
const nuevo = document.querySelector(".nuevo");
nuevo.addEventListener("click", generarCartas);
