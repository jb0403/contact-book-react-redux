import { produce } from "immer";
import initialState from "../initialState";
import {
  ADD_CONTACT,
  CLEAR_CONTACT,
  DELETE_CONTACT,
  DELETE_SELECTED_CONTACT,
  GET_CONTACT,
  SELECT_CONTACT,
  UPDATE_CONTACT,
} from "./contactsTypes";

const contactsReducer = (state = initialState, actions) => {
  console.log("this is from reducer");
  console.log(actions);
  console.log(state.contacts);
  switch (actions.type) {
    case ADD_CONTACT:
      // return {
      //   name: state.contacts.actions.payload.name,
      //   phone: state.contacts.actions.payload.phone,
      //   email: state.contacts.actions.payload.email,
      //   ...state,
      // };
      return {
        ...state,
        contacts: [actions.payload, ...state.contacts],
      };
    case GET_CONTACT:
      let arr = state.contacts.filter(
        (contact) => contact.id == actions.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        contactEdit: arr,
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((data) =>
          data.id == actions.payload ? actions.payload : data
        ),
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((data) => data.id !== actions.payload),
      };

    case SELECT_CONTACT:
      return {
        ...state,
        selectedContacts: actions.payload,
      };
    case CLEAR_CONTACT:
      return {
        ...state,
        selectedContacts: [],
      };
    case DELETE_SELECTED_CONTACT:
      return {
        ...state,
        contacts: [],
      };

    default:
      return state;
  }
};

export default contactsReducer;

// const contactsReducer = (state = initialState, actions) => {
//   switch (actions.type) {
//     case ADD_CONTACT:
//       return produce(state, (drafState) => {
//         drafState.push(actions.payload);
//       });

//     default:
//       return state;
//   }
// };
