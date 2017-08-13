import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class ApiService {

  //private baseURL = "https://test-fe2e4.firebaseio.com";
  constructor(private http:Http){}

  getTeam(){
    return new Promise(resolve => {
      this.http.get('https://test-fe2e4.firebaseio.com/teams.json')
      .subscribe(res => resolve(res.json()));
    });
  }
}


