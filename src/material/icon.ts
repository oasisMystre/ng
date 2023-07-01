import { Context } from "../ng/core";
import { Widget } from "../ng/widgets";
import { AssetImage } from "../ng/widgets/image";
import { PropsWithStyle } from "../ng/widgets/types/props";

class IconData {
  readonly name: string;
  readonly path: string;

  constructor(name: string, path: string) {
    this.name = name;
    this.path = path;
  }
}

export const Icons = {
  IC_ALARM: new IconData("", ""),
};

type IconProps = {
  width?: number;
  height?: number;
};

export class Icon extends Widget {
  private iconData: IconData;
  private props: IconProps & PropsWithStyle;

  constructor(iconData: IconData, props: IconProps & PropsWithStyle) {
    super();

    this.props = props;
    this.iconData = iconData;
  }

  build(context: Context): Widget | HTMLElement {
    return new AssetImage(this.iconData.path, {
      width: this.props.width || context.iconTheme.size.width,
      height: this.props.height || context.iconTheme.size.height,
    });
  }
}
