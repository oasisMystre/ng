import { Style, setStyle } from "./style";
import { View } from "./framework";

export type TextProps = {
  style: Style;
};

export class Text extends View {
  override tagName = "p";

  private data: string;
  private props: TextProps;

  constructor(data: string, props: TextProps) {
    super();

    this.data = data;
    this.props = props;
  }

  build() {
    const el = this.wrapper;
    el.innerText = this.data;

    setStyle(el, this.props.style);

    return el;
  }
}
