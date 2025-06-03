
let tl = gsap.timeline({default:{duration:1}});
// header and side bar
tl.from('.header',{y:'-100%',ease:'bounce'})
  .from('.link',{opacity:0,stagger:.5})
//   footer
  .from('.footer',{y:'100%',ease:'elastic'},1)
//   sidebar
  .from([".right", ".left"], { duration: 0.5, x: (i) => i === 0 ? "100vw" : "-100vw", ease: "power2.inOut"}, "-=0.5")
//   button
  .fromTo('.btn',{opacity:0,scale:0,rotation:720},{duration:1.5,opacity:1,scale:1,rotation:0})

  const btn=document.querySelector('.btn')
  btn.addEventListener('click',()=>{
    tl.timeScale(3)
    tl.reverse()
    btn.classList.add('hide');    // Hide btn
    btn2.classList.remove('hide');
  })

  const btn2=document.querySelector('.btn2')
  btn2.addEventListener('click',()=>{
    tl.restart()
    btn2.classList.add('hide');   // Hide btn2
    btn.classList.remove('hide'); // Show btn
  })

