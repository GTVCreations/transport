import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  componentTitle = "Book";

  constructor() { }

  ngOnInit() {
  }

  public logComponent() {
    console.log(this.componentTitle);
  }
  
}
