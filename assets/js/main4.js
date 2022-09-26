/* ==== HEADER ==== */

window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);

})


function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

let number = document.getElementById("number");
let number1 = document.getElementById("html");
let number2 = document.getElementById("js");
let number3 = document.getElementById("c");
let counter = 0;
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

setInterval(() => {

    if(counter == 50){
        clearInterval();
    }
    else{
        counter += 1;
        number.innerHTML =  "<h1><span>CSS</span><br>"+counter+"%</h1>";
    }

}, 38);

setInterval(() => {

    if(counter1 == 70){
        clearInterval();
    }
    else{
        counter1 += 1;
        number1.innerHTML =  "<h1><span>HTML</span><br>"+counter1+"%</h1>";
    }

}, 28);


setInterval(() => {

    if(counter2 == 35){
        clearInterval();
    }
    else{
        counter2 += 1;
        number2.innerHTML =  "<h1><span>JS</span><br>"+counter2+"%</h1>";
    }

}, 56);

setInterval(() => {

    if(counter3 == 60){
        clearInterval();
    }
    else{
        counter3 += 1;
        number3.innerHTML =  "<h1><span>C/C++</span><br>"+counter3+"%</h1>";
    }

}, 33);


        