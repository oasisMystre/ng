# NG

Widget based renderer for web application

## Why use ng?

This are the reasons you should use `ng` for your next project

### Write view using javascript only, I hate HTML

```js
    import { Widget, Column } from "@ng";

    import { Scaffold, MaterialApp } from "@ng/material";

    export class HomeView extends Widget {
        build(context){
            return new Scaffold({
                body: MaterialApp({
                    appBar: new AppBar(),
                    home: new Column({
                        children: [],
                    }),
                }),
            });
        }
    }
```

### Reactive Widgets with pure javascript

```js
    import { ValueNotifier, ValueListener } from "@ng";

    export class HomeView extends Widget {
        /// Only the Text widget is rerendered

        counter = new ValueNotifier(0);

        build(context){
            return new Column({
                children: [
                    new ValueListener(this.counter, {
                        build: (context, value) => {
                            return new Text(value);
                        }
                    }),
                    new Button({
                        child: new Text("Click me"),
                        onClick: () => {
                            this.counter.value += 1;
                        }
                    })
                ]
            })
        }
    }
```

### Styling made easier with js

```js
    new Text("Hello world in NG", {
        style: {
            color: "red"
        },
    });
```

## Development

Library still in development, join our open source community now or raise suggestions in the discussion tab

> Project structures might change later in future 

