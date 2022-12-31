let top_btn= document.getElementById('btn-scroll');

let home = document.getElementById('scrollhome');
let about = document.getElementById('scrollabout');
let Symptoms = document.getElementById('scrollsymptoms');
let prevent = document.getElementById('scrollPREVENTION');
let teatment = document.getElementById('scrolltransmission');
let FAQ = document.getElementById('scrollfqa');
let news = document.getElementById('scrollnews');

// sections ids

let homeSection = document.getElementById('home');
let aboutTheDisease = document.getElementById('about');
let symptomsOfCorona = document.getElementById('symptoms');
let prevention = document.getElementById('PREVENTION');
let treatment = document.getElementById('transmission');
let faq = document.getElementById('fqa');
// let News = document.getElementById('news');

window.onscroll = function(){
    if(window.scrollY>100){
        top_btn.style.display = 'block'
    }else{
        top_btn.style.display = 'none'
    }

    if(window.scrollY>=homeSection.offsetTop){
        home.classList.add('change-Color')
    }else{
        home.classList.remove('change-Color')
    }

    if(window.scrollY>=aboutTheDisease.offsetTop){
        about.classList.add('change-Color')
        home.classList.remove('change-Color')
    }else{
        about.classList.remove('change-Color')
    }
    if(window.scrollY>=symptomsOfCorona.offsetTop){
        Symptoms.classList.add('change-Color')
        about.classList.remove('change-Color')
        home.classList.remove('change-Color')
    }else{
        Symptoms.classList.remove('change-Color')
    }
    if(window.scrollY>=prevention.offsetTop){
        prevent.classList.add('change-Color')
        Symptoms.classList.remove('change-Color')
        about.classList.remove('change-Color')
        home.classList.remove('change-Color')
    }else{
        prevent.classList.remove('change-Color')
    }
    if(window.scrollY>=treatment.offsetTop){
        teatment.classList.add('change-Color')
        prevent.classList.remove('change-Color')
        Symptoms.classList.remove('change-Color')
        about.classList.remove('change-Color')
        home.classList.remove('change-Color')
    }else{
        teatment.classList.remove('change-Color')
    }
    if(window.scrollY>=faq.offsetTop){
        FAQ.classList.add('changeColor')
        teatment.classList.remove('change-Color')
        prevent.classList.remove('change-Color')
        Symptoms.classList.remove('change-Color')
        about.classList.remove('change-Color')
        home.classList.remove('change-Color')
    }else{
        FAQ.classList.remove('change-Color')
    }

}
top_btn.onclick = function(){
    scroll({
        left:0,
        top:0,
        behavior:"smooth"
    })
}
// scroll btn


let menu = document.querySelector('.container .navbar .navbar-nav')
let bars = document.getElementById('bars')
bars.addEventListener('click',function(){
    if(menu.style.display == 'flex'){
        menu.style.display = 'none'
    }else{
        menu.style.display = 'flex'
    }
})