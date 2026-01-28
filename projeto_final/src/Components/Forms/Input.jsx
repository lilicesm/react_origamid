import React from "react";
import style from "./Input.module.css";

const Input = ({label, type, name, value, onChange, error, onBlur}) => {
  return (
    <div className={style.pai}>
      <label htmlFor={name} className={style.label}>
        {label}
      </label>
      <input 
        id={name} 
        type={type} 
        name={name} 
        className={style.input} 
        value={value} 
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={style.erro}>{error}</p>}
    </div>
  );
}

export default Input;