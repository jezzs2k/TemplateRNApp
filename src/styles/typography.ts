import { StyleSheet, TextStyle } from 'react-native';

const LineHeight = {
  xl: 34,
  lg: 30,
  md: 24,
  sm: 21,
  xs: 18,
};

const Font = {
  rootFontFamily: 'Rubik-Regular',
};

const FontWeight = {
  bold: '500',
  normal: '400',
};

interface ITypographyStyles {
  regular16: TextStyle;
  regular14: TextStyle;
  regular12: TextStyle;
  medium24: TextStyle;
  medium20: TextStyle;
  medium16: TextStyle;
  medium14: TextStyle;
  rootFontFamily: TextStyle;
}

const styles = StyleSheet.create<ITypographyStyles>({
  medium14: {
    fontFamily: Font.rootFontFamily,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: LineHeight.sm,
  },
  medium16: {
    fontFamily: Font.rootFontFamily,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: LineHeight.md,
  },
  medium20: {
    fontFamily: Font.rootFontFamily,
    fontSize: 20,
    fontWeight: '500',
    lineHeight: LineHeight.lg,
  },
  medium24: {
    fontFamily: Font.rootFontFamily,
    fontSize: 24,
    fontWeight: '500',
    lineHeight: LineHeight.xl,
  },
  regular12: {
    fontFamily: Font.rootFontFamily,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: LineHeight.xs,
  },
  regular14: {
    fontFamily: Font.rootFontFamily,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: LineHeight.sm,
  },
  regular16: {
    fontFamily: Font.rootFontFamily,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: LineHeight.md,
  },
  rootFontFamily: { fontFamily: 'Rubik-Regular' },
});

export { LineHeight, Font, FontWeight, styles };
