const dummyUser = {
  nickname: 'Geonil JANG',
  Post: [],
  Followings: [],
  Followers: [],
};

const initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {},
};


//Action's Names
export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const LOG_IN = 'LOG_IN';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT = 'LOG_OUT';


export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:{
      return {
        ...state,
        isLoggedIn:true,
        user:dummyUser,
        loginData:action.data,
      }
    }
    case LOG_OUT:{
      return {
        ...state,
        isLoggedIn:false,
        user:null,
      }
    }
    default:{
      return {...state}
    }

  }
}
