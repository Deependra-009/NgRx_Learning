import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { getUserData, getUserLoaded, getUserLoading, RootReducerState } from 'src/Reducers';
import { Store } from '@ngrx/store';
import { ApiServiceService } from 'src/app/Service/api-service.service';
import { UserListRequestAction, UserListSuccessAction } from 'src/Actions/user-action';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {


  Data: any = []

  constructor(
    private apiservice: ApiServiceService,
    private store: Store<RootReducerState>
  ) { }

  ngOnInit(): void {
    this.getApiData()
  }

  getApiData() {

    const loading$ = this.store.select(getUserLoading);
    const loaded$ = this.store.select(getUserLoaded);
    const mobiledata = this.store.select(getUserData);

    combineLatest([loaded$, loading$]).subscribe((data) => {
      if (!data[0] && !data[1]) {
        this.apiservice.getData().subscribe(
          (res: any) => {
            console.log(res.ShoppingData.mobile);
            // this.Data=res.ShoppingData.mobile
            this.store.dispatch(new UserListSuccessAction({ data: res.ShoppingData.mobile }))
          },
          (error) => {
            console.log(error);

          }
        )
      }
    })

    this.store.dispatch(new UserListRequestAction());





    mobiledata.subscribe(data => {
      this.Data = data;
      console.log(data);

    })

  }



}
