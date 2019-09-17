import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public siteTitle = 'Transport Service';
  public siteSeperator = ' | ';

  constructor(private titleService: Title) {
    
  }

  // eventmsg;

  onActivate(componentReference) {
    console.log(componentReference.componentName);

    if(componentReference.componentName) {
      this.titleService.setTitle(componentReference.componentName+this.siteSeperator+this.siteTitle);
    } else {
      this.titleService.setTitle(this.siteTitle);
    }
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
