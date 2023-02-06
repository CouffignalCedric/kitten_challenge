import { Component, Input } from '@angular/core';
import { AdoptChat } from '../adopt-chat';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent {
  @Input() arrayUser: AdoptChat[] | undefined;

  showElement: boolean = false
}
