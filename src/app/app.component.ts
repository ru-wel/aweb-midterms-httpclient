import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpclientService } from './httpclient.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'http-client-prg';
  httpcomments: any;
  constructor(private httpclientList: HttpclientService){
    this.httpclientList.getUsersRemotely().subscribe((data: any) => {
      this.httpcomments = data.slice(0, 5);
    });
  }
}
