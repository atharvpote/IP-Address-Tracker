import { rem } from "polished";

export const fontFamily = `'Rubik', sans-serif`;

export const baseFontSize = 16;

const scale = 1.25;

export const typeScale = {
  heading1: rem(16 * scale ** 5),
  heading2: rem(16 * scale ** 4),
  heading3: rem(16 * scale ** 3),
  heading4: rem(16 * scale ** 2),
  heading5: rem(16 * scale),
  paragraph: rem(16),
  helperText: rem(16 * scale ** -1),
  copyright: rem(16 * scale ** -2),
  disclaimer: rem(16 * scale ** -3),
};

export const weightScale = {
  regular: 400,
  medium: 500,
  bold: 700,
};
