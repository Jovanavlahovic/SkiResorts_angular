import { Component, Input, OnInit } from '@angular/core';
import { SkiResort } from '../model/ski-resort.model';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.css']
})
export class StaticComponent implements OnInit {
@Input() skiResort: SkiResort;

  constructor() { }

  ngOnInit(): void {
  }

}
