var light = document.querySelector("#light");
var glowing = document.querySelector("#glowing");
var overlay = document.querySelector("#overlay");
var span = document.querySelector('#hidden');
var h1 = document.querySelector("#glowing h1");
var btn = document.querySelector("#button");
var bg2 = document.querySelector("#background2");
var bg1 = document.querySelector("#bgoverlay");
var t1 = gsap.timeline();
var t2 = gsap.timeline();
var title = document.querySelector("#bg2-left h3");



glowing.addEventListener("click", function(){
    h1.style.opacity = "0";
    h1.style.cursor = "default";
    glowing.style.cursor = "default";
    // window.addEventListener('mousemove', function(details){
    //     let xValue = details.pageX;
    //     let yValue = details.pageY;
    
    //     setTimeout(function(){
    //         // light.style.top = yValue + 'px';
    //         light.style.left = xValue + 'px';
    //     }, 200)
    // })
    window.addEventListener('mousemove', function(details){
        let xValue = details.pageX;
        let yValue = details.pageY;
    
        setTimeout(function(){
            // light.style.top = yValue + 'px';
            glowing.style.left = xValue + 'px';
        }, 200)
    })
    
    
    overlay.addEventListener("mouseover", function(){
        span.style.opacity = "1";
    })
    overlay.addEventListener("mouseout", function(){
        span.style.opacity = "0";
    })
    
},)
function page1(){
    t1
    .from("#bg-left", {
        duration: 1.5,
        ease: 'Expo.easeInOut',
        opacity: 0
    })
    
    .from("#bg-center", {
        duration: 1.5,
        ease: "Expo.easeInOut",
        opacity: 0
    }, "-=1.5")
    
    .from("#bg-right", {
        duration: 1.5,
        ease: "Expo.easeInOut",
        opacity: 0
    }, "-=1.5")
    
    .from("#down", {
        duration: 1.5,
        ease: "Expo.easeInOut",
        opacity: 0
    }, "-=1.5") 
}

function page2(){
    t2
    .from("#bg2-left", {
        duration: 1.5,
        ease: 'Expo.easeInOut',
        opacity: 0
    })

    .from("#bg2-center", {
        duration: 1.5,
        ease: "Expo.easeInOut",
        opacity: 0
    }, "-=1.5")

    .from("#bg2-right", {
        duration: 1.5,
        ease: "Expo.easeInOut",
        opacity: 0
    }, "-=1.5")
}

page1();

btn.addEventListener("click", function(){
    bg1.style.transform = "translateY(-100%)";
    bg2.style.transform = "translateY(-100%)";
    page2();
})

title.addEventListener("click", function(){
    bg1.style.transform = "translateY(0%)";
    bg2.style.transform = "translateY(0%)";
    page1();
})

