import { Search as SearchIcon } from "react-bootstrap-icons";
import s from "./style.module.css";

export function SearchBar({ onSubmit }) {
  
  function submit(e) {
    console.log('sd')
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value)
   }
  }

 

  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input

        onKeyUp={(e)=> submit(e)}
        className={s.input}
        type="text"
        placeholder="Search a tv show you may like"
      />
    </>
  );
}
