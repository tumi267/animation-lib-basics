// Fade in when element comes into view
gsap.from(".fade-element", {
    scrollTrigger: {
      trigger: ".fade-element",
      start: "top 80%",
      end:"top top",
      scrub:true
    },
    opacity: 0,
    duration: 1
  });

  // Slide in from left
gsap.from(".slide-in-left", {
    scrollTrigger: {
      trigger: ".slide-in-left",
      start: "top 80%",
      end:"top top",
      scrub:true
    },
    x: -100,
    opacity: 0,
    duration: 0.8
  });
  
  // Slide in from right
  gsap.from(".slide-in-right", {
    scrollTrigger: {
      trigger: ".slide-in-right",
      start: "top 80%",
      end:"top top",
      scrub:true
    },
    x: 100,
    opacity: 0,
    duration: 0.8
  });

  // Grow from 0 scale
gsap.from(".scale-up", {
    scrollTrigger: {
      trigger: ".scale-up",
      start: "top 80%",
      end:"top top",
      scrub:true
    },
    scale: 0,
    duration: 1,
    ease: "back.out(1.7)"
  });

  // Spin into view
gsap.from(".rotate", {
    scrollTrigger: {
      trigger: ".rotate",
      start: "top 80%",
      end:"top top",
      scrub:true
    },
    rotation: 180,
    opacity: 0,
    duration: 1
  });

  // Animate list items one after another
gsap.from(".stagger-item", {
    scrollTrigger: {
      trigger: ".stagger-container",
      start: "top 80%",
      end:"top top",
      scrub:true
    },
    y: 50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2
  });

  // Pin element for duration of scroll
gsap.to(".pin-element", {
    scrollTrigger: {
      trigger: ".pin-element",
      pin: true,
      start: "top top",
      end: "+=500",
      scrub:true
    }
  });

  // Change background color on scroll
gsap.to(".color-change", {
    scrollTrigger: {
      trigger: ".color-change",
      start: "top center",
      end: "bottom center",
      scrub: true
    },
    backgroundColor: "#4a00e0",
    color: "#ffffff"
  });

  // Animate progress bar width
gsap.to(".progress-bar", {
    scrollTrigger: {
      trigger: ".progress-container",
      start: "top 90%",
      end: "top 1%",
      scrub: 3,
    },
    width: "100%"
  });

  // Add/remove class on scroll
ScrollTrigger.create({
    trigger: ".toggle-element",
    start: "top center",
    end: "bottom center",
    onEnter: () => document.body.classList.add("dark-mode"),
    onLeaveBack: () => document.body.classList.remove("dark-mode")
  });


