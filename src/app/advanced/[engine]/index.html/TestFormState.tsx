import { TestInput } from "@/types/TestInput";
import { TestOutput } from "@/types/TestOutput";

export type TestFormState = {
    message?: string;
    messageType?: string;
    testInput?: TestInput;
    testOutput?: TestOutput;
};