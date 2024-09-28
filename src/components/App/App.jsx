import { ContactList } from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import { Heading } from "../Heading/Heading";

import "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from "../../redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />

      {!contacts.length ? (
        <Heading>Create your first contact😉</Heading>
      ) : (
        <>
          <SearchBox />
          <ContactList />
        </>
      )}

      {error && <Heading>Oops! Error</Heading>}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}
