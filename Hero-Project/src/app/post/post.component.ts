import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  title: string = "List of Posts";
  messagePost: string  = "Message from Post component";

  childMessage:string = 'From Child Component';

  outputChildMessage:string = 'Message from child component via output';

  @Output() messageEvent = new EventEmitter<string>();

  msgfrompostlist!:string;
  

  @Input() fromParent!:string;

  consturctor(){}

  ngOnInit(): void {
    
  }

  sendMessage(){
    this.messageEvent.emit(this.outputChildMessage)
   }
   receiveEventEmitterFromPostList($event:string){
    this.msgfrompostlist = $event;
   }

}
