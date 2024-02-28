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

window.addEventListener('mousedown', (event) => {
    mouseDown = true;
    if(mouseDown){
        mouseStart = event.clientX;
        smallSlidesCont.style.transitionDelay = "";
    }
});
window.addEventListener('mouseup', (event) => {
    // if(scrollCount == 1){
    //     console.log(event.clientX);
    //     mouseFinish = event.clientX;
    //     deltaMouse = mouseFinish - mouseStart;
    //     console.log(deltaMouse);
    //     let matrix = new WebKitCSSMatrix(window.getComputedStyle(smallSlidesCont).transform);
    //     prevPos = matrix.m41;
    //     smallSlidesCont.style.transform = `translateX(${prevPos + deltaMouse}px) translateY(-20vh)`;
    // }
    mouseDown = false;
    mouseFinish = event.clientX;
});


window.addEventListener('mousemove', (event)=>{
    if(mouseDown){
        if(scrollCount == 1){
            mouseFinish = event.clientX;
            deltaMouse = mouseFinish - mouseStart;
            let matrix = new WebKitCSSMatrix(window.getComputedStyle(smallSlidesCont).transform);
            prevPos = matrix.m41;
            let moveBy = prevPos + deltaMouse;
            if(moveBy){
                smallSlidesCont.style.transform = `translateX(${moveBy}px) translateY(-20vh)`;
            }
        }
    }
});