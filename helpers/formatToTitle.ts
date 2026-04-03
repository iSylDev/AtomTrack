export default function formatToTitle(name?: string) {
  if (!name) return "";
  return name.charAt(0).toUpperCase() + name.slice(1);
}
