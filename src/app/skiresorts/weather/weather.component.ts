import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkiService } from 'src/app/service/ski.service';
import { SkiResort } from '../model/ski-resort.model';
import { Weather } from '../model/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  id:number;
  weather: Weather[];

  constructor(private service: SkiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
     this.route.params.subscribe((x) => {
       this.id = x['id'];
       this.getWeather();
     });
  }

  getWeather():void{
    this.service.getWeather(this.id).subscribe(x => this.weather = x);
  }
}
