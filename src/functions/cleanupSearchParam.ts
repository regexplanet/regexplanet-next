export function cleanupSearchParam(value: string | string[] | null | undefined, defaultValue?: string): string {
    defaultValue = defaultValue || "";

    if (!value) {
        return defaultValue;
    }
    if (Array.isArray(value)) {
        if (value.length === 0) {
            return defaultValue
        }
        return value[0].trim();
    }
    
    return value.trim();
}