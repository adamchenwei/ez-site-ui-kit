export default function capToCamelCase(text = '') {
  if (!text || typeof text !== 'string' || !text.length) {
    return '';
  }
  return `${text[0].toLowerCase()}${text.substring(1)}`;
}
