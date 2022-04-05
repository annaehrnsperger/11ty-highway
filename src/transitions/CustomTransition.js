import Highway from '@dogstudio/highway';
import gsap from 'gsap';

let loadedImg;

export class CustomTransition extends Highway.Transition {
  in({ from, done }) {
    window.scrollTo(0, 0);
    from.remove();
    
    const imgContainer = document.querySelector('.fullscreen-img')
    imgContainer.appendChild(loadedImg);
    
    const template = document.querySelector('[data-template]').dataset.template;
    gsap.to(['h1', '.nav-item'], { color: template === 'about' ? 'white' : '', duration: 0.2 })

    gsap.to('main', {
      duration: 0,
      autoAlpha: 1,
      ease: 'power4.inOut',
      onComplete: done,
    });
  }

  out({ trigger, done }) {
    const asset = trigger.querySelector('.transition-asset');
    const logo = document.querySelector('h1');
    const img = asset.querySelector('img');

    loadedImg = new Image();
    loadedImg.src = img.src;
    gsap.set(loadedImg, { position: 'absolute', inset: 0, zIndex: -1 });

    gsap.to(logo, { y: -120, duration: 0.7, ease: 'expo.out', delay: 0.1 })
    
    const { top, left } = trigger.getBoundingClientRect();
    
    gsap.set(asset, { zIndex: 1 });
    gsap.to(asset, {
      width: window.innerWidth + 0.5,
      height: '100vh',
      y: top * -1,
      x: left * -1,
      duration: 0.8,
      ease: 'power4.out',
      onComplete: done
    });
  }
}
