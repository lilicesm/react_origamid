import React from "react";

const types = {
  email: {
    regex: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ ,
    message: 'Preencha um email válido.'
  },
  password : {
    regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    message: 'A senha deve ter no mínimo 8 caracteres, pelo menos uma letra e um número.'
  },
  number: {
    regex: /^\d+$/,
    message: 'Utilize apenas dígitos.'
  }
}

const useForm = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(null);

  function valida(value){
    if(type === false) return true;
    if(value.length === 0) {
      setError('Preencha um valor.');
      return false;
    } else if(types[type] && !types[type].regex.test(value)){
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if(error) {
      valida(target.value);
    }
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    valida: () => valida(value),
    onBlur: () => valida(value),
  };
}

export default useForm;