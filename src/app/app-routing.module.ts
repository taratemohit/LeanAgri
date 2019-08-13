import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEditComponent } from './create-edit/create-edit.component';
import { HeaderComponent } from './header/header.component';
 import { AppComponent } from './app.component';
import { ShowPostDetailsComponent } from './show-post-details/show-post-details.component';
import { PostComponent } from './post/post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
  

const routes: Routes = [
 
  {path : 'CreatePost', component:CreateEditComponent},
 {path : 'ShowDetails', component:ShowPostDetailsComponent},
  {path : 'header', component:AppComponent},
  {path : 'edit',component: EditPostComponent},
  {path : '**', component:PostComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
