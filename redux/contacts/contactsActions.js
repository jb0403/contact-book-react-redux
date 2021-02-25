import {
  ADD_CONTACT,
  CLEAR_CONTACT,
  DELETE_CONTACT,
  DELETE_SELECTED_CONTACT,
  GET_CONTACT,
  SELECT_CONTACT,
  UPDATE_CONTACT,
} from "./contactsTypes";

export const addContact = (data) => {
  console.log("this is from Action    :   ");
  console.log(data);
  return {
    type: ADD_CONTACT,
    payload: data,
  };
};

export const getContact = (id) => ({
  type: GET_CONTACT,
  payload: id,
});

export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

export const selectAllContact = (id) => ({
  type: SELECT_CONTACT,
  payload: id,
});
export const clearContact = () => ({
  type: CLEAR_CONTACT,
});
export const deleteSelectedContact = () => ({
  type: DELETE_SELECTED_CONTACT,
  contacts: [],
});
