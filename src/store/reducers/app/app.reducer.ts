import { TAction } from "../store.types";
import appState from "./app.state";
import { EAppActionTypes, TAppPayload, TAppState } from "./app.types";


const appReducer = (state: TAppState = appState, action: TAction<EAppActionTypes, TAppPayload>) => {
  const { type, payload } = action;

  switch (type) {
    case EAppActionTypes.APP_LOCALE_UPDATE:
      return {
        ...state,
        locale: payload.locale
      }

    default: return state;
  }
}

export default appReducer;
