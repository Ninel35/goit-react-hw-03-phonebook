import { Component } from "react";
import FormUser from "./FormUser/FormUser";
import Contacts from "./Contacts/Contacts";
import Filter from "./Filter/Filter";


export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

 sendUserData = (data) => {
    this.setState((prevState) => {
        if (prevState.contacts.find(({name}) => name.toLowerCase() === data.name.toLowerCase())) {
  alert(data.name + " is already in contacts")
        return;
      }

      return {
        contacts: [...prevState.contacts,  data]
      }
    }
    )}

 handlerFilter = (evt) => {
    this.setState(() => {
      return {
        filter: evt.target.value,
      }
    });
  };

handleDelete = (evt) => {
      this.setState((prevState) => {
        return {
          contacts: prevState.contacts.filter(item => {
            return item.id !== evt.target.parentElement.id
          })
       }
      })
  }
   getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
  
render() {
      return(
        <>
            <h1>Phonebook</h1>

          <FormUser sendUserData={this.sendUserData} />
          <h2>Contacts</h2>
          <Filter handlerFilter={this.handlerFilter} />
          <Contacts contactList={this.getVisibleContacts()}
             handleDelete={this.handleDelete} />
          </>
  );
}
};








