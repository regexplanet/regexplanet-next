import { TestInput } from "@regexplanet/common";

export function formDataToTestInput(
  engineHandle: string,
  formData: FormData
): TestInput {
  const retVal: TestInput = {
    engine: engineHandle,
    regex: formData.get("regex") as string,
    replacement: formData.get("replacement") as string,
    options: formData.getAll("option") as string[],
    inputs: formData.getAll("input") as string[],
  };
  return retVal;
}
