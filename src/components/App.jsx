import css from "./App.module.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectLoading, selectError } from "../redux/contactsSlice";
import { fetchContacts } from "../redux/contactsOps";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Loader visible={isLoading} />
      <h1 className={css.title}>Phonebook</h1>
      {error && <ErrorMessage message={`Something went wrong: ${error}`} />}

      <div className={css.container}>
        <div className={css["column-left"]}>
          <ContactForm />
        </div>
        <div className={css["column-right"]}>
          <SearchBox />
          <ContactList />
        </div>
      </div>
    </>
  );
}

export default App;
