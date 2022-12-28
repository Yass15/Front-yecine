import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FirstApp';
  name="yessine";
  Agenda = [
    {Date : "17/12" , message : "Bloc A"},
    {Date : "18/12" , message : "Bloc B"}
  ]
}

