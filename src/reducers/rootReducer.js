import { combineReducers } from "redux";

import common from "./common";
import users from "./users";

const rootReducer = combineReducers({
  common,
  users,
});

export { rootReducer };
