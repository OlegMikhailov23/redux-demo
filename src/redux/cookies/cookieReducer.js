import { BUY_COOKIE} from "./cookieTypes";

const initialState = {
  numOfCookies: 56,
}

const cookieReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_COOKIE:
        return {
          ...state,
          numOfCookies: state.numOfCookies - 1,
        }
  
    default:
      return state;
  }
}

export default cookieReducer;
