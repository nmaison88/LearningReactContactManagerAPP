import React, { Component } from "react";
import Proptypes from "prop-types";

class Contact extends Component {
  state = { showContactInfo: false };
  onDeleteClick =()=>{
}

  render() {
    const { name, email, phone } = this.props.contact;
    const{ showContactInfo}=this.state;
    return (
      <div className=" card card-body mb-3">
        <h4>
          {name}
          <i
            className="fas fa-sort-down" style={{cursor : 'pointer'}}
            onClick={() =>
              this.setState({ showContactInfo: !this.state.showContactInfo })
            }
          />
          <i className='fas fa-times' style={{cursor:'pointer',float: 'right',color: 'red'}} onClick={this.onDeleteClick}></i>
        </h4>
        {showContactInfo ? (<ul className="list-group">
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">{phone}</li>
        </ul>): null}
        
      </div>
    );
  }
}
Contact.propTypes = {
  contact: Proptypes.object.isRequired,
};

export default Contact;
