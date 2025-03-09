import style from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={style.wrapper}>
      <p className={style.text}>Find contact by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
