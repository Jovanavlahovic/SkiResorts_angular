import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkiService } from '../service/ski.service';
import { SkiResort } from './model/ski-resort.model';

@Component({
  selector: 'app-skiresorts',
  templateUrl: './skiresorts.component.html',
  styleUrls: ['./skiresorts.component.css']
})
export class SkiresortsComponent implements OnInit {
skiResort: SkiResort;
id: number;
active = 1;

  constructor(private service: SkiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(x => {
      this.id = x['id'];
      this.getResort();
    })
    
  }

  getResort(): void{
    this.service.getResort(this.id).subscribe(x => this.skiResort = x);
  }

}
