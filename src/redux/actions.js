import { nanoid } from "nanoid";

export const addContact = (contact) => {
  return {
    type: "contacts/addContact",
    payload: {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    },
  };
};

export const deleteContact = (id) => {
  return {
    type: "contacts/deleteContact",
    payload: id,
  };
};

export const setFilter = (value) => {
  return {
    type: "filter/setFilter",
    payload: value,
  };
};
