import React, { Component } from "react";

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "john Doe",
        email: "jondoe@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Karen WIlliams",
        email: "karen@gmail.com",
        phone: "333-333-3333"
      },
      {
        id: 3,
        name: "Henry Johnson",
        email: "Henry@gmail.com",
        phone: "111-111-1111"
      }
    ],
    dispatch: action=> this.setState(state => 
            reducer(state, action))
    };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
