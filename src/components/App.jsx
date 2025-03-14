import css from "./App.module.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";

function App() {
  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
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
