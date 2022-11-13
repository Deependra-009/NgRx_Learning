import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MobilesComponent } from './Components/mobiles/mobiles.component';
import { ElectronicsComponent } from './Components/electronics/electronics.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from 'src/Reducers';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MobilesComponent,
    ElectronicsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducer, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
