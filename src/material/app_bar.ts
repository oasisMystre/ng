import type { Context } from "../ng/core";
import { Row } from "../ng/widgets/flex";
import { Text } from "../ng/widgets/text";
import { Widget } from "../ng/widgets/framework";

export type AppBarProps = {
  // leading: Widget,
  title?: string;
  actions?: Widget[];
};

export class AppBar extends Widget {
  private props: AppBarProps;

  constructor(props: AppBarProps) {
    super();

    this.props = props;
  }

  build(_context: Context) {
    const children: Widget[] = [];

    if (this.props.title)
      children.push(new Text(this.props.title, { style: {} }));

    if (this.props.actions)
      children.push(
        new Row({
          children: this.props.actions,
          style: {},
        })
      );

    return new Row({
      children,
      style: {
        position: "sticky",
        top: "0",
        borderBottom: "1px"
      },
    });
  }
}
