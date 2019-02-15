import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Picture } from './Models/Picture';


@Injectable({
  providedIn: 'root'
})
export class PICTUREService {

  API_URL = 'https://api.nasa.gov/planetary/apod?api_key=';
  API_KEY = 'dYLIiYAa6jTETfEn6UA8vJirSjhR4ezmn4H8aNjj';

  constructor(public http: HttpClient) {
  }

  getPictureByDate(date: string): Observable <Picture> {
    return this.http.get<Picture> (
      this.API_URL +
      this.API_KEY +
      '&date=' + date);
    
  }

  getPictureOfToday(): Observable <Picture> {
    return this.http.get<Picture> (
      this.API_URL +
      this.API_KEY +
      '&date=' );
    
  }

  
}
