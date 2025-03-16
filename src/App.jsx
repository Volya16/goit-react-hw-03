import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import initialContacts from "./data/contacts.json";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");

  const addContact = (data) => {
    console.log(data);
    setContacts((contacts) => [...contacts, data]);
  };

  const deleteContact = (id) => {
    setContacts((contacts) => contacts.filter((contact) => contact.id !== id));
  };

  const filteredUsers = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredUsers} onRemove={deleteContact} />
    </>
  );
}
