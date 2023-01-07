/**
 * Capitalizes the first letter of each word.
 *
 * @param text - The text to capitalize.
 * @returns The capitalized text.
 */
export default function capitalize(text: string) {
  return text
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}
