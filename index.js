import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';

document.addEventListener('DOMContentLoaded', () => {
  AOS.init();

  gsap.timeline({ repeat: -1 }).fromTo(
    '.carousel',
    { xPercent: 100 },
    {
      xPercent: -100,
      duration: 13,
      ease: 'linear',
      delay: 0.2,
    },
  );

  document
    .querySelectorAll('.text p, .text-second p, .text-future p, .text-last p')
    .forEach((item) => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item, { x: 10, color: '#b92e2e', duration: 0.3 });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(item, { x: 0, color: '#030302', duration: 0.3 });
      });
    });

  document.querySelectorAll('.footer-text').forEach((item) => {
    item.addEventListener('mouseenter', () => {
      gsap.to(item, { scale: 1.1, color: '#b92e2e', duration: 0.3 });
    });

    item.addEventListener('mouseleave', () => {
      gsap.to(item, { scale: 1, color: '#6b4226', duration: 0.3 });
    });
  });
});