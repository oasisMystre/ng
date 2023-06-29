import { Context } from "../../ng/core";
import { Text } from "../../ng/widgets/text";
import { Column } from "../../ng/widgets/flex";
import { Widget } from "../../ng/widgets/framework";

import { MaterialApp } from "../../material/app";
import { AppBar } from "../../material/app_bar";
import { Scaffold } from "../../material/scaffold";
import { Button } from "../../ng/widgets/button";
import { ValueListener, ValueNotifier } from "../../ng/providers";

export class HomeView extends Widget {
  counter = new ValueNotifier<number>(0);

  build(_context: Context): Widget {
    return new Scaffold({
      body: new MaterialApp({
        appBar: new AppBar({
          title: "Home",
          actions: [],
        }),
        home: new Column({
          children: [
            new Button({
              child: new Text("Click me", { style: {} }),
              onClick: () => {
                this.counter.value += 1;
              },
            }),
            new ValueListener(this.counter, {
              build: (_context, value) => {
                return new Text(value.toString(), { style: {} });
              },
            }),
          ],
          style: {},
        }),
      }),
    });
  }
}
