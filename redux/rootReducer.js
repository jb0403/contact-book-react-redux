import { combineReducers } from "redux";
import contactsReducer from "./contacts/contactsReducer";

// console.log("flow comes in root reducer  " + contacts);
const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default rootReducer;
