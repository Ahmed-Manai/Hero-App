import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent {

  @Input() fromPost!:string;


  msgFromChildOutput = 'message from child component output list post';

  @Output() eventEmitterListPost = new EventEmitter<string>();

  SendEventFromPostList(){
    this.eventEmitterListPost.emit(this.msgFromChildOutput);
  }

}
