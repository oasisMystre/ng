import type { AppBar } from "./app_bar";

import type { Context } from "../ng/core";
import { Widget } from "../ng/widgets/framework";
import { Column, Expanded } from "../ng/widgets/flex";

type MaterialAppProps = {
  appBar: AppBar;
  home: Widget;
};

export class MaterialApp extends Widget {
  private props: MaterialAppProps;

  constructor(props: MaterialAppProps) {
    super();

    this.props = props;
  }

  build(_context: Context) {
    return new Column({
      children: [this.props.appBar, new Expanded(this.props.home)],
      style: {},
    });
  }
}
