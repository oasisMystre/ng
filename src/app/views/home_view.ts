import { AppBar, MaterialApp, Scaffold } from "../../material";
import { Context } from "../../ng/core";
import { Column, Widget } from "../../ng/widgets";

export class HomeView extends Widget {
  build(_context: Context): Widget | HTMLElement {
    return new Scaffold({
      body: new MaterialApp({
        appBar: new AppBar({}),
        home: new Column({
          children: [],
        }),
      }),
    });
  }
}
