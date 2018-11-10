import { bindActionCreators } from "react-redux";
import { log } from "util";

const initialState = {
  username: null,
  profile_pic: null
};

const UPDATE_USERNAME = "USERNAME";
const UPDATE_PROFILE_PIC = "PROFILE_PIC";

export function updateUsername(username) {
  return {
    type: UPDATE_USERNAME,
    payload: username
  };
}

export function updateProfilePic(profilePic) {
  return {
    type: UPDATE_PROFILE_PIC,
    payload: profilePic
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.payload
      };
    case UPDATE_PROFILE_PIC:
      return {
        ...state,
        profile_pic: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
