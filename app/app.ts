import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h1>Hello Electron</h1>
  `
})

export class App {
  constructor() {}
}

bootstrap(App);
