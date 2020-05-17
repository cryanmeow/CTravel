const textDesc = document.querySelectorAll(".textDesc div");
const imgDesc = document.querySelectorAll(".imgDesc img");
const nextSlide = document.querySelector(".nextSlide");
const prevSlide = document.querySelector(".prevSlide");
const toggleMenu = document.querySelector('.menuIcon');
const navbar = document.querySelector('#navbar');
let index = 0;
let i = 0;

nextSlide.addEventListener('click', function(){
  imgDesc[index].classList.remove('active');
  index = (index + 1) % imgDesc.length;
  imgDesc[index].classList.add('active');
});
prevSlide.addEventListener('click', function(){
  imgDesc[index].classList.remove('active');
  index = (index - 1 + imgDesc.length) % imgDesc.length;
  imgDesc[index].classList.add('active');
});
nextSlide.addEventListener('click', function(){
  textDesc[i].classList.remove('active');
  i = (i + 1) % textDesc.length;
  textDesc[i].classList.add('active');
});
prevSlide.addEventListener('click', function(){
  textDesc[i].classList.remove('active');
  i = (i - 1 + textDesc.length) % textDesc.length;
  textDesc[i].classList.add('active');
});
toggleMenu.addEventListener('click', function(){
  navbar.classList.toggle('active');
})
// const imgDesc = document.getElementById("imgDesc");
