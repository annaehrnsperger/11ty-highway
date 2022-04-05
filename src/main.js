import Highway from '@dogstudio/highway';
import { BackTransition } from './transitions/BackTransition';
import { CustomTransition } from './transitions/CustomTransition';
import { DefaultTransition } from './transitions/DefaultTransition';

new Highway.Core({
  transitions: {
    global: DefaultTransition,
    contextual: {
      custom: CustomTransition,
      back: BackTransition,
    },
  },
});