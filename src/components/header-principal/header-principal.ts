import { Component, Input } from '@angular/core';


@Component({
  selector: 'header-principal',
  templateUrl: 'header-principal.html'
})
export class HeaderPrincipalComponent {

  text: string;

  constructor() {
    console.log('Hello HeaderPrincipalComponent Component');
    this.text = 'Hello World';
  }

}
