import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

import css from "./Contact.module.css";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <p className={css.text}>
        <BsFillPersonFill className={css.iconPerson} />
        {name}
      </p>
      <p className={css.text}>
        <BsFillTelephoneFill className={css.iconPhone} />
        {number}
      </p>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
