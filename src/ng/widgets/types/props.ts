import { Style } from "../Style";
import { View, Widget } from "../framework";

export type PropsWithChildren = {
  children: Widget[] | View[];
};

export type PropsWithStyle = {
  style: Style;
};
