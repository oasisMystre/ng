import { ThemeData } from "./themes";

type ContextProps = {
  theme: ThemeData;
};

export class Context {
  private props: ContextProps;

  constructor(props: ContextProps) {
    this.props = props;
  }

  get theme() {
    return this.props.theme;
  }

  set theme(theme: ThemeData) {
    this.props.theme = theme;
  }
}
