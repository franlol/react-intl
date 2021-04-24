export enum EAppActionTypes {
  APP_LOCALE_UPDATE = 'APP_LOCALE_UPDATE'
}

export type TAppState = {
  locale: string;
}

export type TAppPayload = {
  locale?: string;
}