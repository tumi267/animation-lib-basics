const orangeSection = document.querySelector('.orange');
const redSection = document.querySelector('.red');

gsap.set(redSection, { zIndex: 1 });

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: orangeSection,

    end: "+=100%",
    scrub: 0.5,
    pin: true,
    pinSpacing: false,
    anticipatePin: 1,
    markers: true
  }
});

// Just bring red up to cover orange
tl.to(redSection, {
    yPercent: 0,
    ease: "none"
  });