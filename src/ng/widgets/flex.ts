import type { Context } from "../core";
import type { PropsWithChildren, PropsWithStyle } from "./types/props";

import { setStyle } from "./style";
import { renderWidget } from "./utils";
import { View, Widget } from "./framework";

export type Props = PropsWithChildren & PropsWithStyle;

export class Column extends View {
  private props: Props;

  constructor(props: Props) {
    super();

    this.props = props;
  }

  override build(context: Context) {
    const container = this.wrapper;

    setStyle(container, {
      display: "flex",
      flexDirection: "column",
      ...this.props.style,
    });

    renderWidget(context, container, ...this.props.children);

    return container;
  }
}

export class Row extends View {
  private props: Props;

  constructor(props: Props) {
    super();

    this.props = props;
  }

  override build(context: Context) {
    const container = this.wrapper;
    setStyle(container, {
      display: "flex",
      ...this.props.style,
    });

    renderWidget(context, container, ...this.props.children);

    return container;
  }
}

export class Expanded extends View {
  private child: Widget;

  constructor(child: Widget) {
    super();
    this.child = child;
  }

  override build(context: Context) {
    const container = this.wrapper;

    setStyle(container, {
      flex: "1 1 0",
    });

    renderWidget(context, container, this.child);

    return container;
  }
}
