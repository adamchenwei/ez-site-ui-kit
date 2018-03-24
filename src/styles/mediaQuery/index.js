import { css } from 'styled-components';

const mobileS = 320;
const mobileM = 375;
const mobileL = 425;

const tablet = 768;

const laptop = 1024;
const laptopL = 1440;

const mediaQuery = {
  mobileS: (...args) => css`
    @media (min-width: ${mobileS}px) {
      ${css(...args)}
    }
  `,
  // 'mobileSOnly': (...args) =>css`
  //   @media (min-width: 320px) and (max-width: 413px) {
  //     ${css(...args)}
  //   }
  // `,
  // 'mobileS': (...args) =>css`
  //   @media (min-width: 320px) and (max-width: 413px) {
  //     ${css(...args)}
  //   }
  // `,
};


// $mobile-s: 320px;
// $mobile-m: 375px;
// $mobile-l: 425px;

// $tablet: 768px;

// $laptop: 1024px;
// $laptop-l: 1440px;


// @mixin mobile-s {
//   @media (min-width: #{$mobile-s}) {
//     @content;
//   }
// }

// @mixin mobile-s-only {
//   @media (min-width: #{$mobile-s}) and (max-width: #{$mobile-m - 1px}) {
//     @content;
//   }
// }

// @mixin mobile-m {
//   @media (min-width: #{$mobile-m}) {
//     @content;
//   }
// }

// @mixin mobile-m-only {
//   @media (min-width: #{$mobile-m}) and (max-width: #{$mobile-l - 1px}) {
//     @content;
//   }
// }

// @mixin mobile-l {
//   @media (min-width: #{$mobile-l}) {
//     @content;
//   }
// }

// @mixin mobile-l-only {
//   @media (min-width: #{$mobile-l}) and (max-width: #{$tablet - 1px}) {
//     @content;
//   }
// }

// @mixin tablet {
//   @media (min-width: #{$tablet}) {
//     @content;
//   }
// }

// @mixin tablet-only {
//   @media (min-width: #{$tablet}) and (max-width: #{$laptop - 1px}) {
//     @content;
//   }
// }

// @mixin laptop {
//   @media (min-width: #{$laptop}) {
//     @content;
//   }
// }

// @mixin laptop-only {
//   @media (min-width: #{$laptop}) and (max-width: #{$laptop-l - 1px}) {
//     @content;
//   }
// }


// @mixin laptop-l {
//   @media (min-width: #{$laptop-l}) {
//     @content;
//   }
// }

