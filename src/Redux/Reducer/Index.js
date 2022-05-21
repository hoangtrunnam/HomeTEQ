
import { combineReducers } from "redux";
import AuthLogin from "./AuthLogin.redux";
import checkIdCreateHome from "./checkIdCreateHome";

const RootReducer = combineReducers({
    AuthLoginToken: AuthLogin,
    checkIdCreateHome: checkIdCreateHome
})

export default RootReducer;