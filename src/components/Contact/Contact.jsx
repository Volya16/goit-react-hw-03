import style from "./Contact.module.css";

import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

export default function Contact({ data, onRemove }) {
  const onClickDelete = () => onRemove(data.id);

  return (
    <div className={style.wrapper}>
      <div className={style.data}>
        <p className={style.text}>
          <FaUser className={style.icon} />
          {data.name}
        </p>
        <p>
          <FaPhone className={style.icon} />
          {data.number}
        </p>
      </div>
      <button className={style.button} onClick={onClickDelete}>
        Delete
      </button>
    </div>
  );
}
