import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { PostDetailsService } from '../post-details.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  postform: FormGroup;
  id: any;

  constructor(private formBuilder: FormBuilder ,private http : HttpClient , public postdetailsService : PostDetailsService , private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });
  }

  ngOnInit() {
    this.postform = this.formBuilder.group({
       title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required])
    
  })
  this.onEdit(this.id);
  }
  onEdit(id){
    this.postdetailsService.geteditPostDetails(id).subscribe(
      data =>{debugger
      console.log(data);
       this.postform.get('title').setValue(data.title);
      this.postform.get('body').setValue(data.body);
      },error =>{
        console.log(error)
      }
    );
  
 
  }
  onFormSubmit(form:NgForm){

    
      this.postdetailsService.editPostData(form).subscribe(
        data =>{
        console.log(data);
        
        },error =>{
          console.log(error)
        }
      );
    }

}
