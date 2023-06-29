import { Context } from "../core";
import { Widget } from "./framework";

import { renderWidget } from "./utils";

export function runApp(root: Widget) {
  const context = new Context();

  renderWidget(context, document.body, root);
}
