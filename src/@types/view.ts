enum BackfaceVisibility {
  VISIBLE = 'visible',
  HIDDEN = 'hidden',
}

enum BorderStyle {
  SOLID = 'solid',
  DOTTED = 'dotted',
  DASHED = 'dashed',
}

export interface ViewStyleProps {
  borderRightColor?: string;
  backfaceVisibility?: BackfaceVisibility;
  borderBottomColor?: string;
  borderBottomEndRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderBottomStartRadius?: number;
  borderBottomWidth?: number;
  borderColor?: string;
  borderEndColor?: string;
  borderLeftColor?: string;
  borderLeftWidth?: number;
  borderRadius?: number;
  backgroundColor?: string;
  borderRightWidth?: number;
  borderStartColor?: string;
  borderStyle?: BorderStyle;
  borderTopColor?: string;
  borderTopEndRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderTopStartRadius?: number;
  borderTopWidth?: number;
  borderWidth?: number;
  opacity?: number;
  elevation?: number;
}
