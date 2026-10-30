import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'Hero-Project';
  parentMessage:string = 'Message coming from parent component ** ';

  @ViewChild(PostComponent) childComp: any;

  messageFromChild!:string;
  messageFromChildOutput!:string;
 
  constructor(private cdr: ChangeDetectorRef){
    console.log(this.childComp);
  }

  ngAfterViewInit(){
    console.log(this.childComp);
    this.messageFromChild =this.childComp.childMessage;
    // The value is read after the view was checked, so run change detection again
    // to avoid ExpressionChangedAfterItHasBeenCheckedError (NG0100).
    this.cdr.detectChanges();
  }

  receiveMessage($event: string){
    console.log($event);
    this.messageFromChildOutput = $event;
  }
}
