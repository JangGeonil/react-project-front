const initialState  = {
  isLoggedIn: true,
  imagePaths: ["asd","asd","22"],
  mainPosts: [{
    User: {
      id: 1,
      nickname: 'Geonil',
    },
    content: '첫 번째 게시글',
    img:'http://image-notepet.akamaized.net/resize/620x-/seimage/20190222%2F88df4645d7d2a4d2ed42628d30cd83d0.jpg'
  },
  {
    User: {
      id: 2,
      nickname: 'Suzy',
    },
    content: '두 번째 게시글',
    img:'http://image-notepet.akamaized.net/resize/620x-/seimage/20190222%2F88df4645d7d2a4d2ed42628d30cd83d0.jpg'
  }],
};

//Action Names
export const ADD_POST = "ADD_POST";
export const ADD_DUMMY = "ADD_DUMMY";

//Actions
const addPost = {
  type:ADD_POST,
};
const addDummy = {
  type:ADD_DUMMY,
  data:{
    content:'Welcome',
    UserId:1,
    User:{
      nickname:"JANG GEONIL IL"
    }
  }
}



//
export default (state = initialState, action) => {
  switch(action.type){
    case ADD_POST:{
      return {...state}
    }
    case ADD_DUMMY:{
      return {
        ...state,
        mainPosts:[action.data, ...state.mainPosts],
      }
    }
    default:{
      return {...state}
    }
  }
}
