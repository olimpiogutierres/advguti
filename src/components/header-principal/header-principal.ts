import { Component, Input } from '@angular/core';


@Component({
  selector: 'header-principal',
  templateUrl: 'header-principal.html'
})
export class HeaderPrincipalComponent {

  text: string;
  progressValue: number;
  @Input('title') public title: string;
  @Input('progresso') public progresso: number;
  constructor() {
    console.log('Hello HeaderPrincipalComponent Component');
    this.text = this.title;
    this.progressValue = this.progresso;

    console.log(this.title, this.text);
  }
  ionViewWillEnter() {

    console.log(this.progressValue, this.progresso);
  }

}
