import { Component, OnInit } from '@angular/core';
import { SkiService } from 'src/app/service/ski.service';
import { SkiResort } from 'src/app/skiresorts/model/ski-resort.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
skiresorts: SkiResort[];

  constructor(private service: SkiService) { }

  ngOnInit(): void {
    this.getResorts();
  }

  getResorts():void{
    this.service.getResorts().subscribe(x => this.skiresorts = x);
  }
}
