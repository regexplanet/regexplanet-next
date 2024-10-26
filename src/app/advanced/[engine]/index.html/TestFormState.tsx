import { type TestInput, type TestOutput } from "@regexplanet/common";

export type TestFormState = {
    message?: string;
    messageType?: string;
    testInput?: TestInput;
    testOutput?: TestOutput;
};