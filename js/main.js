//BOTONES
const botonMostrar = document.getElementById("mostrarMenu");
const botonCerrar = document.getElementById("cerrar");

//MENU EMERGENTE
const menu = document.getElementById("menu");

botonMostrar.addEventListener("click", function () {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});
botonCerrar.addEventListener("click", function () {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});



//Cambia de color y tamaño los cuadros de los nombres(Es de prueba)
const playerTurn = document.getElementById("siguiente");
const player_1 = document.getElementById("player-1");
const player_2 = document.getElementById("player-2");

let lightPurple = '#534f9c';
let darkPurple = '#534f9ca5';

playerTurn.addEventListener('click',playerTurns)

function playerTurns(){
    addtexttest()
    if (player_1.style.scale == 1.2) {
        player_1.style.scale = 1
        player_2.style.scale = 1.2
        
        player_1.style.backgroundColor = darkPurple;
        player_2.style.backgroundColor = lightPurple;
    }else{
        player_2.style.scale = 1
        player_1.style.scale = 1.2   
        
        player_1.style.backgroundColor = lightPurple;
        player_2.style.backgroundColor = darkPurple;
    }
};

//Agrega texto al log(Es de prueba)

const log = document.getElementById('game-log');
function addtexttest(){
    log.insertAdjacentHTML('beforeend',`
    <h6>- Turno de KKKK</h6>
    `)
}