import { TestInput } from "@/types/TestInput";

export type ShareFormState = {
  shareCode?: string;
  message?: string;
  messageType?: string;
  regex?: TestInput;
};
