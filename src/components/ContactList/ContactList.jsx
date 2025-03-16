import Contact from "../Contact/Contact";

import style from "./ContactList.module.css";

export default function ContactList({ contacts, onRemove }) {
  return (
    <ul className={style.list}>
      {contacts.map((contact) => (
        <li className={style.item} key={contact.id}>
          <Contact data={contact} onRemove={onRemove}></Contact>
        </li>
      ))}
    </ul>
  );
}
