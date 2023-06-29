export type Style = Partial<CSSStyleDeclaration> & { [key: string]: any };

export function setStyle(element: HTMLElement, style: Style) {
  Object.entries(style).forEach(([key, value]) => {
    key.split(",").forEach((subKey: any) => {
      element.style[subKey] = value;
    });
  });
}
