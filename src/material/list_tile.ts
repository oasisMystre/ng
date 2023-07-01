import { View, Widget } from "../ng/widgets/framework";
import { Column, Expanded, Row } from "../ng/widgets/flex";

export type ListTileProps = {
  leading?: Widget | View;
  title?: Widget | View;
  subtitle?: Widget | View;
};

export class ListTile extends Widget {
  private props: ListTileProps;

  constructor(props: ListTileProps) {
    super();

    this.props = props;
  }

  build() {
    const children = [];
    if (this.props.leading) children.push(this.props.leading);

    if (this.props.title || this.props.subtitle) {
      const fillChildren = [];

      if (this.props.title) fillChildren.push(this.props.title);

      if (this.props.subtitle) fillChildren.push(this.props.subtitle);

      children.push(
        new Expanded(
          new Column({
            children: fillChildren,
            style: {},
          }),
        )
      );
    }

    return new Row({
      children,
      style: {},
    });
  }
}
