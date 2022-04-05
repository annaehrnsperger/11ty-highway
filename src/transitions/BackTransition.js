import Highway from '@dogstudio/highway';
import gsap from 'gsap';

export class BackTransition extends Highway.Transition {
  in({ from, done }) {
    window.scrollTo(0, 0);
    from.remove();
    
    gsap.fromTo('.photos', 
    {
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
      duration: 1.2,
      ease: 'expo.out',
      onComplete: done,
    });
  }

  out({ done }) {
    gsap.to('h1', { color: 'black', duration: 0.7, ease: 'expo.out', delay: 0.1 })
    gsap.to('.logo', { y: 0, duration: 0.7, ease: 'expo.out', delay: 0.1 })
    
    gsap.to('.fullscreen-img', {
      scale: 2,
      autoAlpha: 0,
      duration: 0.8,
      ease: 'expo.out',
      delay: 0.2,
      onComplete: done
    });
  }
}
