import { Component } from '@angular/core';
@Component({
  selector: 'bs-home',
  template: `
    <body style="background-color: #d1cac2;">
    <div class="ui container" style="padding-left: 200px; padding-right: 200px; display: flex; justify-content: center; align-items: center; flex-direction: column; height: 100vh; margin-top: -50px;">
      <h1 style="font-size: 36px;">Welcome to Padlet 2023</h1>
      <p style="font-size: 24px;">Your are currently on Home</p>
      <a routerLink="../padlets" class="ui tiny labeled icon button" style="font-size: 18px; background-color: #1d1d1d; color: #f3f2ee">
        <i class="right arrow icon"></i> to Padlet overview</a>
    </div>
    </body>

  `,
  styles: []
})
export class HomeComponent { }
