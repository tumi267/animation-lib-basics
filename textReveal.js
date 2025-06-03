// char animation
let char=SplitText.create(".headline",{
    type:'chars'
});
// gsap.from(char.chars,{
//     y:-100,
//     autoAlpha:0,
//     stagger:0.05
// })


// word animation
let word=SplitText.create('.sub_headline',{
    type:'words'
})
// gsap.from(word.words,{
//     y:-100,
//     autoAlpha:0,
//     stagger:0.5
// })

// line animation auto
let line=SplitText.create('.line_amination',{
    type:'lines'
})
gsap.from(line.lines,
    {
        rotationX: -100,
        transformOrigin: "50% 50% -160px",
        opacity: 0,
        duration: 0.8, 
        ease: "power3",
        stagger: 0.25
      }
  );

//  scroll trigger mask animation

SplitText.create(".line_amination_mask", {
    type: "words,lines",
    linesClass: "line",
    autoSplit: true,
    aria: "hidden",
    mask: "lines",
    onSplit: (self) => {
      gsap.from(self.words, {
        opacity: 0,
        
        duration: 5, // duration is still needed but less important with scrub
        ease: "none", // disable easing for scrubbed animations
        stagger: 0.1,
        scrollTrigger: {
          scroller: ".text",             // use .text as the scroll container
          trigger: ".line_amination_mask",
          start: "top 80%",              // adjust as needed
          end: "bottom 100%",             // must define an end for scrubbing
          scrub: true,                   // 👈 THIS makes the scroll control the animation
          markers: false
        }
      });
    }
  });
  

let tl2=gsap.timeline({defaults:{duration:1,autoAlpha:0,y:-100}})

tl2.from(char.chars,{stagger:0.05})
    .from(word.words,{y: -100,
        opacity: 0,
        rotation: "random(-80, 80)",
        duration: 0.7, 
        ease: "back",
        stagger: 0.15})

// decode text
// wrap in function

const characters = "01";

function scrambleText(target, text, duration = 2) {
  // Store original text content if not provided
  const finalText = text || target.textContent;
  let iterations = finalText.length;
  let obj = { i: 0 };

  // Clear any existing animations on this target
  gsap.killTweensOf(obj);

  gsap.to(obj, {
    i: iterations,
    duration: duration,
    ease: "none",
    onUpdate: () => {
      let displayed = "";
      for (let j = 0; j < finalText.length; j++) {
        if (j < Math.floor(obj.i)) {
          displayed += finalText[j]; // real character
        } else {
          displayed += characters[Math.floor(Math.random() * characters.length)];
        }
      }
      target.textContent = displayed;
    },
    onComplete: () => {
      target.textContent = finalText;
    }
  });
}

// Initialize the effect
const decode = document.querySelector(".decode");
if (decode) {
  const finalText = decode.textContent;
  
  ScrollTrigger.create({
    scroller: ".text",
    trigger: decode,
    start: `top 90%`,
    onEnter: () => {
      scrambleText(decode, finalText, 6);
    },
    // Optional: reset the animation when scrolling back up
    onEnterBack: () => {
      decode.textContent = finalText.replace(/./g, characters[0]);
      scrambleText(decode, finalText, 2);
    }
  });
}

// mouse over scramble

const st = SplitText.create("p", { type: "chars", charsClass: "char" });

st.chars.forEach((char) => {
  gsap.set(char, { attr: { "data-content": char.innerHTML } });
});

const textBlock = document.querySelector(".mouse_over_scramble");

textBlock.onpointermove = (e) => {
  st.chars.forEach((char) => {
    const rect = char.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 100)
      gsap.to(char, {
        overwrite: true,
        duration: 1.2 -dist / 100,
        scrambleText: {
          text: char.dataset.content,
          chars: ".:",
          speed: 0.5,
        },
        ease:'none'
      });
  });
};

// tracking text tilt

// Select the element
const trackingText = document.querySelector('.tracking_text');

// Add mousemove effect
document.addEventListener('mousemove', (e) => {
  // Get mouse position relative to viewport
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Calculate center of the screen
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  // Calculate tilt values (adjust sensitivity)
  const tiltX = (mouseY) /20; // Tilt on X-axis based on Y-movement
  const tiltY = (mouseX) /15; // Tilt on Y-axis based on X-movement

  // Apply tilt with GSAP
  gsap.to(trackingText, {
    rotationX: tiltX,
    rotationY: tiltY,
    transformPerspective: 1000, // Adds 3D depth
    ease: 'power2.out',
    duration: 0.5
  });
});

// Reset on mouse leave (optional)
document.addEventListener('mouseleave', () => {
  gsap.to(trackingText, {
    rotationX: 0,
    rotationY: 0,
    duration: 1
  });
});