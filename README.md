# NG

Widget based renderer for web application.

This project is written using pure typescript with no third party. 

> Tree shake is supported by default

## Why use ng?

These are the reasons you should use `ng` for your next project

### Write views using javascript only, I hate HTML

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

`NG` support reactive widget states

#### ValueNotifier

Listen to value change and rerender a widget. Make sure ValueListener is used for the deep child to prevent
expensive rerendering

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

#### Observables

Observable use observables with list view

```js
    import { Observable, ObservableWidget } from "@ng/reactive";

    const users = new Observable <User[]>([]);

    new ListView.reactive({
        observable: users,
        itemBuilder: (user) => {
            return new GestureDetector(new Text(user.username), {
                onClick: (event) => {
                    this.model.remove(user);
                },
            });
        },
    });

    new Button(new Text("Add new user"), {
        onClick: () => {
            this.users.add({ username: "Caleb is a genius" })
        }
    })
```

### Styling made easier with js

```js
    new Text("Hello world in NG", {
        style: {
            color: "red"
        },
    });
```

## Theming

Provide theme information to child or parent widgets. Parent widgets are used as default for child predecessors

```js
    import { ThemeData } from "@ng/widgets";

    new ThemeData(new Column({}), {
        theme: new Theme({
            iconTheme: new IconTheme({
                size: new Size(24, 24),
            }),
            textTheme: new TextTheme({
                largeText: new TextThemeData({
                    fontSize: 24,
                    fontFamily: 32,
                }),
            }),
        }),
    });
```

## Development

Library still in development, join our open source community now or raise suggestions in the discussion tab

> Project structures might change later in future
> Or restart project with more concise structure
