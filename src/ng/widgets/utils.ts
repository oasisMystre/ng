import { Context } from "../core";
import { View, Widget } from "./framework";

export function resolveWidget(
  context: Context,
  widget: Widget | HTMLElement
): HTMLElement {
  return widget instanceof Widget
    ? resolveWidget(context, widget.build(context))
    : widget;
}

export function renderWidget(
  context: Context,
  parent: HTMLElement,
  ...widgets: Widget[] | View[]
) {
  for (let widget of widgets) {
    const child = resolveWidget(context, widget);

    parent.appendChild(child);
  }
}
