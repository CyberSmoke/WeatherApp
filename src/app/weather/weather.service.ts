import {Injectable} from "@angular/core";
import {WEATHER_ITEMS} from "./weather.data";
@Injectable()
export class WeatherService
{
  public getWeatherItems()
  {
    return WEATHER_ITEMS
  }
}
