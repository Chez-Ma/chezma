export const SET_PROFILE_STATE = 'SET_PROFILE_STATE';
export function setProfileState(key, value){
  return {
    type: SET_PROFILE_STATE,
    key,
    value
  }
}
