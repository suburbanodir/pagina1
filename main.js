const wH =  document.documentElement.offsetHeight;
let baseZ = wH / 4  ;
let usZ = wH / 4 - 80; var srvZ = baseZ * 2 - 80; var galZ = baseZ * 3 - 80; 
let ctcZ = baseZ * 4 - 80;

/*------------ -general variables -----------------------*/
const usBt = document.getElementById('us-bt');
const srvBt = document.getElementById('srv-bt');
const galBt = document.getElementById('gal-bt');
const ctcBt = document.getElementById('ctc-bt');
/* -articles fading ---------*/
const leftUs = document.getElementById('at-left-us');
const righttUs = document.getElementById('at-right-us');


/* ------------- -checkbox variable FPh ------------------*/

const chk_bt =  document.getElementById('check-bt');
const mn_layer =  document.getElementById('menu-layer');



/*------------------- -menuFunctionsFPh   checkbox -----------------------*/

function mnC(){

    if(chk_bt.checked==false){
        chk_bt.checked=true;
        mn_layer.classList.remove('menu-vsb');
        mn_layer.classList.add('menu-hdd');
    }else{
        chk_bt.checked=false;
        mn_layer.classList.add('menu-vsb');
        mn_layer.classList.remove('menu-hdd');
    }

}


/*----------------- -effects -Funciton -----------------------*/



/*---------------------- listenersFunctionsFPc --------------------------------*/

function usS(){
    usBt.classList.add('us-active');
    srvBt.classList.remove('srv-active')
    galBt.classList.remove('gal-active')
    ctcBt.classList.remove('ctc-active')


}


function srvS(){
    srvBt.classList.add('srv-active');
    usBt.classList.remove('us-active')
    galBt.classList.remove('gal-active')
    ctcBt.classList.remove('ctc-active')
}


function galS(){
    galBt.classList.add('gal-active');
    usBt.classList.remove('us-active')
    srvBt.classList.remove('srv-active')
    ctcBt.classList.remove('ctc-active')
}


function ctcS(){
    ctcBt.classList.add('ctc-active');
    usBt.classList.remove('us-active')
    srvBt.classList.remove('srv-active')
    galBt.classList.remove('gal-active')
}


/*---------------------- listeners --------------------------------*/

window.addEventListener("scroll", function(){
    console.log(window.scrollY)
    if(window.scrollY < usZ){
        usS()        
    }else if (window.scrollY > usZ && window.scrollY < srvZ ){
        srvS()
    }else if(window.scrollY > srvZ && window.scrollY < galZ  ){
        galS()
    }else if(window.scrollY > galZ){
        ctcS()
    }

})


window.addEventListener('load', function(){
    usBt.classList.add('us-active');
    righttUs.classList.add('fade-on-ce');
    leftUs.classList.add('fade-on-ce');

   


})

/*
window.addEventListener('load', function() {}
document.addEventListener('DOMContentLoaded', iniciarEfectosVisuales);*/
/*intro-ce*/




