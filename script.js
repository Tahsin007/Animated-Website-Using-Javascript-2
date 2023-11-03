function locomotiveAnimation(){
    const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
}
locomotiveAnimation();



function gsapAnimation(){
    var tl = gsap.timeline();

    gsap.from("#left-nav,#nav p,#right-nav",{
        y:50,
        stagger:0.3,
        // delay:0.5,
        duration:1,
        opacity:0,
    });
    // tl.from("#hero #middle-content h1,#hero #middle-content h2",{
    //     y:100,
    //     // delay:0.5,
    //     duration:0.9,
    //     stagger:0.3,
    //     opacity:0,
    // });
    gsap.from(".left",{
        y:50,
        // delay:0.5,
        stagger:0.3,
        opacity:0,
        duration:1
    })
}

gsapAnimation();

function sheryAnimation(){
    Shery.textAnimate("#hero #middle-content h1,#hero #middle-content h2", {
        style: 2,
        // y: 10,
        // delay: 0.1,
        duration: 1,
        delay:0.3,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        multiplier: 0.1,
});

Shery.imageEffect("#middle-content img",{
    style:3,
    // debug:true,

})

Shery.imageEffect("#left-content img",{
    style:2,
    // debug:true,
})
Shery.imageEffect("#img-part img",{
    style:3,
    // debug:true,
})
Shery.imageEffect("#section4 #bg-img",{
    style:4,
    gooey:true
    // debug:true,
})

}


sheryAnimation();

document.querySelector('#inner-part button').addEventListener("mouseover",function(){
    gsap.to("#section5 video",{
        opacity:1,
        duration:1.5,
        eas:Power4,
    })
})

document.querySelector('#inner-part button').addEventListener("mouseleave",function(){
    gsap.to("#section5 video",{
        opacity:0,
        duration:1.5,
        eas:Power4,
    })
})


function colorAnimation(){
    var x = document.querySelector("#section2 p");
    var y = document.querySelector("#section2");

    //first image
    document.querySelector('#onespan').addEventListener("mouseover",function(){
        y.style.backgroundColor="#0F6DAD";
        x.style.color="white";
    })
    document.querySelector('#onespan').addEventListener("mouseleave",function(){
        y.style.backgroundColor="white";
        x.style.color="black";

    })
    //second image

    document.querySelector('#twospan').addEventListener("mouseover",function(){
        y.style.backgroundColor="#E9B2AD";
        // x.style.color="black";
    })
    document.querySelector('#twospan').addEventListener("mouseleave",function(){
        y.style.backgroundColor="white";
        // x.style.color="black";

    })

    //third image
    document.querySelector('#threespan').addEventListener("mouseover",function(){
        y.style.backgroundColor="#02382E";
        x.style.color="white";
    })
    document.querySelector('#threespan').addEventListener("mouseleave",function(){
        y.style.backgroundColor="white";
        x.style.color="black";

    })
}

colorAnimation();

