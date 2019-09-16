import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'transport service';

  eventmsg;

  onActivate(componentReference) {
    console.log(componentReference);
    // // Input
    // componentReference.logComponent();

    // // Output
    // //Below will subscribe to the searchItem emitter
    // componentReference.searchEvent.subscribe((data) => {
    //   // Will receive the data from child here 
    //   this.eventmsg = data;
    // });
  }
}
