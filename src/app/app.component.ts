import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // profile = {};
  //
  // loadUser() {
  //   this.userService.getUser().subscribe(data => this.profile = data);
  // }

  constructor(private router: Router) {}
  // ngOnInit(): void {
  //   this.http.get('https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCP4g5qGeUSY7OokXfim1QCQ&key=AIzaSyCmedFZ2QVVzQ1cElmU6kPM2PV5YEaQwhY').subscribe(data => {
  //     console.log(data);
  //   });
  // }

}
