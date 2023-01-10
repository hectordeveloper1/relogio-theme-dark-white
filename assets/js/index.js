const hora = document.querySelector('#hora');
const minuto = document.querySelector('#minuto');
const segundo = document.querySelector('#segundo');

const relogio = setInterval(function time(){
let dataAtual = new Date();
let horas = dataAtual.getHours();
let minutos = dataAtual.getMinutes();
let segundos = dataAtual.getSeconds();

if (horas < 10) horas = '0' + horas;

if (minutos < 10) minutos  = '0' + minutos;

if (segundos < 10) segundos  = '0' + segundos;

hora.innerHTML = `${horas}`;
minuto.innerHTML = `${minutos}`;
segundo.innerHTML = `${segundos}`;
    
})

function trocar() {
    const body = document.querySelector('body');
    const fundoRelogio = document.querySelector('.container');
    const fundoHoras = document.querySelector('#horasss');
    const fundoHoras2 = document.querySelector('#horasss2');
    const fundoHoras3 = document.querySelector('#horasss3');
    const button = document.querySelector('button');

    
    if (body.classList.contains('body-black')){
        body.classList.remove('body-black')
    } else {
        body.classList.add('body-black')
    }

    if (fundoRelogio.classList.contains('container-black')){
        fundoRelogio.classList.remove('container-black')
    } else {
        fundoRelogio.classList.add('container-black')
    }

    if (fundoHoras.classList.contains('fundo-horas-white')){
        fundoHoras.classList.remove('fundo-horas-white')
    } else {
        fundoHoras.classList.add('fundo-horas-white')
    }

    if (fundoHoras2.classList.contains('fundo-horas-white')){
        fundoHoras2.classList.remove('fundo-horas-white')
    } else {
        fundoHoras2.classList.add('fundo-horas-white')
    }

    if (fundoHoras3.classList.contains('fundo-horas-white')){
        fundoHoras3.classList.remove('fundo-horas-white')
    } else {
        fundoHoras3.classList.add('fundo-horas-white')
    }

    if (button.classList.contains('black')){
        button.classList.remove('black')
        button.classList.add('white')

    } else {
        button.classList.add('black')
        button.classList.remove('white')

    }


}