import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { timer } from 'rxjs/observable/timer';
@Component({
  selector: 'loading',
  templateUrl: './loading.html',
  // imports: [CommonModule],
  //   declarations: [MyComponent]
})
export class LoadingComponent {

  step: string;
  @Input('showSplash') public showSplash: number;
  text: string;

  constructor() {
    console.log('Hello LoadingComponent Component');
    this.text = 'Hello World';
    timer(3000).subscribe(() => this.showSplash = 1)
  }

}
