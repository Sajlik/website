let nav =document.querySelector(".navbar");
window.onscroll=function(){
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-srolled");
    }else{
        nav.classList.remove("header-srolled");
    }
}
let navbar= document.querySelectorAll(".nav-link");
let navCollapse=document.querySelector('.navbar-collapse.collapse')
navbar.forEach(function(e){
   e.addEventListener("click",function(){
    navCollapse.classList.remove("show");
   })
})