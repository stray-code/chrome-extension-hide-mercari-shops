import type { LocalStorageItems } from "../types";

type Values<T> = T extends "isHide" ? LocalStorageItems["isHide"] : never;

export const setLocalStorage = async <T extends keyof LocalStorageItems>(
  key: T,
  values: Values<T>,
) => {
  chrome.storage.local.set({ [key]: values });
};
