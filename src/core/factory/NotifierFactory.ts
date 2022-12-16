import { NotifierPort } from "core/application/port";
import { useNotifier } from "core/infrastructure";

export const makeNotifier = (): NotifierPort => useNotifier();
