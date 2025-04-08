import "./App.css";
import Container from "./components/Container/Container";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useEffect, useState } from "react";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }

    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [text, setText] = useState("");
  const handleChange = (value) => {
    setText(value);
  };

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(text.toLowerCase())
  );

  const addContacts = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContacts = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <Container>
      <h1 className="heading">Phonebook</h1>
      <ContactForm addContacts={addContacts} />
      <SearchBox handleChange={handleChange} value={text} />
      <ContactList contacts={filterContacts} deleteContacts={deleteContacts} />
    </Container>
  );
};

export default App;
