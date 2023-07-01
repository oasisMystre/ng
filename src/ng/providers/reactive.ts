import { Context } from "../core";
import { ImplementationError } from "../exceptions";

import { View } from "../widgets/framework";

type Listener = (context: Context) => any;

export class Reactive {
  private listeners: Listener[] = [];

  addListener(listener: Listener) {
    this.listeners.push(listener);
  }

  dispatchListeners() {
    const context = new Context();
    this.listeners.forEach((listener) => listener(context));
  }
}

export class ReactiveWidget extends View {
  render(_context: Context) {
    throw ImplementationError;
  }

  build(_context: Context): any {
    throw ImplementationError;
  }
}

export class ValueNotifier<T> extends Reactive {
  #value: T;

  constructor(value: T) {
    super();

    this.#value = value;
  }

  set value(value: T) {
    this.#value = value;
    this.dispatchListeners();
  }

  get value() {
    return this.#value;
  }
}
