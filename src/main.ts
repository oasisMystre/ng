import { HomeView } from "./app/views/home_view";
import { runApp } from "./ng/widgets";

export default function main() {
  return runApp(new HomeView());
}
