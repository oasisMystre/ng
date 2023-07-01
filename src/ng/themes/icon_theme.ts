import { Theme } from "./theme";
import { Size } from "./value";

type IconThemeProps = {
  size: Size;
  color: string;
};

export class IconTheme extends Theme<IconThemeProps> {
  get size() {
    return this.props.size;
  }

  get color() {
    return this.props.color;
  }
}
