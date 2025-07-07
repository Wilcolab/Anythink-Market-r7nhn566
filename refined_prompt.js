/**
 * Converts a string to camelCase.
 * Handles spaces, underscores, or hyphens as word separators.
 * Returns an empty string for null or undefined input.
 * Throws an error if input is not a string.
 * Skips non-letter characters and preserves existing acronyms.
 * @param {string} input
 * @returns {string}
 */
function toCamelCase(input) {
    if (input == null) return '';
    if (typeof input !== 'string') throw new Error('Input must be a string');

    // Split by space, underscore, or hyphen
    const words = input
        .split(/[\s_-]+/)
        .filter(Boolean);

    if (words.length === 0) return '';

    return words
        .map((word, idx) => {
            // Preserve acronyms (all uppercase)
            if (/^[A-Z]+$/.test(word)) {
                return idx === 0 ? word.toLowerCase() : word;
            }
            // Remove non-letter characters except for acronyms
            const cleaned = word.replace(/[^a-zA-Z0-9]/g, '');
            if (idx === 0) {
                return cleaned.toLowerCase();
            }
            return cleaned.charAt(0).toUpperCase() + cleaned.slice(1).toLowerCase();
        })
        .join('');
}


/**
 * Converts a string to dot.case.
 * Handles spaces, underscores, or hyphens as word separators.
 * Returns an empty string for null or undefined input.
 * Throws an error if input is not a string.
 * Removes non-alphanumeric characters except dots.
 * @param {string} input
 * @returns {string}
 */
function toDotCase(input) {
    if (input == null) return '';
    if (typeof input !== 'string') throw new Error('Input must be a string');

    // Split by space, underscore, or hyphen
    const words = input
        .split(/[\s_-]+/)
        .filter(Boolean)
        .map(word => word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase());

    return words.join('.');
}