let body = document.querySelector("body");
let smallSlidesCont = document.querySelector(".smallSlides");
let smallSlides = document.querySelectorAll(".smallSlide");
let slideCount = 0;
let scrollCount = 0;
let mouseDown = false;
let mouseStart;
let mouseFinish;
let deltaMouse;
let initialPosX;
windowWidth = window.innerWidth;

window.addEventListener('mousewheel',(event)=>{
    if(event.deltaY > 0){
        if(scrollCount === 0){
            slidesCont.style.opacity = "0";
            slidesCont.style.transitionDelay = "0s";
            buttons.forEach(button=>{
                button.style.fontSize = "0";
            });
            setTimeout(()=>{
                leftBtn.style.display = "none";
                rightBtn.style.display = "none";
                let initialPosMatrix = new WebKitCSSMatrix(window.getComputedStyle(smallSlidesCont).transform);
                initialPosX = initialPosMatrix.m41;
            },500);
            titles[counter-1].classList.remove("activeT");
            titles[counter-1].classList.add("lastActive");
            smallSlidesCont.style.transform = `translateX(${83 - (17.5 * (counter - 1))}vw) translateY(-20vh)`;
            smallSlidesCont.style.transitionDelay = "0.4s";
            smallSlidesCont.style.bottom = "";
            smallSlidesCont.style.left = "";
            smallSlidesCont.style.width = "135vw";
            smallSlidesCont.style.height = "360px";
            smallSlidesCont.style.gap = "30px";
            scrollCount = 1;
        }
    }
});

window.addEventListener('keydown', (event)=>{
    if(event.key == "Escape"){
        if(scrollCount == 1){
            smallSlidesCont.style.transitionDelay = "0s";
            smallSlidesCont.style.transform = ``;
            smallSlidesCont.style.width = "30vw";
            smallSlidesCont.style.height = "30px";
            smallSlidesCont.style.gap = "5px";
            slidesCont.style.opacity = "1";
            slidesCont.style.transitionDelay = "0.4s";
            leftBtn.style.display = "";
            rightBtn.style.display = "";
            setTimeout(()=>{
                buttons.forEach(button=>{
                    button.style.fontSize = "100%";
                });
            },400);    
            titles[counter-1].classList.remove("lastActive");
            titles[counter-1].classList.add("activeT");
            scrollCount = 0;
        }
    }
});

window.addEventListener('resize', ()=>{
    windowWidth = window.innerWidth;
    // console.log(windowWidth);
});

window.addEventListener('mousedown', (event) => {
    mouseDown = true;
    if(mouseDown){
        mouseStart = event.clientX;
        // console.log(mouseStart);
        smallSlidesCont.style.transitionDelay = "";
    }
});
window.addEventListener('mouseup', (event) => {
    mouseDown = false;
    mouseFinish = event.clientX;
    // console.log(mouseFinish);
});


window.addEventListener('mousemove', (event)=>{
    if(mouseDown){
        if(scrollCount == 1){
            mouseFinish = event.clientX;
            deltaMouse = (mouseFinish - mouseStart);
            let matrix = new WebKitCSSMatrix(window.getComputedStyle(smallSlidesCont).transform);
            prevPos = matrix.m41;
            let moveBy = prevPos - deltaMouse;
            let deltaMousePercentage = deltaMouse * 100 / windowWidth;
            let prevPosPercentage = prevPos * 100 / windowWidth;
            let moveByPercentage = prevPosPercentage + deltaMousePercentage;
            if(moveBy < initialPosX){
                console.log("pp");
            }
            smallSlidesCont.style.transform = `translateX(${moveByPercentage}vw) translateY(-20vh)`;
        }
    }
});