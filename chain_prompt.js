/**
 * Converts a string to kebab-case.
 *
 * Handles spaces, underscores, and camelCase as word separators.
 * Returns an empty string if input is null or undefined.
 * Throws an error if input is not a string.
 *
 * @param {string} input - The string to convert.
 * @returns {string} The kebab-case version of the input.
 *
 * @example
 * toKebabCase('helloWorld');      // 'hello-world'
 * toKebabCase('Hello World');     // 'hello-world'
 * toKebabCase('hello_world');     // 'hello-world'
 * toKebabCase('hello-World');     // 'hello-world'
 * toKebabCase('HELLO_WORLD');     // 'hello-world'
 * toKebabCase('');                // ''
 * toKebabCase(null);              // ''
 * toKebabCase(undefined);         // ''
 * toKebabCase(123);               // throws Error
 */
function toKebabCase(input) {
    if (input === null || input === undefined) return '';
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    return input
        // Replace underscores and spaces with hyphens
        .replace(/[_\s]+/g, '-')
        // Insert hyphens before uppercase letters (camelCase)
        .replace(/([a-z\d])([A-Z])/g, '$1-$2')
        // Handle consecutive uppercase letters followed by lowercase (e.g., "HTMLParser" -> "html-parser")
        .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1-$2')
        // Convert to lowercase
        .toLowerCase()
        // Remove leading/trailing hyphens
        .replace(/^-+|-+$/g, '')
        // Replace multiple hyphens with a single one
        .replace(/-+/g, '-');
}