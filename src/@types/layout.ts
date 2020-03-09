enum IAlignContent {
  FLEX_START = 'flex-start',
  FLEX_END = 'flex-end',
  CENTER = 'center',
  STRETCH = 'stretch',
  SPACE_BETWEEN = 'space-between',
  SPACE_AROUND = 'space-around',
}

enum IAlignItems {
  FLEX_START = 'flex-start',
  FLEX_END = 'flex-end',
  CENTER = 'center',
  STRETCH = 'stretch',
  BASELINE = 'baseline',
}

enum IAlignSelf {
  AUTO = 'auto',
  FLEX_START = 'flex-start',
  FLEX_END = 'flex-end',
  CENTER = 'center',
  STRETCH = 'stretch',
  BASELINE = 'baseline',
}

enum IDirection {
  INHERIT = 'inherit',
  LTR = 'ltr',
  RTL = 'rtl',
}

enum IDisplay {
  NONE = 'none',
  FLEX = 'flex',
}

enum IFlexDirection {
  ROW = 'row',
  ROW_REVERSE = 'row-reverse',
  COLUMN = 'column',
  COLUMN_REVERSE = 'column-reverse',
}

enum IFlexWrap {
  WRAP = 'wrap',
  NOWRAP = 'nowrap',
}

enum IJustifyContent {
  FLEX_START = 'flex-start',
  FLEX_END = 'flex-end',
  CENTER = 'center',
  STRETCH = 'stretch',
  SPACE_BETWEEN = 'space-between',
  SPACE_AROUND = 'space-around',
  SPACE_EVENLY = 'space-evenly',
}

enum IOverflow {
  VISIBLE = 'visible',
  HIDDEN = 'hidden',
  SCROLL = 'scroll',
}

enum IPosition {
  ABSOLUTE = 'absolute',
  RELATIVE = 'relative',
}

export interface LayoutProps {
  alignContent?: IAlignContent;
  alignItems?: IAlignItems;
  alignSelf?: IAlignSelf;
  aspectRatio?: number;
  borderBottomWidth?: number;
  borderEndWidth?: number;
  borderLeftWidth?: number;
  borderRightWidth?: number;
  borderStartWidth?: number;
  borderTopWidth?: number;
  borderWidth?: number;
  bottom?: number | string;
  direction?: IDirection;
  display?: IDisplay;
  end?: number | string;
  flex?: number;
  flexBasis?: number | string;
  flexDirection?: IFlexDirection;
  flexGrow?: number;
  flexShrink?: number;
  flexWrap?: IFlexWrap;
  height?: number | string;
  justifyContent?: IJustifyContent;
  left?: number | string;
  margin?: number | string;
  marginBottom?: number | string;
  marginEnd?: number | string;
  marginHorizontal?: number | string;
  marginLeft?: number | string;
  marginRight?: number | string;
  marginStart?: number | string;
  marginTop?: number | string;
  marginVertical?: number | string;
  maxHeight?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  minWidth?: number | string;
  overflow?: IOverflow;
  padding?: number | string;
  paddingBottom?: number | string;
  paddingEnd?: number | string;
  paddingHorizontal?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;
  paddingStart?: number | string;
  paddingTop?: number | string;
  paddingVertical?: number | string;
  position?: IPosition;
  right?: number | string;
  start?: number | string;
  top?: number | string;
  width?: number | string;
  zIndex?: number;
}
