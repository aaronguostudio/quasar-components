declare module 'quasar-components';

export type LooseDictionary = { [index in string]: any };

export interface Avatar {
  props? : LooseDictionary;
}

export interface BlankLayout {
  props? : LooseDictionary;
}

export interface SidebarMenus {
  props? : LooseDictionary;
}

export const Avatar: Avatar
export const BlankLayout: BlankLayout
export const SidebarMenus: SidebarMenus
