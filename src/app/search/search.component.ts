import { Component, OnInit } from '@angular/core';
import { Picture } from '../Models/Picture';
import { PICTUREService } from '../picture.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SEARCHComponent implements OnInit {

  picture: Picture;
 

  constructor(public ps: PICTUREService,
              public ac: ActivatedRoute ) { }

  ngOnInit() {
    const date = this.ac.snapshot.paramMap.get('date');
    this.ps.getPictureByDate(date).subscribe(picture => {
      this.picture = picture;
      });
  }

  

}
