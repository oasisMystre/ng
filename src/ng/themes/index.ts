import { IconTheme } from "./icon_theme";

export type ThemeDataProps = {
  iconTheme: IconTheme;
};

export class ThemeData {
  readonly props: ThemeDataProps;

  constructor(props: ThemeDataProps) {
    this.props = props;
  }

  get iconTheme() {
    return this.props.iconTheme;
  }
}
