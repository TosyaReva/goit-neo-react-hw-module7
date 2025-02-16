import { useState, useEffect } from "react";
import css from "./App.module.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import { nanoid } from "nanoid";
import SearchBox from "./SearchBox/SearchBox";

const defaultContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const CONTACT_KEY = "contactBook";

function App() {
  const [contacts, setContacts] = useState(() => {
    const localData = localStorage.getItem(CONTACT_KEY);
    if (localData) return JSON.parse(localData);
    else return defaultContacts;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem(CONTACT_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const id = nanoid();
    setContacts((prevState) => [...prevState, { id, name, number }]);
  };

  const deleteContact = (id) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== id)
    );
  };

  const filterName = filter.toLowerCase();
  const filteredContacts = filter
    ? contacts.filter(({ name }) => name.toLowerCase().includes(filterName))
    : contacts;

  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <div className={css.container}>
        <div className={css["column-left"]}>
          <ContactForm handleSubmit={addContact} />
        </div>
        <div className={css["column-right"]}>
          <SearchBox value={filter} onFilter={setFilter} />
          <ContactList contacts={filteredContacts} onDelete={deleteContact} />
        </div>
      </div>
    </>
  );
}

export default App;

const defaultData = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];
