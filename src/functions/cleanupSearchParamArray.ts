export function cleanupSearchParamArray(value: string | string[] | null | undefined, defaultValue?: string[]): string[] {
    defaultValue = defaultValue || [];

    if (!value) {
        return defaultValue;
    }
    if (Array.isArray(value)) {
        return value;
    }
    
    return [value];
}