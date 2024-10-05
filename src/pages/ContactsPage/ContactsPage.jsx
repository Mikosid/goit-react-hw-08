import { ContactList } from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import { Heading } from "../../components/Heading/Heading";

import { useDispatch, useSelector } from "react-redux";
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

export default function ContactsPage() {
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
