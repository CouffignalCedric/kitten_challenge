import { Component, Input } from '@angular/core';
import { AdoptChat } from '../adopt-chat';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent {
  @Input() arrayChat: AdoptChat[] | undefined;
  @Input() arrayUser: AdoptChat[] | undefined;

adoptCat(chat:AdoptChat,index:number){

  this.arrayUser?.push(chat);
  this.arrayChat?.splice(index,1);
}


}


