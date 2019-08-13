import { Component, OnInit } from '@angular/core';
import { PostDetailsService } from '../post-details.service';
import { ActivatedRoute, Router } from "@angular/router";
import { forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { map } from 'rxjs/operators'
import 'rxjs/add/operator/map';
 @Component({
  selector: 'app-show-post-details',
  templateUrl: './show-post-details.component.html',
  styleUrls: ['./show-post-details.component.css']
})
export class ShowPostDetailsComponent implements OnInit {
  PostDetails: any;
  postdata = [] ;
  PostComment = [] ;
  public id: any;
  Details: Object;
  comments:any;
  finalcomments=[];
  
  constructor(private http : HttpClient , public postdetailsService : PostDetailsService , private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });
   }
  
  ngOnInit() {
    // this.getPostDetails();
    // this.getPostComment() ;
    forkJoin(
        
        this.http.get('https://jsonplaceholder.typicode.com/posts/'+this.id),   
     
        this.http.get('https://jsonplaceholder.typicode.com/posts/'+this.id+'/comments'),  
    )
    .subscribe(([res1, res2]) => {debugger
      this.Details = res1;
      this.postdata.push(this.Details);

      this.comments = res2;
      this.comments.filter(data => {
        if (this.id == data.postId) {
          this.PostComment.push(data);
        }
      });
      //this.PostComment = this.comments;

      // const postof = this.comments.map(element=> {
      //   if(element.postId == this.id){
      //     this.finalcomments.push(element)
      //   }
      // })

    
      
     });



  }
 

}
