const tl = gsap.timeline();
const paragraphs = document.querySelectorAll('.animation-container p');
const animationContainer = document.querySelector('.animation-container')
const contactCard = document.querySelector('.contact-card')


tl.to(animationContainer, {
opacity: 1
})

paragraphs.forEach(p => {
  const text = p.textContent;
  p.textContent = '';
  const chars = text.split('').map(char => {
    const span = document.createElement('span');
    span.textContent = char;
    p.appendChild(span);
    return span;
  });

  tl.from(chars, {
    opacity: 0,
    y: 40,
    rotateX: -90,
    stagger: 0.02
  }, '<')
  .to(chars, {
    opacity: 0,
    y: -40,
    rotateX: 90,
    stagger: 0.02
  }, '<1.3')
});

tl.to(animationContainer, {
  opacity: 0,
  onComplete: () => {
    animationContainer.style.pointerEvents = "none";
    animationContainer.style.display = "none";
  }
});

tl.fromTo(contactCard, {
  opacity: 0,
  y: 20
}, {
  opacity: 1,
  y: 0,
  duration: 1.2,
  ease: "power3.out"
}, "-=0.75");