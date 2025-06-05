const panels = document.querySelectorAll('.panel')

let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".panel-wrapper",     // wrap all your panels in a parent
      start: "top top",
      end: `+=${panels.length*100}%`,                 // 100% per panel (adjust if you add/remove panels)
      scrub: true,
      pin: true,
    }
  });
  
  // Panel 1 - from bottom
  tl.from(".from-bottom", {
    y: 200,
    opacity: 0,
    duration: 0.05
  })
  
  // Panel 2 - from left
  .from(".from-left", {
    x: -200,
    opacity: 0,
    duration: 0.05
  })
  
  // Panel 3 - from right
  .from(".from-right", {
    x: 200,
    opacity: 0,
    duration: 0.05
  });


  //   svg scroll
gsap.defaults({ease: "none"});
const pulses = gsap.timeline({
  defaults: {
    autoAlpha: 1,
    scale: 2,
    transformOrigin: 'center',
    ease: "elastic(2.5, 1)"
  }
})
.to(".ball02, .text01", {}, 0.2)
.to(".ball03, .text02", {}, 0.33)
.to(".ball04, .text03", {}, 0.46);

const main = gsap.timeline({
  defaults: {duration: 1},
  scrollTrigger: {
    trigger: "#svg-stage",
    scrub: true,
    start: "top center",
    end: "bottom center"
  }
})
.to(".ball01", {duration: 0.01, autoAlpha: 1})
.from(".theLine", {drawSVG: 0}, 0)
.to(".ball01", {
  motionPath: {
    path: ".theLine",
    align: ".theLine",
    alignOrigin: [0.5, 0.5]
  }
}, 0)
.add(pulses, 0);



// horizontal scroll
const container = document.querySelector('.container_horizontal');
        const panels_horizontal = gsap.utils.toArray('.panel_horizontal');
        const panelWidth = window.innerWidth;
        
        // Set container width to accommodate all panels
        gsap.set(container, {
            width: panelWidth * panels_horizontal.length
        });
        
        // Create horizontal scroll animation
        let scrollTween = gsap.to(panels_horizontal, {
            xPercent: -100 * (panels_horizontal.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".container_horizontal",
                pin: true,
                scrub: 1,
                snap: 1/(panels_horizontal.length - 1),
                end: () => "+=" + (container.scrollWidth - window.innerWidth)
            }
        });
        