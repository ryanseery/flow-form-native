import { ViewStyleProps } from './view';

interface TextShadowOffset {
  width: number;
  height: number;
}

enum FontStyle {
  NORMAL = 'normal',
  ITALIC = 'italic',
}

enum FontWeight {
  NORMAL = 'normal',
  BOLD = 'bold',
  ONE = '100',
  TWO = '200',
  THREE = '300',
  FOUR = '400',
  FIVE = '500',
  SIX = '600',
  SEVEN = '700',
  EIGHT = '800',
  NINE = '900',
}

enum TextAlign {
  AUTO = 'auto',
  LEFT = 'left',
  RIGHT = 'right',
  CENTER = 'center',
  JUSTIFY = 'justify',
}

enum TextDecorationLine {
  NONE = 'none',
  UNDERLINE = 'underline',
  LINE_THROUGH = 'line-through',
  UNDERLINE_LINE_THROUGH = 'underline line-through',
}

enum TextAlignVertical {
  AUTO = 'auto',
  TOP = 'top',
  BOTTOM = 'bottom',
  CENTER = 'center',
}

enum FontVariant {
  SMALL_CAPS = 'small-caps',
  OLDSTYLE_NUMS = 'oldstyle-nums',
  LINING_NUMS = 'lining-nums',
  TABULAR_NUMS = 'tabular-nums',
  PROPORTIONAL_NUMS = 'proportional-nums',
}

enum TextDecorationStyle {
  SOLID = 'solid',
  DOUBLE = 'double',
  DOTTED = 'dotted',
  DASHED = 'dashed',
}

enum TextTransform {
  NONE = 'none',
  UPPERCASE = 'uppercase',
  LOWERCASE = 'lowercase',
  CAPITALIZE = 'capitalize',
}

enum WritingDirection {
  AUTO = 'auto',
  LTR = 'ltr',
  RTL = 'rtl',
}

export interface TextProps extends ViewStyleProps {
  textShadowOffset?: TextShadowOffset;
  color?: string;
  fontSize?: number;
  fontStyle?: FontStyle;
  fontWeight?: FontWeight;
  lineHeight?: number;
  textAlign?: TextAlign;
  textDecorationLine?: TextDecorationLine;
  textShadowColor?: string;
  fontFamily?: string;
  textShadowRadius?: number;
  includeFontPadding?: boolean; // (Android)
  textAlignVertical?: TextAlignVertical; // (Android)
  fontVariant?: FontVariant[]; // (iOS)
  letterSpacing?: number;
  textDecorationColor?: string; // (iOS)
  textDecorationStyle?: TextDecorationStyle; // (iOS)
  textTransform?: TextTransform;
  writingDirection?: WritingDirection; // (iOS)
}
