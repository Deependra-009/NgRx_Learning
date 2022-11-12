import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicsComponent } from './Components/electronics/electronics.component';
import { MobilesComponent } from './Components/mobiles/mobiles.component';

const routes: Routes = [
  {
    path:"",
    component:MobilesComponent
  },
  {
    path:"electronics",
    component:ElectronicsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
