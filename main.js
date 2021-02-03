const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const box7 = document.querySelector(".box7");
const box8 = document.querySelector(".box8");

const omAli = document.querySelector(".omAli");
const londonFries = document.querySelector(".londonFries");
const bread = document.querySelector(".bread");
const pizaa = document.querySelector(".pizaa");
const corn = document.querySelector(".corn");
const marshmello = document.querySelector(".marshmello");
const marshmelloSm = document.querySelector(".marshmelloSm");
const belila = document.querySelector(".belila");



box1.addEventListener('click',() => {
    omAli.style.display = "flex";
    londonFries.style.display = "none";
    bread.style.display = "none";
    pizaa.style.display = "none";
    corn.style.display = "none";
    marshmello.style.display = "none";
    marshmelloSm.style.display = "none";
    belila.style.display = "none";
});
box2.addEventListener('click',() => {
    londonFries.style.display = "flex";
    omAli.style.display = "none";
    bread.style.display = "none";
    pizaa.style.display = "none";
    corn.style.display = "none";
    marshmello.style.display = "none";
    marshmelloSm.style.display = "none";
    belila.style.display = "none";
});
box3.addEventListener('click',() => {
    bread.style.display = "flex";
    londonFries.style.display = "none";
    omAli.style.display = "none";
    pizaa.style.display = "none";
    corn.style.display = "none";
    marshmello.style.display = "none";
    marshmelloSm.style.display = "none";
    belila.style.display = "none";
});
box4.addEventListener('click',() => {
    pizaa.style.display = "flex";
    londonFries.style.display = "none";
    omAli.style.display = "none";
    bread.style.display = "none";
    corn.style.display = "none";
    marshmello.style.display = "none";
    marshmelloSm.style.display = "none";
    belila.style.display = "none";
});
box5.addEventListener('click',() => {
    corn.style.display = "flex";
    londonFries.style.display = "none";
    omAli.style.display = "none";
    bread.style.display = "none";
    pizaa.style.display = "none";
    marshmello.style.display = "none";
    marshmelloSm.style.display = "none";
    belila.style.display = "none";
});
box6.addEventListener('click',() => {
    marshmello.style.display = "flex";
    londonFries.style.display = "none";
    omAli.style.display = "none";
    bread.style.display = "none";
    pizaa.style.display = "none";
    corn.style.display = "none";
    marshmelloSm.style.display = "none";
    belila.style.display = "none";
});
box7.addEventListener('click',() => {
    marshmelloSm.style.display = "flex";
    londonFries.style.display = "none";
    omAli.style.display = "none";
    bread.style.display = "none";
    pizaa.style.display = "none";
    corn.style.display = "none";
    marshmello.style.display = "none";
    belila.style.display = "none";
});
box8.addEventListener('click',() => {
    belila.style.display = "flex";
    londonFries.style.display = "none";
    omAli.style.display = "none";
    bread.style.display = "none";
    pizaa.style.display = "none";
    corn.style.display = "none";
    marshmello.style.display = "none";
    marshmelloSm.style.display = "none";
});