import { css } from 'styled-components';

const mediaQuery = {

  // Chrome Inspctor
  mobileS: (...args) => css`
    @media (min-width: 320px) {
      ${css(...args)}
    }
  `,
  mobileSOnly: (...args) => css`
  @media (min-width: 320px) and (max-width: 374px) {
      ${css(...args)}
    }
  `,

  mobileM: (...args) => css`
    @media (min-width: 375px) {
      ${css(...args)}
    }
  `,
  mobileMOnly: (...args) => css`
  @media (min-width: 375px) and (max-width: 424px) {
      ${css(...args)}
    }
  `,

  mobileL: (...args) => css`
    @media (min-width: 425px) {
      ${css(...args)}
    }
  `,
  mobileLOnly: (...args) => css`
  @media (min-width: 425px) and (max-width: 767px) {
      ${css(...args)}
    }
  `,

  tablet: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)}
    }
  `,
  tabletOnly: (...args) => css`
  @media (min-width: 768px) and (max-width: 1023px) {
      ${css(...args)}
    }
  `,

  laptop: (...args) => css`
    @media (min-width: 1024px) {
      ${css(...args)}
    }
  `,
  laptopOnly: (...args) => css`
  @media (min-width: 1024px) and (max-width: 1439px) {
      ${css(...args)}
    }
  `,

  laptopL: (...args) => css`
    @media (min-width: 1440px) {
      ${css(...args)}
    }
  `,

  // Bootstrap 4
  // xs: Extra small devices (portrait phones, less than 576px)
  // No media query since this is the default in Bootstrap
  xs: (...args) => css`
    ${css(...args)}
  `,
  sm: (...args) => css`
    @media (min-width: 576px) {
      ${css(...args)}
    }
  `,
  md: (...args) => css`
    @media (min-width: 768px) {
      ${css(...args)}
    }
  `,
  lg: (...args) => css`
    @media (min-width: 992px) {
      ${css(...args)}
    }
  `,
  xl: (...args) => css`
    @media (min-width: 1200px) {
      ${css(...args)}
    }
  `,
};

export default mediaQuery;
