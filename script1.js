let rightBtn = document.querySelector(".right");
let leftBtn = document.querySelector(".left");
let slidesCont = document.getElementById('slideContainer');
let slides = document.querySelectorAll(".slide");
let titleCont = document.querySelector(".titleContainer");
let titles = document.querySelectorAll(".title");
let buttons = document.querySelectorAll(".buttons > div > span");
let counterDOM = document.querySelector("footer > span");
let counter = 1;

rightBtn.addEventListener('click', ()=>{
    if(counter < 8){
        for(let i = 0; i < slides.length; i++){
            slides[i].style.zIndex = `-${slides.length - i}`;
            titles[i].classList.remove("lastActive");
            if(slides[i].classList.contains("active")){
                slides[i].style.transform = `translateX(-${(i * 100) + 50}vw)`;
                slides[i].style.transition = "transform 1.125s cubic-bezier(0,0.4,0,1)";
                slides[i].classList.remove("active");
                titles[i].classList.remove("activeT");
                titles[i].classList.add("lastActive");
            }
            else{
                slides[i].style.transform = `translateX(-${(counter * 100)}vw)`;
                slides[i].style.transition = "transform 1.25s cubic-bezier(0,0.4,0,1)";
            }
            setTimeout(()=>{
                slides[counter - 1].classList.add("active");
                titles[counter - 1].classList.add("activeT");

            },0);
        }  
        buttons.forEach(button=>{
            button.style.transform = `rotate(${90 + (90*(counter - 1))}deg)`;
        });  
        counterDOM.style.transform = "translateY(-20px)";
        counterDOM.style.opacity = "0";
        counter++;
        setTimeout(()=>{
            counterDOM.style.transform = "translateY(20px)";
            setTimeout(()=>{
                counterDOM.innerHTML = `${counter}`
                counterDOM.style.opacity = "1";
                counterDOM.style.transform = "translateY(0)";
            },200)
        },200);
    }
});

leftBtn.addEventListener('click', ()=>{
    if(counter > 1){
        buttons.forEach(button=>{
            button.style.transform = `rotate(${-90 + (90*(counter - 1))}deg)`;
        });
        counterDOM.style.transform = "translateY(20px)";
        counterDOM.style.opacity = "0";
        counter--;
        setTimeout(()=>{
            counterDOM.style.transform = "translateY(-20px)";
            setTimeout(()=>{
                counterDOM.innerHTML = `${counter}`
                counterDOM.style.opacity = "1";
                counterDOM.style.transform = "translateY(0)";
            },200)
        },200);
        for(let i = 0; i < slides.length; i++){
            slides[i].style.zIndex = `-${i}`;
            titles[i].classList.remove("lastActive");
            if(slides[i].classList.contains("active")){
                slides[i].style.transform = `translateX(-${(i * 100) - 50}vw)`;
                slides[i].style.transition = "transform 1.125s cubic-bezier(0,0.4,0,1)";
                slides[i].classList.remove("active");
                titles[i].classList.remove("activeT");
                titles[i].classList.add("lastActive");
            }
            else{
                slides[i].style.transform = `translateX(-${(counter - 1)* 100}vw)`;
                slides[i].style.transition = "transform 1.25s cubic-bezier(0,0.4,0,1)";
                slides[i].style.zIndex = "1";
            }
            setTimeout(()=>{
                slides[counter - 1].classList.add("active");
                titles[counter - 1].classList.add("activeT");

            },0);
        }  
    }
});

