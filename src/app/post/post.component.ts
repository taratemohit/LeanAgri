import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  PostList: any;
 PostlistLocalStorage : any = [];
 simpleJson : {userId: 3, id: 25, title: "rem alias distinctio quo quis"};
  constructor(private apiService: ApiService , private router: Router) { }

  ngOnInit() {
    // let temp = JSON.parse(localStorage.getItem('postLista'));
    let temp = this.simpleJson;
    this.PostlistLocalStorage = temp == null ? [] : temp ;
    this.getPostList()
  }

  getPostList() { debugger
    if( this.PostlistLocalStorage.length == 0){

      this.apiService.getPostList().subscribe(
        data =>{debugger
          this.PostList = data;
          localStorage.setItem('postLista', JSON.stringify(this.PostList));

        },error =>{
          console.log(error)
        }
      );
    }else{
      this.PostList =   localStorage.getItem('postLista');
    }
   
  }

  getAPostList(id){
    
    this.router.navigate(['/ShowDetails'],
         {queryParams: {id: id}});
  }
  getEditPostList(id){
    this.router.navigate(['/edit'],
    {queryParams: {id: id}});
  }
}
