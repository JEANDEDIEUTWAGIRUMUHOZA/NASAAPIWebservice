import { Component, OnInit } from '@angular/core';
import { PICTUREService } from '../picture.service';
import { Picture } from '../Models/Picture';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  picture: Picture;
  date: string;


  constructor(public ps: PICTUREService) {
  }

  ngOnInit() {
    this.ps.getPictureOfToday().subscribe(picture => {
    this.picture = picture;
    });
    
  }

 

}
