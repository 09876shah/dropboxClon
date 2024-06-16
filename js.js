function nav2(){
    var nav2 = document.querySelector("#nav2");
var pd = document.querySelector("#nav .box0 .left .cont0 li:first-child");
var sl = document.querySelector("#nav .box0 .left .cont0 li:nth-child(2)");
var con1 = document.querySelector("#nav2 .cont1");
var con2 = document.querySelector("#nav2 .cont2");
var cont = document.querySelector("#nav2 .content .con1");
var test = 0;
var tl = gsap.timeline();

tl.to(nav2, {
    opacity: 1,
    y: 0
});
tl.pause();

pd.addEventListener("mousemove", function() {
    console.log("SHAHZAIN");
    tl.play();
    con1.style.opacity = 1;
    prd();
    
    if(test===0){
        con2.style.opacity = 0;
    }
});
pd.addEventListener("mouseleave", function() {
    console.log("SHAHZAIN");
    tl.reverse();
    con1.style.opacity = 0;
});

sl.addEventListener("mousemove", function() {
    console.log("SHAHZAIN");
    tl.play();
    con2.style.opacity = 1;
    sol();
    if(test===0){
        con1.style.opacity = 0;
    }
});
sl.addEventListener("mouseleave", function() {
    console.log("SHAHZAIN");
    tl.reverse();
    con2.style.opacity = 0;
});


}
var tl2=gsap.timeline();
nav2();
var hanbtn = document.querySelector("#nav .box0 .right2 i");
var hand = document.querySelector("#hand");
// var handclose=document.querySelector("#hand .box0 .right2 handbtn i")
var handclose=document.querySelector("#nav .handbtn i")

tl2.to(hand, {
    right: 0
});
tl2.pause();

hanbtn.addEventListener("click", function() {
tl2.play();
    hanbtn.style.opacity = 0; 
    handclose.style.opacity = 1; 
    console.log("SHAHZAIN");
});
handclose.addEventListener("click",function(){
    tl2.reverse();
    hanbtn.style.opacity = 1; 
    handclose.style.opacity = 0; 
})
