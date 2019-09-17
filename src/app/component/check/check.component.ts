import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent implements OnInit {

  componentName = "Verify Tickets";

  constructor() { }

  ngOnInit() {
  }

  public logComponent() {
    // console.log(this.componentTitle);
  }

}
