import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  tittle="soy header";
  toggleButtonAdd(){
    console.log('sadasd')
  }
}