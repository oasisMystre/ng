import type { ThemeData as _ThemeData } from "../themes";

import { Widget } from ".";
import { Context } from "../core";
import { Theme } from "../themes/theme";

type ThemeDataProps = {
  theme: _ThemeData;
};

export class ThemeData extends Widget {
  private props: ThemeDataProps;
  private child: Widget;

  constructor(child: Widget, props: ThemeDataProps) {
    super();

    this.child = child;
    this.props = props;
  }

  build(context: Context): Widget {
    context.theme = Theme.merge(context.theme, this.props.theme);
    this.child.context = context;

    return this.child;
  }
}
