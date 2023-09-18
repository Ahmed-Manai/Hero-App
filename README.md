# Hero-App
Hero Angular App

# 1- SPA (Single page Application) 
is an app that doesn't need to reload the page during its use and works within a web browser (Angular App is a SPA).

# 2- Angular CLI
is a command line interface that used to: Develop, Scaffold, Maintain Anglar App directly form command shell
(notejs.org)
(cli.angular.io)

```
//install Angular
npm install -g @angular/cli

//create new project in Angular 
ng new <ProjectName>
```
# 3- Angular File Structure

typeScript files:

* tsconfig.app.json (typescript configuration for the app, compile options),
* tsconfig.json (solution stype configuration, used by editor),
* tsconfig.spec.json (typescript configuration for the test app),
* tslint.json (typescript functionality errors)

* package.json (all npm required dependency, name, version, installed inside "node_modules" folder)
* package-lock.json (version information for all package installed in "node_modules" by the npm clinet)

* karma.conf.js (karma unit test configutation for the app)

* angular.json (angular cli configuration for the Angular project)

* editorconfig (core editor configuration for the Angular project)

* .browserslistrc (different browser specific configuration )

folders:
* e2e (end to end test files)
* node_modules (all required files for angular framework )

src folder: 
* app 
* asset (put media files, image, sound, icon...)
* environments (environment variables)
* index.html (main index file for Angular app)
* main.ts (main entry point for Angular app, compile all app component to run in the browser)

