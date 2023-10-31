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
* polyfills.ts (polyfills script for browsers support)
* styles.css (global main css file, css code for the angular app)
* test.ts (main entry point for testing Angular app)

src/app folder: 
* app-routing.module.ts (app router)
* app.component.css (style for the app component)
* app.component.html (makup all html code)
* app.component.spec.ts (unit test)
* app.component.ts (logic)
* app.module.ts (root module, how to assemble the app, contain the imports (AppRoutingModel...) and diclaration(root component : AppComponent...))

# Angular Component 
Angular framework is component based fontend framework (Component are main building block of an angular app)
A Component is a combination of data html template and logics, the component represent an area of view inside the browser (load inside the browser).

# CallBack lifecyle hooks
* ngOnInit (OnInit interface) : invoque after the component initialized inside the DOM (fully loaded inside the browser) 
* ngAfterViewInit (AfterViewInit interface) loaded after the constructor the view initialize 

# Data Binding 
* String Interpotalion = {{title}} : show dynamic data in the view
* Property Binding = [propertyName]='propertyValue' 
* Class Binding = [class.cssMethodName]='condition' ###Html Side
* Style Binding = [style.color] = "bool? 'red' : 'blue'"
* Event Binding = (eventName) = 'MethodName()'
* Event Filtering = (keyup.enter)='MethodName()'
* Template Variable = (keyup.enter)="MethodName(variableName.value)" #variableName
* Two Way Data Binding (from FormsModule) = [(ngModel)]="variableName"
------------------------------------------------
one Way Data Binding : Component ===> View(HTML) 
Two Way Data Binding : Component <==> View(HTML)
------------------------------------------------
 
# Sharing Data Between Components 
* Parent-Child Relationship 
1- Parent to Child Component => @Input
    ----------------------------------------------------------------------------------------
    @Input() ChildVariable!:type ###Child Side
    <childSelector [ChildVariable]='ParentVariable'></childSelector> ###Parent Html Side
    ----------------------------------------------------------------------------------------
2- Child to Parent Component => @ViewChild || @Output & EventEmitter 
    ----------------------------------------------------------------------------------------
    @ViewChild(ChildClassName)Variable:type ###Parent Side
    ngAfterViewInit(){res = this.Variable.ChildVarName;} ### Parent Side
    ----------------------------------------------------------------------------------------
    ### @Output and EventEmitter : ideal to share data that occur on button click, 
    form entries, and user events or actions
    ########################################################################################
    @Output() EventName = new EventEmitter<type>(); ###Child Side
    <button (click)='sendMethodName()'>Click</button> ###Child Html Side
    sendMethodName(){ this.EventName.emit(this.VarToEmit) } ###Child Side
    <childSelector (EventName)='recieveMethodName($event)'></childSelector> ###Parent Html Side
    recieveMethodName($event: type){this.ParVar = $event} ###Parent Side
    ----------------------------------------------------------------------------------------

# Angular Directive 
    * Is used to manipulate the DOM object.
    * Add and Remove html elements from the DOM dynamically.
    * Directive are Components Without a View.
    * Angular Components are Directives, With a View.
# Types of Angular Directive 
    1- Component Directive : is angular directive with a template view.
    2- Structural Directive : can change the DOM layout by adding and removing DOM elements.(Leading with * Symbol)
        => ngFor Dir
        => ngIf Dir
        => ngTemplate Dir (;then VarNameTrue else VarNameFalse | <ng-template #VarNameTrue> <ng-template #VarNameFalse>)
        => ngSwitchCase Dir ([ngSwitch]="VarValue" | *ngSwitchCase = "'ValueN'")
    3- Attribute Directive : can change the apperance or behavior of an element, component, or another directive.
        => ngStyle Dir
         [ngStyle] = "{
        color: isActive ? 'red' : 'blue',
        textTransform: isActive ? 'uppercase' : 'lowercase'
    }"
        => ngClass Dir
        [ngClass]="{
    'main' : isActive,
    'text-weight' : isActive
}"
    4- Custom Directive : can crate our custom directive from scratch.

***************************

# Pipe 
used to transforming data into a particular format (only need that dat transformed in a template or the HTML View)
# inbuilt Pipe
1. Uppercase Pipe 
<h1>{{title | uppercase}}</h1>
2. Lowercase Pipe
<h1>{{title | lowercase}}</h1>
3. Decimal /Number Pipe
<h1>{{count | number}}</h1>
<h1>{{dcValue | number: '1.2-2'}}</h1>
4. Currency Pipe
<h1>{{ price | currency:'JPY' : false : '2.1-1' }}</h1>
5. Date Pipe
<h1>{{ today | date: 'short'}}</h1>
<h1>{{ today | date: 'shortDate'}}</h1>
6. JSON Pipe
<h1>{{ postObj | json }}</h1>
7. Percent Pipe
<h1>{{ 0.675 | percent: '1.1-1' }}</h1>
8. Slice Pipe
<h1>{{ postArray | slice: 0:3 }}</h1>
# Custom Pipe 
-Pipe CLI-----------------------------------------
ng g pipe <folderName>/<pipeName> 
--------------------------------------------------
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'appendCLI'})
export class AppendCLIPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return "City Name CLI: " + value;}}
<h1>{{ userdetails.city | appendCLI}}</h1>

-Pipe with Args-----------------------------------
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'summary' })
export class SummaryPipe implements PipeTransform {
  transform(value: string, length?: number, message?: string): unknown {
    return message +" : "+ value.substring(0, length);}}
<h1>{{dummyText | summary: 10 : 'Msg Name' }}</h1>
--------------------------------------------------

# Angular Services 
angular services, used to share data and common method among components (whether there is a relationship between components or not).

Angular Service|____\ [Component-1]
[Array Object ]|    / [Component-2]
=> group common methods together in Angular Service.


** Dependency Injection 
constructor(private postService: PostService){
    this.posts = postService.postList;}
------------------------------------------------
providers: [PostService],//Injectable Class
OR 
@Injectable({
    providedIn: 'root'
  })

** Create a service using CLI
ng g s <folderName>/<serviceName>

# Angular Interface
** Create a Interface using CLI
ng g i <folderName>/<interfaceName>