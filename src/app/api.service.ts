import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }

  getPostList(): Observable<any> {
    const api = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(api);    
  }

}
