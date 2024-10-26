import { type TestInput } from "@regexplanet/common";

export type ShareFormState = {
  shareCode?: string;
  message?: string;
  messageType?: string;
  regex?: TestInput;
};
