import { ImplementationError } from "../exceptions";

export abstract class ObservableWidget<T> {
  addChild(..._data: T[]): boolean {
    throw ImplementationError;
  }

  removeChild(_data: number): boolean {
    throw ImplementationError;
  }
}

export class Observable<T> {
  #value: T[];
  private widget: ObservableWidget<T> | null = null;

  constructor(value: T[]) {
    this.#value = value;
  }

  get value() {
    return this.#value;
  }

  setWidget(widget: ObservableWidget<T>) {
    this.widget = widget;
  }

  add(...data: T[]) {
    this.#value.push(...data);

    if (this.widget) this.widget.addChild(...data);
  }

  remove(data: T) {
    const index = this.#value.indexOf(data);
    if (index > -1) {
      this.#value.splice(index, 1);
      if (this.widget) this.widget.removeChild(index);
    }
  }
}


