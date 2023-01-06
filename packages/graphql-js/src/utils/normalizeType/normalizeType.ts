export default function normalizeType(type?: string) {
  if (!type) {
    return ''
  }

  return type.replace(/!|\[|\]/g, '')
}
