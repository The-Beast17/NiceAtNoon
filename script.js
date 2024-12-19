gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



/************************************************************************************* */


gsap.from(".hero-section h1", {
    y :100,
    opacity : 0,
    duration : .75,
    stagger : 0.2,//it takes element one by one
});

gsap.to(".image-section",{
   Transform : "translateX(-100%)",
   scrollTrigger :{
    trigger : ".image-section",
    scroller : "main",
    start : "top 90%",
    end : "top -100%",
    scrub : 0.2,
   }
})



let main = document.querySelector("main");
let nav = document.querySelector("nav");

main.addEventListener("wheel" ,function (dets) {
//   if(dets.deltaY > 0){
//     nav.style.transform = "translateY(-100%)";
//   }else{
//     nav.style.transform = "translateY(0%)";
//   }

/**********using gsap*********** */
if(dets.deltaY > 0){
    gsap.to("nav",{
        y:-100,
        duration : 0.6,
    })
}else{
    gsap.to("nav",{
        y:0,
        duration : 0.6,
    }) 
}
});

gsap.from(".section-para p", {
    y:30,
    opacity :0,
    duration : 1,
    stagger : 0.1,
    scrollTrigger:{
        trigger : ".section-para p",
        scroller : "main",
        start : "top 80%",
        end : "top 70%",
        scrub: 3,
    }
});

 var tl = gsap.timeline();

tl.from(".section-2 h1", {
    y:30,
    opacity :0,
    duration : 1,
    stagger : 0.1, 
    scrollTrigger:{
        trigger : ".section-2 h1",
        scroller : "main",
        start : "top 80%",
        end : "top 70%",
        scrub :1,
    }
});


tl.from(".section-2 .inner-button , .section-2 .btn-container",{
    y:30,
    opacity :0,
    duration : 1,
    stagger : 0.1,
    scrollTrigger:{
        trigger : ".section-2 .inner-button , .section-2 .btn-container",
        scroller : "main",
        start : "top 80%",
        end : "top 70%",
        scrub : 1,
    }
});

tl.from(".section-3",{
    y:30,
    opacity :0,
    duration : 1,
    stagger : 0.1,
    scrollTrigger:{
        trigger : ".section-3",
        scroller : "main",
        start : "top 90%",
        end : "top 80%",
        scrub : 1,
    }
})

tl.from(".section-3 .content p , .section-3 .content h3 , .section-3 .content button",{
    y:30,
    opacity :0,
    duration : 1,
    stagger : 0.5,
    scrollTrigger:{
        trigger : ".section-3 .content p , .section-3 .content h3 , .section-3 .content button",
        scroller : "main",
        start : "top 90%",
        end : "top 80%",
        scrub : 2,
    }
})
tl.from(".section-4",{
    y:30,
    opacity :0,
    duration : 1,
    stagger : 0.1,
    scrollTrigger:{
        trigger : ".section-4",
        scroller : "main",
        start : "top 80%",
        end : "top 70%",
        scrub : 1,
    }
})
tl.from(".section-4 .content p , .section-4 .content h3 , .section-4 .content button",{
    y:30,
    opacity :0,
    duration : 2,
    stagger : 1,
    scrollTrigger:{
        trigger : ".section-4 .content p , .section-4 .content h3 , .section-4 .content button ",
        scroller : "main",
        start : "top 80%",
        end : "top 70%",
        scrub : 1,
    }
})

tl.from(".section-4 .bottom",{
    y:30,
    opacity :0,
    duration : 1,
    stagger : 0.1,
    scrollTrigger:{
        trigger : ".section-4 .bottom",
        scroller : "main",
        start : "top 80%",
        end : "top 70%",
        scrub : 1,
    }
})

tl.from(".section-5 , .heading  ",{
    y:30,
    opacity :0,
    duration : 2,
    stagger : 1,
    scrollTrigger:{
        trigger : ".section-5 , .heading ",
        scroller : "main",
        start : "top 80%",
        end : "top 70%",
        scrub : 1,
    }
})
tl.from(".section-5 .content ",{
    y:30,
    opacity :0,
    duration : 1,
    stagger : 1,
    scrollTrigger:{
        trigger : ".section-5 .content",
        scroller : "main",
        start : "top 90%",
        end : "top 80%",
        scrub : 1,
    }
})

tl.from(".section-5 .section-5-para p", {
    y:30,
    opacity :0,
    duration : 1,
    stagger : 0.1,
    scrollTrigger:{
        trigger : ".section-5 .section-5-para p ",
        scroller : "main",
        start : "top 70%",
        end : "top 60%",
        scrub: 2,
    }
});

tl.from(".our-belif , .Brand-heading",{
    y:30,
    opacity :0,
    duration : 1,
    stagger : 2,
    scrollTrigger:{
        trigger : ".our-belif , .Brand-heading",
        scroller : "main",
        start : "top 70%",
        end : "top 60%",
        scrub : 2,
    }
})
tl.from(".smily",{
    y:60,
    opacity :0,
    duration : 1,
    stagger : 2,
    scrollTrigger:{
        trigger : ".smily",
        scroller : "main",
        start : "top 70%",
        end : "top 60%",
        scrub : 1,
    }
})

tl.from(".image-2-section img",{
    y:30,
    opacity :0,
    duration : 1,
    stagger : 2,
    scrollTrigger:{
        trigger : ".image-2-section img",
        scroller : "main",
        start : "top 70%",
        end : "top 60%",
        scrub : 1,
    }
});

tl.from(".section-6 h1 , .section-6 hr , .section-6 .content , .section-6 .img-box",{
    y:30,
    opacity :0,
    duration : 1,
    stagger : 0.1,
    scrollTrigger:{
        trigger : ".section-6 h1 , .section-6 hr , .section-6 .content , .section-6 .img-box",
        scroller : "main",
        start : "top 80%",
        end : "top 70%",
        scrub : 1,
    }
});

tl.from("footer img",{
    y:30,
    opacity :0,
    duration : 1,
    stagger : 0.1,
    scrollTrigger:{
        trigger : "footer img",
        scroller : "main",
        start : "top 95%",
        end : "top 80%",
        scrub : 1,
    }
});




