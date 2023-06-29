import { Context } from "../core";
import { View, Widget } from "./framework";
import { renderWidget } from "./utils";

type ButtonProps = {
  child: Widget;
  onClick: () => void;
};

export class Button extends View {
  override tagName = "button";
  private props: ButtonProps;

  constructor(props: ButtonProps) {
    super();
    this.props = props;
  }

  build(context: Context) {
    const container = this.wrapper;
    container.onclick = () => this.props.onClick();
    renderWidget(context, container, this.props.child);
    return container;
  }
}
