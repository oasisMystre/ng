import { Context } from "../core";
import { ImplementationError } from "../exceptions";

import { View, Widget } from "../widgets/framework";
import { renderWidget, resolveWidget } from "../widgets/utils";

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

export class ReactiveWidget extends View {
  render(_context: Context) {
    throw ImplementationError;
  }

  build(_context: Context): any {
    throw ImplementationError;
  }
}

type ValueListenerProps<T> = {
  build: (context: Context, value: T) => Widget;
};

export class ValueListener<T> extends ReactiveWidget {
  private props: ValueListenerProps<T>;
  private notifier: ValueNotifier<T>;

  constructor(notifier: ValueNotifier<T>, props: ValueListenerProps<T>) {
    super();

    this.props = props;
    this.notifier = notifier;
    notifier.addListener((context) => this.render(context));
  }

  render(context: Context): void {
    const parent = this.wrapper.parentNode;
    const element = resolveWidget(
      context,
      this.props.build(context, this.notifier.value)
    );

    if (parent) parent.replaceChild(element, this.wrapper);

    this.wrapper = element;
  }

  build(context: Context) {
    const container = this.wrapper;

    renderWidget(
      context,
      container,
      this.props.build(context, this.notifier.value)
    );

    return container;
  }
}
