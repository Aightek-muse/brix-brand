// BRIX Money Brand Colors
// Source: BRIX_Brand_Guideline.md

/** @type {const} */
export const colors = {
  // Primary
  ORANGE: '#DF7032',
  
  // Neutrals
  NIGHTLY: '#0B0B0B',
  WHITE: '#FFFFFF',
  PLATINUM: '#E6E6E6',
} as const;

// Individual exports for convenience
export const ORANGE = '#DF7032';
export const NIGHTLY = '#0B0B0B';
export const WHITE = '#FFFFFF';
export const PLATINUM = '#E6E6E6';

// Gradient definition
export const GRADIENT_PRIMARY = {
  from: WHITE,
  to: ORANGE,
  type: 'linear',
};

export default colors;
