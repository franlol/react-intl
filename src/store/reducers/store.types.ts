export type TAction<T, P> = {
  type: T;
  payload: P;
}

export type TStore = {
  app: {
    locale: string;
  }
}
