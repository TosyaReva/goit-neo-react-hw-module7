import { useEffect } from "react";
import css from "./App.module.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "../redux/selectors";
import { useDispatch } from "react-redux";
import { addContact, deleteContact, setFilter } from "../redux/actions";

const CONTACT_KEY = "contactBook";

function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem(CONTACT_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleForm = (contact) => {
    dispatch(addContact(contact));
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
    // );
  };

  const handleFIlter = (value) => {
    dispatch(setFilter(value));
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
          <ContactForm handleSubmit={handleForm} />
        </div>
        <div className={css["column-right"]}>
          <SearchBox value={filter} onFilter={handleFIlter} />
          <ContactList contacts={filteredContacts} onDelete={handleDelete} />
        </div>
      </div>
    </>
  );
}

export default App;
