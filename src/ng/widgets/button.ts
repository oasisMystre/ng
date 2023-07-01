import { Context } from "../core";
import { View, Widget } from "./framework";
import { renderWidget } from "./utils";

type ButtonProps = {
  onClick: () => void;
};

export class Button extends View {
  override tagName = "button";

  private child: Widget;
  private props: ButtonProps;

  constructor(child: Widget, props: ButtonProps) {
    super();
    this.child = child;
    this.props = props;
  }

  build(context: Context) {
    const container = this.wrapper;
    container.onclick = () => this.props.onClick();
    renderWidget(context, container, this.child);
    return container;
  }
}

