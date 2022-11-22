const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(() => {
    let dataHoje = new Date();
    let horaHoje =  dataHoje.getHours();
    let minutosHoje =  dataHoje.getMinutes();
    let segundosHoje =  dataHoje.getSeconds();

    if(horaHoje < 10) horaHoje = '0' + horaHoje;
    if(minutosHoje < 10) minutosHoje = '0' + minutosHoje;
    if(segundosHoje < 10) segundosHoje = '0' + segundosHoje;

    horas.textContent = horaHoje;
    minutos.textContent = minutosHoje;
    segundos.textContent = segundosHoje;
});