import React, { useState, useEffect } from "react";
import shortid from "shortid";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import {
  getContact,
  updateContact,
} from "../../redux/contacts/contactsActions";
import { useHistory, useParams } from "react-router-dom";

//1:20

const EditContact = ({ getContact, contacts, updateContact }) => {
  let { id } = useParams();
  let history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();

  useEffect(() => {
    if (contacts != null) {
      setName(contacts.name);
      setPhone(contacts.phone);
      setEmail(contacts.email);
    }
    getContact(id);
  }, [contacts]);

  const onUpdateContact = (e) => {
    e.preventDefault();
    console.log("log from onUpdateFun");
    console.log(name, phone, email);
    console.log(contacts);

    const update_contact = Object.assign(contacts, {
      name: name,
      phone: phone,
      email: email,
    });

    updateContact(update_contact);
    history.push("/");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card border-0 shadow">
            <div className="card-header bg-white h2 text-center">
              Add a Contact
            </div>
            <div className="card-body">
              <form onSubmit={(e) => onUpdateContact(e)}>
                <div className="mb-3">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    name="phone"
                    type="number"
                    className="form-control"
                    placeholder="Enter Your Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email Id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <button className="btn btn-outline-warning" type="submit">
                    Update Contact
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("log from map state prop");
  console.log(state);
  return {
    contacts: state.contacts.contactEdit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getContact: (id) => dispatch(getContact(id)),
    updateContact: (data) => dispatch(updateContact(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
