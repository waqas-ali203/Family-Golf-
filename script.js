var crsr = document.querySelector("#cursor");
var blr = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x+30 + "px";
  crsr.style.top = dets.y + "px";
  blr.style.left = dets.x - 150 + "px";
  blr.style.top = dets.y - 150 + "px";
});

var navLinks = document.querySelectorAll("#nav h4");
navLinks.forEach(function(elem){
  // console.log(elem)
  elem.addEventListener("mouseenter",function(){
    crsr.style.scale= 1.5
    crsr.style.border="1px solid #fff"
    crsr.style.backgroundColor = "transparent"
  })
  elem.addEventListener("mouseleave",function(){
    crsr.style.scale= 1
    crsr.style.border="0px solid #95C11E"
    crsr.style.backgroundColor = "#95C11E"
  })
})

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "80px",
  scrollTrigger: {
    trigger: "#nav",
    scroll: "body",
    // markers : true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1, // jsut for retrieve old value ..like when scroll down color change to black and when scroll up then origional color retrieve
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroll: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2, 
  },
});

gsap.from("#about-us img,#about-us-in",{
  y:90,
  opacity : 0,
  duration: 1,
  // stagger:0.4, // animate one by one element/ tag
  scrollTrigger:{
    trigger:"#about-us",
    scroll : "body",
    // markers:true,
    start : "top 60%",
    end : "top 55%",
    scrub:1
  }
});
gsap.from(".card",{
  scale:0.8,
  opacity : 0,
  duration: 1,
  stagger:0.4, // animate one by one element/ tag
  scrollTrigger:{
    trigger:"#about-us",
    scroll : "body",
    // markers:false,
    start : "top 70%",
    end : "top 65%",
    scrub:1
  }
});

gsap.from("#colon1",{
  y:-70,
  x:-70,
  scrollTrigger:{
    trigger:"#colon1",
    scroll:"body",
    start:"top 55%",
    end:"top 45%",
    scrub:4
  }
});
gsap.from("#colon2",{
  y:70,
  x:70,
  scrollTrigger:{
    trigger:"#colon1",
    scroll:"body",
    start:"top 55%",
    end:"top 45%",
    scrub:4
  }
})
gsap.from("#page4 h1",{
  y:50,
  scrollTrigger:{
    trigger:"#page4 h1",
    scroll:"body",
    start:"top 85%",
    end:"top 75%",
    scrub:3
  }

})