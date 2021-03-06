import { Component } from '@angular/core';
import {WeatherListComponent} from "./weather/weather-list.component";
import {WeatherSearchComponent} from "./weather/weather-search.component";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <header>
        <h1>Angular 2 Weather</h1>
    </header>  
    <my-weather-search></my-weather-search>
    <weather-list></weather-list>
  `,
  directives: [WeatherListComponent, WeatherSearchComponent]
})
export class AppComponent {
}
