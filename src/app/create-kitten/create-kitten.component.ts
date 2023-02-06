import { Component, Input } from '@angular/core';
import { AdoptChat } from '../adopt-chat';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent {
@Input() arrayChat: AdoptChat[ ] | undefined;

name:string ="";
race="";
date=new Date();
photo= "";



  
  
  constructor() {}

createKitten(){
  this.arrayChat?.push( new AdoptChat(this.name,this.race,this.date,this.photo))

}


  }

