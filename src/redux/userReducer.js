import { AUTH_USER } from "./types";

const initialState = {
    userName: '',
    caption: '',
    userType: null,
    matchId: null,
    matchName: '',    
    isAuth: false,
}

export default function userReducer(state = initialState, action) {  
    switch (action.type) {
        case AUTH_USER:
            return { ...state,                             
                userName: action.payload.userName, 
                caption: action.payload.caption,
                userType: action.payload.userType,
                matchId: action.payload.matchId,
                matchName: action.payload.matchName,
                isAuth: action.payload.matchId ? true : false,            
            }
        default: return state;
    }
} 