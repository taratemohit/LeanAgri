import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEditComponent } from './create-edit/create-edit.component';
import { ShowPostComponent } from './show-post/show-post.component';
import { ShowPostDetailsComponent } from './show-post-details/show-post-details.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AlertModule } from 'ngx-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import {MatInputModule} from '@angular/material/input';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPostComponent } from './edit-post/edit-post.component';
 
@NgModule({
  declarations: [
    AppComponent,
    CreateEditComponent, 
    ShowPostComponent,
    ShowPostDetailsComponent,
    HeaderComponent,
    PostComponent,
    EditPostComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
