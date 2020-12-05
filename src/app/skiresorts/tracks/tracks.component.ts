import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkiService } from 'src/app/service/ski.service';
import { Tracks } from '../model/tracks.model';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
id: number;
tracks: Tracks[];

params = {
  sort: 'rating'
}

  constructor(private service: SkiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.route.params.subscribe((x) => {
       this.id = x['id'];
      this.getTracks();
     });
    
  }

  getTracks():void{
    this.service.getTracks(this.id, this.params).subscribe(x => this.tracks = x);
  }

}
