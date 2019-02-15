import { Component, Input, Output } from '@angular/core';
import { QuestionService } from '../question/question.service';


@Component({
  selector: 'header-principal',
  templateUrl: './header-principal.html'

})
export class HeaderPrincipalComponent {

  text: string;
  @Output() progressValue: number;
  @Input('title') public title: string;
  @Input('progresso') public progresso: number;

  constructor() {
    console.log('Hello HeaderPrincipalComponent Component');
    this.text = this.title;
    this.progressValue = this.progresso;
  }
}
