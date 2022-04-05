import Highway from '@dogstudio/highway';
import gsap from 'gsap';

export class DefaultTransition extends Highway.Transition {
  in({ from, done }) {
    window.scrollTo(0, 0);
    from.remove();

    gsap.fromTo('main', 
    {
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
      duration: 0.4,
      ease: 'expo.inOut',
      onComplete: done,
    });
  }

  out({ done }) {
    gsap.to('main', {
      autoAlpha: 0,
      duration: 0.2,
      ease: 'power4.out',
      onComplete: done,
    });
  }
}