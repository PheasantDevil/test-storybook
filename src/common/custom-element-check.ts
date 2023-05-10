// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const customElementWithCheck = (tagName: string) => (clazz: any) => {
  if (!window.customElements.get(tagName)) {
    window.customElements.define(tagName, clazz);
  }
  return clazz;
};
