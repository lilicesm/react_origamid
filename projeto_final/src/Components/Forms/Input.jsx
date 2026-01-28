import React from "react";
import style from "./Input.module.css";

const Input = ({label, type, name}) => {
  return (
    <div className={style.pai}>
      <label htmlFor={name} className={style.label}>
        {label}
      </label>
      <input id={name} type={type} name={name} className={style.input}/>
      <p className={style.erro}>Confira o dado inserido novamente</p>
    </div>
  );
}

export default Input;