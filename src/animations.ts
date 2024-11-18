// import { trigger, transition, style, animate } from '@angular/animations';

// export const routeTransitionAnimations = trigger('fadeInOut', [
//   transition(':enter', [
//     style({ opacity: 0 }),
//     animate('300ms ease-in', style({ opacity: 1 })),
//   ]),
//   transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
// ]);

import {
  trigger,
  transition,
  style,
  animate,
  query,
} from '@angular/animations';

export const routeTransitionAnimations = trigger('fadeInOut', [
  transition('* <=> *', [
    query(':enter', [style({ opacity: 0, scale: 0.9 })], { optional: true }),
    query(':leave', [animate('0.2s', style({ opacity: 0, scale: 0.9 }))], {
      optional: true,
    }),
    query(':enter', [animate('0.2s', style({ opacity: 1, scale: 1 }))], {
      optional: true,
    }),
  ]),
]);
