import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PictureService {
  private baseURL: string = 'https://localhost:7094/api/Image/';

  //jwtHelperService = new JwtHelperService();
  constructor(private http: HttpClient, private route: Router) {}

  public ImageSave(user: User) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.baseURL + 'ImageUpload', user);
  }
}

export class User {
  Title!: string;
  ImagePath!: string;
}
