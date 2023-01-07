import capitalize from '../capitalize'

/**
 * Converts a dot notation string to camel case. `parts` are capitalized and
 * appended to the end of the string.
 *
 * @param text - The string to convert.
 * @param parts - The parts to append to the end of the string.
 * @returns The camel case string.
 */
export default function camelizeDotNotation(text?: string, ...parts: string[]) {
  if (!text) {
    return ''
  }

  return text
    .split('.')
    .map((pathPart, index) => (index > 0 ? capitalize(pathPart) : pathPart))
    .join('')
    .concat(...parts.map(capitalize))
}
