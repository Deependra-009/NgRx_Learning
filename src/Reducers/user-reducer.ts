import { Action } from "src/Actions";
import { USER_LIST_REQUEST, USER_LIST_SUCCESS } from "src/Actions/user-action";

export interface UserReducerState{
    loading:boolean;
    loaded:boolean;
    data:any[];
}

const initalState:UserReducerState={
    loading:false,
    loaded:false,
    data:[]
}

export function UserReducer(state=initalState,action:Action){
    switch(action.type){

        case USER_LIST_REQUEST:{
            return {...state,loading:true}
        }

        case USER_LIST_SUCCESS:{
            const data=action.payload.data;
            return {...state,loading:false,loaded:true,data:data};
        }
        default:{
            return state;
        }

    }
}

// selectors

export const getLoading=(state:UserReducerState)=>state.loading;
export const getLoaded=(state:UserReducerState)=>state.loaded;
export const getData=(state:UserReducerState)=>state.data;