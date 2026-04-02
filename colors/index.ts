// BRIX Money Brand Colors - TypeScript Definitions

export interface ColorToken {
  readonly value: string;
  readonly type: 'color';
  readonly description?: string;
}

export interface GradientToken {
  readonly from: string;
  readonly to: string;
  readonly type: 'linear';
}

// Primary Colors
export const ORANGE: '#DF7032' = '#DF7032';
export const NIGHTLY: '#0B0B0B' = '#0B0B0B';
export const WHITE: '#FFFFFF' = '#FFFFFF';
export const PLATINUM: '#E6E6E6' = '#E6E6E6';

// Color palette object
export const colors = {
  ORANGE: '#DF7032',
  NIGHTLY: '#0B0B0B',
  WHITE: '#FFFFFF',
  PLATINUM: '#E6E6E6',
} as const;

export type ColorName = keyof typeof colors;

// Gradient
export const GRADIENT_PRIMARY: GradientToken = {
  from: '#FFFFFF',
  to: '#DF7032',
  type: 'linear',
};

export default colors;
