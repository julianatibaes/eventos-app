import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router'; // adicionar

//material design
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';


// components
import { NewClientComponent } from './client/new-client/new-client.component';
import { EditClientComponent } from './client/edit-client/edit-client.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './login/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ListEventComponent } from './event/list-event/list-event.component';
import { NewEventComponent } from './event/new-event/new-event.component';
import { ListPlaceComponent } from './place/list-place/list-place.component';
import { NewPlaceComponent } from './place/new-place/new-place.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'new-client', component: NewClientComponent },
  { path: 'edit-client', component: EditClientComponent },
  { path: 'list-client', component: ListClientComponent },
  { path: 'new-event', component: NewEventComponent },
  { path: 'list-event', component: ListEventComponent },
  { path: 'new-place', component: NewPlaceComponent },
  { path: 'list-place', component: ListPlaceComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NewClientComponent,
    EditClientComponent,
    ListClientComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ListEventComponent,
    NewEventComponent,
    ListPlaceComponent,
    NewPlaceComponent
  ],
  imports: [
    RouterModule.forRoot(routes), // adicionar
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule] //adicionar
})
export class AppModule { }
