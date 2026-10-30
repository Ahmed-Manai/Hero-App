# Hero-App

Angular 16 learning project that demonstrates component communication with `@Input`, `@Output` / `EventEmitter` and `@ViewChild`.

![Angular](https://img.shields.io/badge/Angular-16-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.1-3178C6?logo=typescript&logoColor=white)

## Features

The app is a small playground made of three components nested inside `AppComponent`:

```text
AppComponent
├── NavbarComponent   (app-nav)       static header
└── PostComponent     (app-post)
    └── PostlistComponent (app-postlist)
```

- **Parent to child with `@Input`**: `AppComponent` passes `parentMessage` to `PostComponent.fromParent`, and `PostComponent` passes `messagePost` to `PostlistComponent.fromPost`.
- **Child to parent with `@Output` and `EventEmitter`**: clicking the button in `PostComponent` emits `messageEvent`, handled by `AppComponent.receiveMessage()`; the button in `PostlistComponent` emits `eventEmitterListPost`, handled by `PostComponent.receiveEventEmitterFromPostList()`.
- **Child to parent with `@ViewChild`**: `AppComponent` reads `PostComponent.childMessage` in `ngAfterViewInit`.
- NgModule-based setup (`AppModule` + `AppRoutingModule`, no routes defined yet).

## Tech stack

| Tool | Version (package.json) |
| --- | --- |
| Angular | ^16.2.0 |
| Angular CLI / build-angular | ~16.2.2 |
| TypeScript | ~5.1.3 |
| RxJS | ~7.8.0 |
| zone.js | ~0.13.0 |
| Karma + Jasmine | ~6.4 / ~4.6 |

## Project structure

```text
Hero-App/
├── README.md
└── Hero-Project/               # Angular CLI workspace
    ├── angular.json
    ├── package.json
    └── src/
        ├── index.html
        ├── main.ts
        └── app/
            ├── app.module.ts
            ├── app-routing.module.ts
            ├── app.component.*          # Parent: @ViewChild + @Output handler
            ├── navbar/navbar.component.*
            ├── post/post.component.*      # Middle: @Input, @Output, handles postlist event
            └── postlist/postlist.component.*  # Innermost child: @Input, @Output
```

## Getting started

### Prerequisites

- Node.js 16.14+ or 18.10+ (supported range for Angular 16). The build also completed with Node 22.14 during testing.
- npm

### Install and run

```bash
cd Hero-Project
npm ci
npm start            # ng serve, then open http://localhost:4200/
```

### Build

```bash
npm run build        # production build into Hero-Project/dist/hero-project
npm run watch        # development build in watch mode
```

### Test

```bash
npm test                                               # Karma + Jasmine in Chrome (watch mode)
npx ng test --watch=false --browsers=ChromeHeadless    # single headless run
```

## Notes

Angular learning notes written while building this project.

### 1. SPA (Single Page Application)

An app that does not need to reload the page while it is used and runs inside the web browser. An Angular app is a SPA.

### 2. Angular CLI

A command line interface used to develop, scaffold and maintain Angular apps directly from the shell (see nodejs.org and angular.io/cli).

```bash
# install Angular CLI
npm install -g @angular/cli

# create a new Angular project
ng new <ProjectName>
```

### 3. Angular file structure

TypeScript and tooling files:

- `tsconfig.app.json`: TypeScript configuration for the app (compile options)
- `tsconfig.json`: workspace-wide TypeScript configuration, used by the editor
- `tsconfig.spec.json`: TypeScript configuration for tests
- `tslint.json`: lint rules (older Angular versions)
- `package.json`: npm dependencies, name and version; packages are installed into `node_modules`
- `package-lock.json`: exact versions of every package installed in `node_modules`
- `karma.conf.js`: Karma unit test configuration
- `angular.json`: Angular CLI configuration for the workspace
- `.editorconfig`: editor configuration
- `.browserslistrc`: supported browsers

Folders:

- `e2e`: end-to-end tests
- `node_modules`: installed packages, including the Angular framework

`src` folder:

- `app`: application code
- `assets`: media files (images, sounds, icons ...)
- `environments`: environment variables
- `index.html`: main HTML page
- `main.ts`: main entry point that bootstraps the app in the browser
- `polyfills.ts`: polyfills for browser support
- `styles.css`: global styles
- `test.ts`: entry point for tests

`src/app` folder:

- `app-routing.module.ts`: app router
- `app.component.css`: styles for the app component
- `app.component.html`: HTML template
- `app.component.spec.ts`: unit tests
- `app.component.ts`: component logic
- `app.module.ts`: root module; describes how the app is assembled, with its imports (`AppRoutingModule` ...) and declarations (root component `AppComponent` ...)

### Angular components

Angular is a component-based front-end framework; components are the main building blocks of an app. A component combines data, an HTML template and logic, and represents an area of the view rendered in the browser.

### Lifecycle hooks

- `ngOnInit` (`OnInit` interface): called once the component has been initialized.
- `ngAfterViewInit` (`AfterViewInit` interface): called after the component's view and child views have been initialized.

### Data binding

- String interpolation: `{{ }}`
- Sharing data between components (parent-child relationship):

1. Parent to child: `@Input`

    ```ts
    @Input() childVariable!: type;                                  // child component
    ```

    ```html
    <child-selector [childVariable]="parentVariable"></child-selector>  <!-- parent template -->
    ```

2. Child to parent: `@ViewChild`

    ```ts
    @ViewChild(ChildClassName) variable: type;                      // parent component
    ngAfterViewInit() { res = this.variable.childVarName; }         // parent component
    ```

3. Child to parent: `@Output` and `EventEmitter`, ideal for data produced by button clicks, form entries and other user actions

    ```ts
    @Output() eventName = new EventEmitter<type>();                 // child component
    sendMethodName() { this.eventName.emit(this.varToEmit); }       // child component
    receiveMethodName($event: type) { this.parentVar = $event; }    // parent component
    ```

    ```html
    <button (click)="sendMethodName()">Click</button>                <!-- child template -->
    <child-selector (eventName)="receiveMethodName($event)"></child-selector>  <!-- parent template -->
    ```
