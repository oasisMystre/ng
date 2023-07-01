import { Context } from "../core";
import { ReactiveWidget, ValueNotifier } from "./reactive";

import { Widget } from "../widgets/framework";
import { resolveWidget, renderWidget } from "../widgets/utils";


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
