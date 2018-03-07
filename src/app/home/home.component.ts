
import {Component, OnInit} from '@angular/core';
import {HomeService} from './home.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  data = [];
  constructor(private router: Router,private service: HomeService) {

  }
  ngOnInit() {
    this.getServiceData();
  }
  getServiceData() {
    this.service.getData().subscribe((data: any) => {
        this.data = data.items;
        console.log(data.items);
      } ,
      error => {
        console.log('Error Occurred');
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    );
  }
}
