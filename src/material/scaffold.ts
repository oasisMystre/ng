import type { Context } from "../ng/core";

import { setStyle } from "../ng/widgets/Style";
import { renderWidget } from "../ng/widgets/utils";
import { View, type Widget } from "../ng/widgets/framework";

export type ScaffoldProps = {
  body: Widget;
};

export class Scaffold extends View {
  private props: ScaffoldProps;

  constructor(props: ScaffoldProps) {
    super();

    this.props = props;
  }

  build(context: Context) {
    const container = this.wrapper;

    setStyle(container, {
      position: "fixed",
      "top,bottom,left,right": 0,
    });

    renderWidget(context, container, this.props.body);

    return container;
  }
}
