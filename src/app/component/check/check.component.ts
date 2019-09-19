import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {

  // public bus:any = {
  //   id: "TN 32 M 1234",
  //   trip: true,
  //   route: {
  //     code: "NH32",
  //     from: "Chennai (CMBT)",
  //     to: "Villupuram Bus Stand",
  //   },
  //   seats: [
  //     [
  //       {id: 'D'},
  //       ,
  //       ,
  //       ,
  //       ,
  //       {id: 'C'},
  //     ],
  //     [
  //       {id: 1, booking: true, booked: false},
  //       {id: 2, booking: true, booked: true},
  //       {id: 3, booking: true, booked: true},
  //       ,
  //       {id: 4, booking: true, booked: false},
  //       {id: 5, booking: true, booked: false},
  //     ],
  //     [
  //       {id: 6, booking: true, booked: false},
  //       {id: 7, booking: true, booked: false},
  //       {id: 8, booking: true, booked: false},
  //       ,
  //       {id: 9, booking: true, booked: false, selected: true},
  //       {id: 10, booking: true, booked: false, selected: true},
  //     ],
  //     [
  //       {id: 11, booking: true, booked: false},
  //       {id: 12, booking: true, booked: false},
  //       {id: 13, booking: true, booked: false},
  //       ,
  //       {id: 14, booking: true, booked: false},
  //       {id: 15, booking: true, booked: false},
  //     ],
  //     [
  //       {id: 16, booking: true, booked: false},
  //       {id: 17, booking: true, booked: false},
  //       {id: 18, booking: true, booked: false, selected: true},
  //       ,
  //       {id: 19, booking: true, booked: false},
  //       {id: 20, booking: true, booked: false},
  //     ],
  //     [
  //       {id: 21, booking: true, booked: false},
  //       {id: 22, booking: true, booked: false},
  //       {id: 23, booking: true, booked: false},
  //       ,
  //       {id: 24, booking: true, booked: false},
  //       {id: 25, booking: true, booked: false},
  //     ],
  //     [
  //       {id: 26, booking: true, booked: false, selected: true},
  //       {id: 27, booking: true, booked: false, selected: true},
  //       {id: 28, booking: true, booked: false, selected: true},
  //       ,
  //       {id: 29, booking: true, booked: false},
  //       {id: 30, booking: true, booked: false},
  //     ],
  //     [
  //       {id: 31, booking: true, booked: false, selected: true},
  //       {id: 32, booking: true, booked: false, selected: true},
  //       {id: 33, booking: true, booked: false, selected: true},
  //       ,
  //       {id: 34, booking: true, booked: false},
  //       {id: 35, booking: true, booked: false},
  //     ],
  //     [
  //       {id: 36, booking: true, booked: false},
  //       {id: 37, booking: true, booked: false},
  //       {id: 38, booking: true, booked: false},
  //       ,
  //       {id: 39, booking: true, booked: false, selected: true},
  //       {id: 40, booking: true, booked: false, selected: true},
  //     ],
  //     [
  //       {id: 41, booking: true, booked: false},
  //       {id: 42, booking: true, booked: false},
  //       {id: 43, booking: true, booked: false},
  //       ,
  //       {id: 44, booking: true, booked: false},
  //       {id: 45, booking: true, booked: false},
  //     ],
  //     [
  //       {id: 46, booking: true, booked: false},
  //       {id: 47, booking: true, booked: false},
  //       {id: 48, booking: true, booked: false},
  //       ,
  //       {id: 49, booking: true, booked: false},
  //       {id: 50, booking: true, booked: false},
  //     ],
  //     [
  //       {id: 51, booking: true, booked: false},
  //       {id: 52, booking: true, booked: false},
  //       {id: 53, booking: true, booked: false},
  //       {id: 54, booking: true, booked: false},
  //       {id: 55, booking: true, booked: false},
  //       {id: 56, booking: true, booked: false},
  //     ],
  //   ]
  // };

  public bus:any = {};

  public componentName = "Check Tickets";

  public showToast = false;

  constructor(private _dataService: DataService) { }

  ngOnInit() {

    this.getBusData();

    setInterval(()=> {
      this.getBusData(); 
    },1000);

    this.totalSeatsToVerify(this.bus);
  }

  private getBusData() {
    // this._dataService.getBusData().subscribe(
    //   data => this.totalPassengers(data),
    //   error => console.log(error.status)
    // );
    this.totalSeatsToVerify(this._dataService.getBusData());
  }

  public logComponent() {
    // console.log(this.componentTitle);
  }

  public totalSeatsToVerify(aData) {

    if(aData) {
      this.bus = aData;
    }

    this.bus.reviewerPending = 0;


    for(let i=0; i < this.bus.seats.length; i++) {
      for(let j=0; j < this.bus.seats[i].length; j++) {
        
        if( this.bus.seats[i][j] ) {
          if( this.bus.seats[i][j].booking && this.bus.seats[i][j].booked && !this.bus.seats[i][j].verified ) {
            this.bus.reviewerPending++;
          }
        }

      }
    }

    this._dataService.setBusData(this.bus);
  }

  public updateSelectedTickets() {
    this.bus.reviewerSelected = 0;

    for(let i=0; i < this.bus.seats.length; i++) {
      
      for(let j=0; j < this.bus.seats[i].length; j++) {

          if( this.bus.seats[i][j] ) {
            if( this.bus.seats[i][j].booking && this.bus.seats[i][j].booked && !this.bus.seats[i][j].verified && this.bus.seats[i][j].reviewerSelected ) {
              this.bus.reviewerSelected++;
            }
          }

      }
    }

    this._dataService.setBusData(this.bus);

  }

  public submitReport() {
    this.bus.reviewerSelected = 0;
    
    for(let i=0; i < this.bus.seats.length; i++) {
      
      for(let j=0; j < this.bus.seats[i].length; j++) {
        
          if( this.bus.seats[i][j] ) {
            if( this.bus.seats[i][j].booking && this.bus.seats[i][j].booked && !this.bus.seats[i][j].verified && this.bus.seats[i][j].reviewerSelected ) {
              // console.log(this.bus.seats[i][j].reviewerSelecte);
              this.bus.seats[i][j].reviewerSelected = false;
              console.log(this.bus.seats[i][j].reviewerSelected);
              this.bus.seats[i][j].verified = true;
            }
          }

      }
    }

    this._dataService.setBusData(this.bus);
    
    this.totalSeatsToVerify(this.bus);
    this.showToast = true;
  }

}
