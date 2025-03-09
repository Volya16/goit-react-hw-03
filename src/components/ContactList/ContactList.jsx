import Contact from "../Contact/Contact";

import style from "./ContactList.module.css";

export default function ContactList({ contacts }) {
  return (
    <ul className={style.list}>
      {contacts.map((contact) => (
        <li className={style.item} key={contact.id}>
          <Contact data={contact}></Contact>
        </li>
      ))}
    </ul>
  );
}
