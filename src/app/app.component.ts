import { Component } from '@angular/core';
import { AdoptChat } from './adopt-chat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kitten_challenge';

  adoptChats: AdoptChat[] = [
    {
      name: "Toto",
      race: "furi",
      date: new Date(17/7/2018),
      photo:"https://images.pexels.com/photos/1835007/pexels-photo-1835007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

    },
    {
      name: "Anne",
      race: "Orak",
      date: new Date(17/7/2018),
      photo:"https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
    name: "Epi",
      race: "Phani",
      date: new Date(17/7/2018),
      photo:"https://images.pexels.com/photos/2279202/pexels-photo-2279202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }

  ];

  userChats :AdoptChat [] =[
    {
      name: "Epi",
        race: "Phani",
        date: new Date(17/7/2018),
        photo:"https://images.pexels.com/photos/2279202/pexels-photo-2279202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }


  ];


}
