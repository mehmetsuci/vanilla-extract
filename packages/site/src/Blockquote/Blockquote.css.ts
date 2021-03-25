import { globalStyle, style } from '@mattsjones/css-core';
import { themeVars } from '../themes.css';

export const root = style({
  borderLeft: `${themeVars.border.width.large} solid ${themeVars.background.blue}`,
  background: themeVars.background.note,
  borderRadius: themeVars.border.width.large,
});

globalStyle(`${root} *`, {
  color: '#127999',
});
