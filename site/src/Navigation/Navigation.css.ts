import { calc } from '@vanilla-extract/css-utils';
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

export const active = style({});

export const activeIndicator = style({
  background: `linear-gradient(135deg, transparent 2%, ${themeVars.background.green} 40%)`,
  position: 'absolute',
  zIndex: -1,
  top: 0,
  left: `${calc(themeVars.spacing.large).negate()}`,
  right: 0,
  bottom: 0,
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  transition: 'transform .3s ease, opacity .3s ease',
  selectors: {
    [`&:not(${active})`]: {
      opacity: 0,
      transform: 'translateX(-80%)',
    },
  },
});

export const subLinkContainer = style({
  position: 'relative',
});