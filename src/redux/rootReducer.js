import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import cookieReducer from "./cookies/cookieReducer";
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
  iceCream: iceCreamReducer,
  cake: cakeReducer,
  cookie: cookieReducer,
  user: userReducer,
})

export default rootReducer;
