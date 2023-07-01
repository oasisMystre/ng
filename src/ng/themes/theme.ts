import { ThemeData, type ThemeDataProps } from ".";
import type { Context } from "../core";

export class Theme<T> {
  protected props: T;

  constructor(props: T) {
    this.props = props;
  }

  static of(context: Context) {
    return context.theme;
  }

  static copyWith(data: ThemeData, value: Partial<ThemeDataProps>) {
    return new ThemeData({
      ...value,
      ...data.props,
    });
  }

  // todo deep merge both props
  static merge(first: ThemeData, second: ThemeData) {
    return new ThemeData({
      iconTheme: second.iconTheme || first.iconTheme,
    });
  }
}
