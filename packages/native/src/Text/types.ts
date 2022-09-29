import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

import type { ButtonProps } from '../Button';
import type { AlignType } from '../@types/typography';
import type { ColorType, FontSizesProps } from '../Context/theme/types';

export interface TextProps {
  children?: any;
  color?: ColorType;
  lines?: number;
  margin?: number | 'string';
  marginTop?: number | 'string';
  marginBottom?: number | 'string';
  marginVertical?: number | 'string';
  marginHorizontal?: number | 'string';
  readMore?: boolean;
  textReadMore?: string;
  textReadLess?: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  size?: keyof FontSizesProps | number;
  lineHeight?: keyof FontSizesProps | number;
  italic?: boolean;
  underline?: boolean;
  bold?: boolean;
  align?: AlignType;
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  readMoreButtonProps?: Partial<ButtonProps>;

  [key: string]: unknown;
}
