import DOMPurify from 'dompurify'

class SanitizeSerice {

    private purify = DOMPurify

    sanitize (dirtyField: string): string {
        const sanitizedField = this.purify.sanitize(dirtyField)
        return sanitizedField
    }

    sanitizeObject<T extends object>(data: T): T {
        const sanitizedObject = {} as T;
        for (const key in data) {
            const value = data[key];
            if (typeof value === "string") {
                sanitizedObject[key] = this.sanitize(value) as T[typeof key];
            } else {
                sanitizedObject[key] = value;
            }
        }
        return sanitizedObject;
    }   
    
}

export const sanitizeService = new SanitizeSerice()