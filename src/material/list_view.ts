import { range } from "../../utils";
import { View, Widget } from "../widgets/framework";
import { renderWidget } from "../widgets/utils";

export type ListViewProps = {
  itemCount: number;
  buildItem: (index: number) => Widget | View;
};

export class ListView extends View {
  private props: ListViewProps;

  constructor(props: ListViewProps) {
    super();

    this.props = props;
  }

  build(context) {
    const container = this.wrapper;
    const children = range(0, this.props.itemCount).map((index) =>
      this.props.buildItem(index)
    );

    renderWidget(context, container, ...children);

    return container;
  }
}
