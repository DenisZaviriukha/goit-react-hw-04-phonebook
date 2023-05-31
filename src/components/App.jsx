import {Forma} from "./Form/Form";

import { Cont } from "./Layout/Layout";
import { GlobalStyle } from "./GlobalStyles";
import { useState } from "react";
import { Contacts } from "./Contacts/Contacts";
import { ContactList } from "./ContactList/ContactList";
import { useEffect } from "react";







export const App = () => {

  const [contacts, setContacts] = useState(() => {
    const localItems = localStorage.getItem('contacts')
    if (localItems !== null) {
      return JSON.parse(localItems)
    }
    else {
      return []
    }
  })
  const [filter, setFilter] = useState('')
  
  const addNewNumber = (newNumber) => {
    setContacts(prevNumbers => [...prevNumbers, newNumber])
  };

  const addFiltredNumbers = (newFiltredNumbers) => {
    setFilter(newFiltredNumbers)
  };

  const deleteNumber = (deleteElId) => {
    setContacts(elements => (
      [...elements.filter(contact => contact.id !== deleteElId)]
    ))
  }

  useEffect(() => {
    localStorage.setItem('contacts',JSON.stringify(contacts))
  }, [contacts])
  

  return (
    <Cont>
      <h1>Phonebook</h1>
      <Forma onAdd={addNewNumber} contactList={contacts} />
      <h2>Contacts</h2>
      <Contacts contactList={contacts} onFilt={addFiltredNumbers} />
      <ContactList contactList={contacts} filterList={filter} onDelete={deleteNumber}/>
      <GlobalStyle />
    </Cont>
  )
}