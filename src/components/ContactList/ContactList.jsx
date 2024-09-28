import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { Heading } from "../Heading/Heading";
import { selectFilteredContacts } from "../../redux/contactsSlice";

import css from "./ContactList.module.css";

export const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {!visibleContacts.length ? (
        <Heading>We did not find any contact😯</Heading>
      ) : (
        <ul className={css.list}>
          {visibleContacts.map(
            (contact, index) => (
              console.log(contact),
              (
                <li className={css.item} key={contact.id}>
                  <Contact counter={index + 1} {...contact} />
                </li>
              )
            )
          )}
        </ul>
      )}
    </>
  );
};
