import { Context } from "../ng/core";
import { View, Widget, resolveWidget } from "../ng/widgets";

type AssetImageProps = {
  width: number;
  height: number;
  onError?: () => Widget;
  onLoading?: () => Widget;
};

export class AssetImage extends View {
  private path: string;
  private props: AssetImageProps;

  constructor(path: string, props: AssetImageProps) {
    super();

    this.path = path;
    this.props = props;
  }

  build(context: Context): HTMLElement {
    const container = this.wrapper;
    const provider = new Image(this.props.width, this.props.height);
    provider.src = this.path;

    provider.onerror = () => {
      if (this.props.onError) {
        const errorWidget = resolveWidget(context, this.props.onError());
        container.replaceChildren(errorWidget);
      }
    };

    provider.onload = () => {
      container.replaceChildren(provider);
    };

    if (this.props.onLoading)
      container.appendChild(resolveWidget(context, this.props.onLoading()));

    return container;
  }
}
