import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit, AfterViewChecked {
  @ViewChild('scroller') private feedContainter: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  scrollToBottom(): void {
    this.feedContainter.nativeElement.scrollTop 
    = this.feedContainter.nativeElement.scrollHeight;
  }
  ngAfterViewChecked()
  {
    this.scrollToBottom();
  }
}
