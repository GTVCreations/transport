import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  componentTitle = "Dashboard";

  // @Output() public searchEvent = new EventEmitter();
  
  constructor(private titleService: Title) {
    
  }

  ngOnInit() {
    // this.searchEvent.emit("hello");
  }

  // public logComponent() {
  //   // this.titleService.setTitle( this.componentTitle + aTitle );
  //   console.log(this.componentTitle);
  // }

  // search(data) {
  //   // emit data to parent component
  //   this.searchEvent.emit(data);
  // }

}
