import type { Context } from "../core";
import { ImplementationError } from "../exceptions";

export class Widget {
  build(_context: Context): HTMLElement | Widget {
    throw ImplementationError;
  }
}

export class View extends Widget {
  tagName = "div";

  #wrapper: HTMLElement | null = null;

  get wrapper() {
    if (this.#wrapper === null)
      this.#wrapper = document.createElement(this.tagName);

    return this.#wrapper;
  }

  set wrapper(element: HTMLElement) {
    this.#wrapper = element;
  }

  build(_context: Context): HTMLElement {
    throw ImplementationError;
  }
}
