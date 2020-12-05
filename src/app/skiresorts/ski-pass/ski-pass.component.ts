import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkiService } from 'src/app/service/ski.service';
import { Reservation } from '../model/reservation.model';
import { SkiPass } from '../model/ski-pass.model';

@Component({
  selector: 'app-ski-pass',
  templateUrl: './ski-pass.component.html',
  styleUrls: ['./ski-pass.component.css']
})
export class SkiPassComponent implements OnInit {
skiPassList: SkiPass[];
id: number;
reservation: Reservation;
dateFrom;
dateTo;

  constructor(private service: SkiService, private route: ActivatedRoute) { 
    this.reservation = new Reservation();
    this.reservation.price = 0;
  }

  ngOnInit(): void {
    this.route.params.subscribe(x => {
      this.id = x['id'];
      this.getSkiPassList();
    })
  }

  getSkiPassList():void{
    this.service.getSkiPass(this.id).subscribe(x => {
      this.skiPassList = x;
    });
  }

  setDateFrom():void{
    this.reservation.dateFrom = new Date(this.dateFrom.year, this.dateFrom.month-1, this.dateFrom.day);
   this.calculatePrice();
  }

  setDateTo():void{
    this.reservation.dateTo = new Date(
      this.dateTo.year,
      this.dateTo.month-1,
      this.dateTo.day
    );
    this.calculatePrice();
   
  }

  calculatePrice():void{
    let days = 0;
    if(this.reservation.dateFrom && this.reservation.dateTo){
      days = this.reservation.dateTo.getDate()-this.reservation.dateFrom.getDate();
    } else if(this.reservation.dateFrom && !this.reservation.dateTo){
      this.reservation.price = this.skiPassList[0].price;
    }
    for (var i = 0; i < this.skiPassList.length; i++) {
      if (this.skiPassList[i].duration == days) {
        this.reservation.price = this.skiPassList[i].price;
      }
    } 
  }

  submitReservation():void{
    this.reservation._id = this.skiPassList[0].mountain_id;
    console.log(this.reservation);
    this.service.createReservation(this.reservation).subscribe(x => {
      window.alert("Reservation added!")
    })
  }

}
