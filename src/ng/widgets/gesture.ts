import { Context } from "../core";
import { View, Widget } from "./framework";
import { renderWidget } from "./utils";

interface GestureDetectorProps {
  onClick?: (event: MouseEvent) => void;
}

export class GestureDetector extends View {
  private child: Widget;
  private props: GestureDetectorProps;

  constructor(child: Widget, props: GestureDetectorProps) {
    super();

    this.child = child;
    this.props = props;
  }

  build(context: Context): HTMLElement {
    const container = this.wrapper;

    renderWidget(context, container, this.child);

    if (this.props.onClick) container.onclick = this.props.onClick;

    return container;
  }
}
