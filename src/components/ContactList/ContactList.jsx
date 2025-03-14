import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { useMemo } from "react";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const filter = useSelector(selectNameFilter);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = useMemo(() => {
    const filterName = filter.toLowerCase();
    return filter
      ? contacts.filter(({ name }) => name.toLowerCase().includes(filterName))
      : contacts;
  }, [filter, contacts]);

  console.log(
    filteredContacts,
    typeof filteredContacts,
    filteredContacts.length
  );

  return (
    <ul className={css["contact-list"]}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
}
