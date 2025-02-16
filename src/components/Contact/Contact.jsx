import Button from "../Button/Button";
import css from "./Contact.module.css";
import { IoIosContact, IoIosCall } from "react-icons/io";

export default function Contact({ contact, onDelete }) {
  return (
    <div className={css["contact-item"]}>
      <p className={css["contact-value"]}>
        <IoIosContact className={css.icon} size={24} />
        <span className={css["contact-text"]}>{contact.name}</span>
      </p>
      <p className={css["contact-value"]}>
        <IoIosCall className={css.icon} size={24} />
        <span className={css["contact-text"]}>{contact.number}</span>
      </p>
      <Button
        onClick={() => onDelete(contact.id)}
        className={css["contact-delete"]}
        color="red"
        aria-label="Delete Contact"
      ></Button>
    </div>
  );
}
