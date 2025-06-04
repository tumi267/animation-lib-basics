window.addEventListener("load", () => {
    // Roll Reveal (Top to Bottom)
    const tl3 = gsap.timeline();
    gsap.set(".roll_reveal img", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
    });
    tl3.to(".roll_reveal img", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power3.out"
    });
  
    // Roll Reveal Reverse (Bottom to Top)
    const tl4 = gsap.timeline();
    gsap.set(".roll_reveal_revese img", {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
    });
    tl4.to(".roll_reveal_revese img", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power3.out"
    });
  
    // Flip Reveal
    let num = 3;
    gsap.to(".flip_reveal img", {
      rotationY: `+=${360 * num}`,
      stagger: 0.2,
      duration: 2,
      ease: "back.out(1.7)",
      transformPerspective: 2000,
      onComplete: addFinalWobble
    });
    function addFinalWobble() {
        gsap.to(".flip_reveal img", {
          rotationY: "+=10",
          duration: 0.5,
          yoyo: true,
          repeat: 3,
          ease: "sine.inOut"
        });
      }
    // Slide In Left
    gsap.from(".slide_in_left img", {
      x: -300,
      opacity: 0,
      duration: 2,
      ease: "power3.out"
    });
  
    // Slide In Right
    gsap.from(".slide_in_right img", {
      x: 300,
      opacity: 0,
      duration: 2,
      ease: "power3.out"
    });
  
    // Fade In
    gsap.from(".fade_in img", {
      opacity: 0,
      duration: 6,
      ease: "power2.out"
    });
  });
  //zoom
  gsap.fromTo(".zoom img",
    {
      scale: 1
    },
    {
      scale: 1.3,
      duration: 2,
      ease: "power2.out"
    }
  );
  //pan
  const container = document.querySelector(".pan");
  const image = container.querySelector(".pan_img");
  container.addEventListener("mousemove", (e) => {
    const bounds = container.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;

    const deltaX = (e.clientX - centerX) / bounds.width;
    const deltaY = (e.clientY - centerY) / bounds.height;

    gsap.to(image, {
      x: deltaX * 40,  // Horizontal pan intensity
      y: deltaY * 30,  // Vertical pan intensity
      duration: 0.5,
      ease: "power2.out"
    });
  });

  container.addEventListener("mouseleave", () => {
    gsap.to(image, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    });
  });

  