import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  clearContact,
  selectAllContact,
  deleteSelectedContact,
} from "../../redux";
// import { deleteSelectedContact } from "../../redux/contacts/contactsActions";
import ContactData from "./ContactData";

const Contacts = ({
  contacts,
  selectAllContact,
  clearContact,
  selectedContacts,
  deleteSelectedContact,
}) => {
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    // if (selectAll) {
    //   selectAllContact(contacts.map((data) => data.id));
    // } else {
    //   clearContact();
    // }
    selectAll
      ? selectAllContact(contacts.map((data) => data.id))
      : clearContact();
  }, [selectAll]);

  // console.log("this is props  : " + props);
  // console.log("this is props log ");
  // console.log(contacts);
  return (
    <>
      {selectedContacts.length > 0 ? (
        <button
          className="btn btn-outline-danger mb-3"
          onClick={() => deleteSelectedContact()}
        >
          Delete All
        </button>
      ) : null}

      <table className="table shadow">
        <thead className="bg-danger text-white">
          <tr>
            <th scope="col">
              <div className="custom_control custom_checkbox">
                <input
                  id="selectAll"
                  type="checkbox"
                  className="custom_control_input"
                  value={selectAll}
                  onClick={() => setSelectAll(!selectAll)}
                />
                <label
                  htmlFor="selectAll"
                  className="custom_control_label"
                ></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((data) => (
            <ContactData data={data} key={data.id} selectAll={selectAll} />
          ))}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => {
  // console.log("this is mapState log : ");
  // console.log(state.contacts.contacts);
  return {
    contacts: state.contacts.contacts,
    selectedContacts: state.contacts.selectedContacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectAllContact: (id) => dispatch(selectAllContact(id)),
    clearContact: () => dispatch(clearContact()),
    deleteSelectedContact: (id) => dispatch(deleteSelectedContact()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
