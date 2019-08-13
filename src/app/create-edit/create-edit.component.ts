import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { PostDetailsService } from '../post-details.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css']
})
export class CreateEditComponent implements OnInit {
  postform: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, public postdetailsService: PostDetailsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.postform = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required])

    })
  }

  onFormSubmit(form: NgForm) {
    debugger


    this.postdetailsService.addPostData(form).subscribe(
      data => {
        console.log(data);
        let TempPostlist = JSON.parse(localStorage.getItem('postLista'));
        TempPostlist.push(data);
        this.router.navigate(['/']);
      }, error => {
        console.log(error)
      }
    );
  }

}
