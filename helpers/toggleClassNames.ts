/** Provides simple target className toggling. If toggle equals true `classList.add(...classes) else classList.remove(...classes)`. */
export const toggleClassNames = (
  toggle: boolean,
  target: HTMLElement,
  classes: string[]
) => {
  return toggle
    ? target.classList.add(...classes)
    : target.classList.remove(...classes);
};
