//合并所有reducer再返回
import { combineReducers } from "redux";
import { user } from "./redux/user.redux";

export default combineReducers({
    user
})