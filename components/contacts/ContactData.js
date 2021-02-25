import React from "react";
import Avatar from "react-avatar";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../../redux/contacts/contactsActions";

const ContactData = ({ data, deleteContact, selectAll }) => {
  const { name, phone, email, id } = data;
  return (
    <tr>
      <td>
        <div className="custom_control custom_checkbox">
          <input
            checked={selectAll}
            type="checkbox"
            className="custom_control_input"
          />
          <label className="custom_control_label"></label>
        </div>
      </td>
      <td>
        <Avatar className="me-3" name={name} size="45" round={true} />
        {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className="hover_action ">
        <Link to={`/contact/edit/${id}`}>
          <span className="material-icons me-2 "> edit </span>
        </Link>
        <Link to="">
          <span
            className="material-icons text-danger"
            onClick={() => deleteContact(id)}
          >
            {" "}
            remove_circle{" "}
          </span>
        </Link>
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteContact: (id) => dispatch(deleteContact(id)),
  };
};

export default connect(null, mapDispatchToProps)(ContactData);
