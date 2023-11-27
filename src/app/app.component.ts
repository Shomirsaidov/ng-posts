import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'myapp';
  message = 'Pulbox app';
  posts = {title: 'Some title', text: 'I love dilnoza'}
}
