function clock () {
    const areaDoRelogio = document.querySelector(".relogio");
    const horaAgora = new Date();
    const horas = horaAgora.getHours();
    const minutos = horaAgora.getMinutes();
    const segundos = horaAgora.getSeconds();
    const formatoHoras = horas.toString().padStart(2, "0"); 
    const formatoMinutos = minutos.toString().padStart(2, "0");
    const formatoSegundos = segundos.toString().padStart( 2, "0");

    areaDoRelogio.textContent = `${formatoHoras}: ${formatoMinutos}: ${formatoSegundos}` //${} place holders, se usa as ``
}



setInterval(clock, 1000)

let tituloDinamico = document.title;
        window.addEventListener("blur",() => {
            document.title = " mais uma rodada?"
        } );

        window.addEventListener("focus",() =>{
            document.title = "enche mais um!"

        });

//https://usagif.com/wp-content/uploads/gifs/car-driving-77.gif//
//background-image: url(https://i.pinimg.com/originals/a6/20/be/a620be88694cafb7e2cc0d8ba1418852.gif);
