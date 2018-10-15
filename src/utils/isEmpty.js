export default function isEmpty(data) {
  if (typeof data === 'string' && data.length === 0) return true;
  if (Object.keys(data).length === 0) return true;
  if (Array.isArray(data) && data.length === 1 && isEmpty(data[0])) return true;
}