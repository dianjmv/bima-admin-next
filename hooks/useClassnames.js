export function useClassnames(...classes) {
  return classes.filter(Boolean).join(" ");
}
