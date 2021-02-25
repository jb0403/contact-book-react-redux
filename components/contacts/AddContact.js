import React, { useState } from "react";
import shortid from "shortid";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { addContact } from "../../redux/contacts/contactsActions";
import { useHistory } from "react-router-dom";

//1:20

const AddContact = ({ addContact }) => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();

  const createContact = (e) => {
    e.preventDefault();
    console.log(name, phone, email);
    const newContact = {
      id: shortid.generate(),
      name,
      phone,
      email,
    };

    addContact(newContact);
    history.push("/");
  };

  // const { register, handleSubmit } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data);
  //   const newContact = {
  //     ...data,
  //     name: data.name,
  //     phone: data.phone,
  //     email: data.email,
  //   };

  //   addContact(newContact);
  // };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card border-0 shadow">
            <div className="card-header bg-white h2 text-center">
              Add a Contact
            </div>
            <div className="card-body">
              <form onSubmit={(e) => createContact(e)}>
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
                  <button className="btn btn-outline-primary" type="submit">
                    Create-Contact
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

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (data) => dispatch(addContact(data)),
  };
};

export default connect(null, mapDispatchToProps)(AddContact);
