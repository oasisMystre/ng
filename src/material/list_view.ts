import { Context } from "../ng/core";

import { setStyle } from "../ng/widgets/style";
import { resolveWidget } from "../ng/widgets/utils";
import { View, Widget } from "../ng/widgets/framework";

import { Observable, ObservableWidget } from "../ng/providers";

export type ListViewProps<T> = {
  model: Observable<T>;
  buildItem: (data: T) => Widget;
};

export class ListView<T> extends View implements ObservableWidget<T> {
  private props: ListViewProps<T>;
  private children: HTMLElement[];

  constructor(props: ListViewProps<T>) {
    super();

    this.props = props;
    this.children = Array.from(this.props.model.value).map((data) =>
      resolveWidget(new Context(), this.props.buildItem(data))
    );

    this.props.model.setWidget(this);
  }

  addChild(...items: T[]): boolean {
    const children = items.map((data) =>
      resolveWidget(this.context, this.props.buildItem(data))
    );

    this.children.push(...children);
    this.wrapper.append(...children);

    return true;
  }

  removeChild(index: number): boolean {
    const child = this.children[index];

    this.children.splice(index, 1);

    if (child) {
      this.wrapper.removeChild(child);

      return true;
    }

    return false;
  }

  build(_context: Context) {
    const container = this.wrapper;

    setStyle(container, {
      overflow: "scroll",
      height: "100vh",
    });

    this.wrapper.append(...this.children);

    return container;
  }
}
