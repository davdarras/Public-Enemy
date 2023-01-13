import { messagesEn } from "../../i18n-en";
import { messagesFr } from "../../i18n-fr";
import { LOCALES } from "./locales";

export const messages = {
  [LOCALES.ENGLISH]: {
    ...messagesEn,
  },
  [LOCALES.FRENCH]: {
    ...messagesFr,
  },
};
