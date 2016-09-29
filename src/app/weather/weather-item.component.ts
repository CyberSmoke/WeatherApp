import {Component} from '@angular/core';

@Component({
  selector: 'weather-item',
  template: `
    <article>
      <div class="col-1">
        <h3>Cityname</h3>
        <p class="info">CLOUDS</p>
      </div>
      <div class="col-2">
        <span class="temperature">32c</span>
      </div>
    </article>
  `,
  styleUrls: ['./../../weather-item.css'] 
})
export class WeatherItemComponent{

}
