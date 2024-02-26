let rightBtn = document.querySelector(".right");
let leftBtn = document.querySelector(".left");
let slidesCont = document.getElementById('slideContainer');
let slides = document.querySelectorAll(".slide");
let buttons = document.querySelectorAll(".buttons > div > span");
let counter = 1;

rightBtn.addEventListener('click', ()=>{
    if(counter < 8){
        for(let i = 0; i < slides.length; i++){
            slides[i].style.zIndex = `-${slides.length - i}`;
            if(slides[i].classList.contains("active")){
                slides[i].style.transform = `translateX(-${(i * 100) + 50}vw)`;
                slides[i].style.transition = "transform 0.6s cubic-bezier(0,0.4,0,1)";
                slides[i].classList.remove("active");
            }
            else{
                slides[i].style.transform = `translateX(-${(counter * 100)}vw)`;
                slides[i].style.transition = "transform 0.75s cubic-bezier(0,0.4,0,1)";
            }
            setTimeout(()=>{
                slides[counter - 1].classList.add("active");
            },0);
        }  
        buttons.forEach(button=>{
            button.style.transform = `rotate(${90 + (90*(counter - 1))}deg)`;
        });  
        counter++;
    }
});

leftBtn.addEventListener('click', ()=>{
    if(counter > 1){
        buttons.forEach(button=>{
            button.style.transform = `rotate(${-90 + (90*(counter - 1))}deg)`;
        });
        counter--;
        for(let i = 0; i < slides.length; i++){
            slides[i].style.zIndex = `-${i}`;
            if(slides[i].classList.contains("active")){
                slides[i].style.transform = `translateX(-${(i * 100) - 50}vw)`;
                slides[i].style.transition = "transform 0.675s cubic-bezier(0,1,1,1)";
                slides[i].classList.remove("active");
            }
            else{
                slides[i].style.transform = `translateX(-${(counter - 1)* 100}vw)`;
                slides[i].style.transition = "transform 0.75s cubic-bezier(0,1,1,1)";
                slides[i].style.zIndex = "1";
            }
            setTimeout(()=>{
                slides[counter - 1].classList.add("active");
            },0);
        }  
    }
});