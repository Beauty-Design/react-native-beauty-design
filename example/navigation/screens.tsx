/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from 'react';
import AvatarScreen from '../screens/Avatars';
import TitleScreen from '../screens/Titles';
import TextsScreen from '../screens/Texts';
import ButtonsScreen from '../screens/Buttons';
import ThemeScreen from '../screens/Theme';
import DatePickerScreen from '../screens/DatePicker';
import ControllerScreen from '../screens/Controller';
import CarouselScreen from '../screens/Carousel';
import InputScreen from '../screens/Inputs';
// import CardScreen from '../screens/Cards';
import FormScreen from '../screens/Form';
import BadgeScreen from '../screens/Badges';
// import CollapseScreen from '../screens/Collapse';
// import AlertScreen from '../screens/Alert';
import SelectScreen from '../screens/Select';
import RadioScreen from '../screens/Radio';
import SwitchScreen from '../screens/Switch';
import HeaderScreen from '../screens/Header';
import HeaderWithCustomBackgroundScreen from '../screens/HeaderWithCustomBackground';
import HeaderWithRightIconScreen from '../screens/HeaderWithRightIcon';
// import MessageScreen from '../screens/Message';
// import ModalScreen from '../screens/Modal';
// import PopConfirmScreen from '../screens/PopConfirm';
// import TabScreen from '../screens/Tabs';

export const itemsDrawer = [
  {
    name: 'Theme',
    component: ThemeScreen,
  },
  {
    name: 'Button',
    component: ButtonsScreen,
  },
  {
    name: 'Text',
    component: TextsScreen,
  },
  {
    name: 'Title',
    component: TitleScreen,
  },
  {
    name: 'Controller',
    component: ControllerScreen,
  },
  {
    name: 'Datepicker',
    component: DatePickerScreen,
  },
  {
    name: 'Form',
    component: FormScreen,
  },
  {
    name: 'Input',
    component: InputScreen,
  },
  {
    name: 'Radio',
    component: RadioScreen,
  },
  {
    name: 'Select',
    component: SelectScreen,
  },
  {
    name: 'Switch',
    component: SwitchScreen,
  },
  {
    name: 'Avatar',
    component: AvatarScreen,
  },
  {
    name: 'Badge',
    component: BadgeScreen,
  },
  {
    name: 'Carousel',
    component: CarouselScreen,
  },
  // {
  //   name: 'Collapse',
  //   component: CollapseScreen,
  // },
  {
    name: 'Header',
    options: { headerShown: false },
    component: HeaderScreen,
  },
  {
    name: 'HeaderWithCustomBackground',
    options: { headerShown: false },
    component: HeaderWithCustomBackgroundScreen,
  },
  {
    name: 'HeaderWithRightIcon',
    options: { headerShown: false },
    component: HeaderWithRightIconScreen,
  },
  // {
  //   name: 'Tabs',
  //   component: TabScreen,
  // },
  // {
  //   name: 'Alert',
  //   component: AlertScreen,
  // },
  // {
  //   name: 'Message',
  //   component: MessageScreen,
  // },
  // {
  //   name: 'Modal',
  //   component: ModalScreen,
  // },
  // {
  //   name: 'PopConfirm',
  //   component: PopConfirmScreen,
  // },
];
