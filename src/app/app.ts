import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<p>app</p>`,
})
export class App {
  constructor() {
    console.log('app comp init');
  }
}
