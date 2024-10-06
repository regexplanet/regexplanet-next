import { getEngineOrThrow } from "@/engines"
import { TestInput } from "@/types/TestInput";
import { TestOutput } from "@/types/TestOutput";

export async function testRegexAction(engineHandle: string, formData: FormData) {
    'use server'

    const theEngine = getEngineOrThrow(engineHandle)
    if (!theEngine.test_url) {
        throw new Error('Engine does not support testing');
    }

    const testInput:TestInput = {
        engine: engineHandle,
        regex: formData.get('regex') as string,
        replacement: formData.get('replacement') as string,
        option: formData.getAll('option') as string[],
        inputs: formData.getAll('input') as string[],
    }

    const testOutput:TestOutput = { success: false, message: `Not implemented ${JSON.stringify(testInput)}` };
    
    return testOutput;
}