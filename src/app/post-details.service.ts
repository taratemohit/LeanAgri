import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostDetailsService {
  public id: any;
  constructor(private http : HttpClient , private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });
  }

  getPostDetails(): Observable<any> {debugger
    const api = 'https://jsonplaceholder.typicode.com/posts/'+this.id;
    return this.http.get(api);    
  }
  geteditPostDetails(id): Observable<any> {debugger
    const api = 'https://jsonplaceholder.typicode.com/posts/'+this.id;
    return this.http.get(api);    
  }
  getPostComment(): Observable<any> {debugger
    const api = 'https://jsonplaceholder.typicode.com/posts/'+this.id+'/comments';
    return this.http.get(api);    
  }
   

  addPostData(data): Observable<any> {debugger
    const api = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.post(api,data);    
  }
  editPostData(data): Observable<any> {debugger
    const api = 'https://jsonplaceholder.typicode.com/posts/'+this.id;
    return this.http.put(api,data);    
  }
}



 