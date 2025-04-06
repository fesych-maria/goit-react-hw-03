import "./App.css";
import Container from "./components/Container/Container";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useState } from "react";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [text, setText] = useState("");
  const handleChange = (value) => {
    setText(value);
  };

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox handleChange={handleChange} value={text} />
      <ContactList contacts={filterContacts} />
    </Container>
  );
};

export default App;
