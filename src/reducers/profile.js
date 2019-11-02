import {SET_PROFILE_STATE} from "../actions/profile";

export default function(state = {
  gender: 'female',
  nut: false,
  gluten: false,
  vegetarian: false,
  vegan: false,
}, action) {
  switch(action.type){
    case SET_PROFILE_STATE:
      return {
        ...state,
        [action.key]: action.value
      };
    default:
      return state;
  }
}
