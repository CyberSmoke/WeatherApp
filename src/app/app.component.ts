import { Component } from '@angular/core';
import {WeatherListComponent} from "./weather/weather-list.component";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <header>
        <h1>Angular 2 Weather</h1>
    </header>  
    <weather-list></weather-list>
  `,
  directives: [WeatherListComponent]
})
export class AppComponent {
}
