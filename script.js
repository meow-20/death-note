const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function firstPageAnim(){
    var tl = gsap.timeline()

    tl.from(".nav",{
        y:-50,
        opacity:0,
        duration:1,
        delay:.2,
        rotate:30
    })
    tl.to(".bounded-element",{
        y:0,
        delay:-0.5,
        duration:1,
        ease: Expo.easeInOut,
        stagger:.2
    })
    tl.from(".opacity",{
        y:-10,
        opacity:0,
        stagger:0.2,
        delay:-1
    })
}

function circleChaptaKaro(){
    //define default scale value

    let xscale = 1;
    let yscale = 1;

    let xprev = 0;
    let yprev = 0;

    document.addEventListener("mousemove", function(dets){
        let xdiff = dets.x - xprev;
        let ydiff = dets.y - xprev;

        xprev = dets.x;
    });
}
let cp = document.querySelector(".circlepointer");
function mousePointerFollower(){
    document.addEventListener("mousemove", function(dets){
        // console.log(dets.clientX,dets.clientY);
        cp.style.transfrom = `translate(${dets.x}px, ${dets.y}px)`;
    });
}
mousePointerFollower();
firstPageAnim();