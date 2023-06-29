var svgcircle = document.getElementById("svgcircle");

var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");
var step3 = document.getElementById("step3");
var step4 = document.getElementById("step4");
var step5 = document.getElementById("step5");

var main = document.getElementById("main");

var userBox = document.getElementById("userBox");

step1.addEventListener('click', ()=>{
    svgcircle.style.strokeDashoffset = "1004";
    main.style.backgroundImage = "url(images/img2.jpg)"
    userBox.style.top = "-350px";
});
step2.addEventListener('click', ()=>{
    svgcircle.style.strokeDashoffset = "753";
    main.style.backgroundImage = "url(images/img3.jpg)"
    userBox.style.top = "-800px";
});
step3.addEventListener('click', ()=>{
    svgcircle.style.strokeDashoffset = "502"
    main.style.backgroundImage = "url(images/img4.jpg)"
    userBox.style.top = "-1250px";
});
step4.addEventListener('click', ()=>{
    svgcircle.style.strokeDashoffset = "251";
    main.style.backgroundImage = "url(images/img5.jpg)"
    userBox.style.top = "-1700px";
});
step5.addEventListener('click', ()=>{
    svgcircle.style.strokeDashoffset = "0"
    main.style.backgroundImage = "url(images/img1.jpg)";
    userBox.style.top = "100px";
});

main.style.backgroundImage = "url(images/img1.jpg)";








