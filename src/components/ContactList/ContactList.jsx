import Button from "../Button/Button";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { IoIosContact, IoIosCall } from "react-icons/io";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css["contact-list"]}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
