import { Component } from '@angular/core';

// [] --> array
// ./ --> aynı klasör
@Component({
  selector: 'app-root', // index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // birden fazla css olabilir, o yüzden array içinde
})
export class AppComponent {
  title:string = 'northwind';
  user:string = 'Ayşe Akışık'
}
