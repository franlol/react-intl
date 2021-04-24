import { TAction } from "../store.types"
import { EAppActionTypes, TAppPayload } from "./app.types"

export const appSetLocale = (locale: string): TAction<EAppActionTypes, TAppPayload> => {
  return {
    type: EAppActionTypes.APP_LOCALE_UPDATE,
    payload: {
      locale
    }
  }
}
