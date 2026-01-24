import React from "react";

const Radio = ({pergunta, options, onChange, value, id, active}) => {
  if (!active) return null;
  return (
    <fieldset style={{borderRadius: '4px'}}>
      <legend style={{fontWeight: "bold"}}>{pergunta}</legend>
      {options.map((option) => (
        // sempre q tem map precisa de key, vai ser option pq é um valor único sempre
        <label key={option} style={{ marginLeft: 4, fontFamily: 'Arial' }}>
          <input type="radio" name={id} checked={value === option} value={option} onChange={onChange} />
          {option}
        </label>
      ))}
    </fieldset>);
};

export default Radio;