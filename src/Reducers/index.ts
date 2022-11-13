import * as fromUser from "./user-reducer";
import {ActionReducerMap,createSelector} from '@ngrx/store';
export interface RootReducerState{
    mobile:fromUser.UserReducerState;
}

export const rootReducer:ActionReducerMap<RootReducerState>={
    mobile:fromUser.UserReducer
}

export const getUserState=(state:RootReducerState)=>state.mobile;

export const getUserLoaded=createSelector(getUserState,fromUser.getLoaded);
export const getUserLoading=createSelector(getUserState,fromUser.getLoading);
export const getUserData=createSelector(getUserState,fromUser.getData);
