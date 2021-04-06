import { style } from '@vanilla-extract/css';
import { themeVars } from '../themes.css';

export const sectionLinkTitle = style({
  textTransform: 'uppercase',
});

export const underlineOnHover = style({
  selectors: {
    ['&:not(:hover)']: {
      textDecoration: 'none',
    },
  },
});

export const subLinkContainer = style({
  position: 'relative',
});

export const activeSubLinkBar = style({
  position: 'absolute',
  left: 0,
  top: 2,
  bottom: 2,
  width: 4,
  borderRadius: themeVars.border.radius.full,
  backgroundColor: themeVars.background.green,
});