import {
  XIcon,
  TwitterIcon,
} from '@/app/(pages)/dashboard/components/TemplateIcons';
import {
  BackgroundOption,
  BorderOption,
  FontOption,
  LogoOption,
  PaddingOption,
  ShadowOption,
  ThemeOption,
} from '@/types/dashboard.types';
import { JSX } from 'react';

export const paddingOptions: Array<{
  id: number;
  label: string;
  value: PaddingOption;
}> = [
  { id: 1, label: 'Small', value: '16' },
  { id: 2, label: 'Medium', value: '18' },
  { id: 3, label: 'Large', value: '20' },
];

export const logoOptions: Array<{
  id: number;
  value: LogoOption;
  icon?: JSX.Element | string;
}> = [
  { id: 1, value: 'new', icon: <XIcon /> },
  { id: 2, value: 'old', icon: <TwitterIcon /> },
  { id: 3, value: 'none', icon: 'none' },
];

export const themeOptions: Array<{
  id: number;
  label: string;
  value: ThemeOption;
}> = [
  { id: 1, label: 'Light', value: 'light' },
  { id: 2, label: 'Dark', value: 'dark' },
];

export const borderOptions: Array<{
  id: number;
  label: string;
  value: BorderOption;
}> = [
  { id: 1, label: 'No Border', value: 'none' },
  { id: 2, label: 'Thin Border', value: 'thin' },
  { id: 3, label: 'Thick Border', value: 'thick' },
];

export const shadowOptions: Array<{
  id: number;
  label: string;
  value: ShadowOption;
}> = [
  { id: 1, label: 'No Shadow', value: 'none' },
  { id: 2, label: 'Small Shadow', value: 'small' },
  { id: 3, label: 'Medium Shadow', value: 'medium' },
  { id: 4, label: 'Large Shadow', value: 'large' },
];

export const backgroundOptions: Array<{
  id: number;
  label: string;
  value: BackgroundOption;
}> = [
  {
    id: 1,
    label: 'Enabled Background',
    value: { enabled: true, color: '#ffffff' },
  },
  {
    id: 2,
    label: 'Disabled Background',
    value: {
      enabled: false,
      color: '',
    },
  },
];

export const fontOptions: Array<{
  id: number;
  label: string;
  value: FontOption;
}> = [
  {
    id: 1,
    label: 'Inter',
    value: 'inter',
  },
  {
    id: 2,
    label: 'Roboto',
    value: 'roboto',
  },
  {
    id: 3,
    label: 'Open Sans',
    value: 'opensans',
  },
];
