import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import { getDefaultHeaderHeight } from '../utils/header';
import { Platform } from 'react-native';

export default function useHeaderHeight() {
  try {
    const frame = useSafeAreaFrame();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const insets = useSafeAreaInsets();
    const propsHeight = {
      layout: frame,
      modal: false,
      headerStatusBarHeight: insets.top,
    };

    return getDefaultHeaderHeight(
      propsHeight.layout,
      propsHeight.modal,
      propsHeight.headerStatusBarHeight
    );
  } catch (e) {
    console.log(
      'We recommend integrating the ThemeProvider to better calculate the height of the statusBar'
    );

    return Platform.select({
      ios: 80,
      android: 60,
      default: 0,
    });
  }
}
