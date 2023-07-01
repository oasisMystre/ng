import { Context } from "../core";
import { ThemeData } from "../themes";
import { IconTheme } from "../themes/icon_theme";
import { Size } from "../themes/value";
import { Widget } from "./framework";

import { renderWidget } from "./utils";

export function runApp(root: Widget) {
  const context = new Context({
    theme: new ThemeData({
      iconTheme: new IconTheme({
        size: new Size(24, 24),
        color: "gray",
      }),
    }),
  });

  renderWidget(context, document.body, root);
}

export * from "./framework";
export * from "./text";
export * from "./flex";
export * from "./gesture";
export * from "./button";
export * from "./style";
export * from "./utils";
