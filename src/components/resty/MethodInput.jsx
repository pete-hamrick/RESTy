import React from 'react';

function MethodInput({ method, onInput, selectedMethod }) {
  return (
    <>
      <input
        id={method}
        type="radio"
        key={method}
        name="methodSelector"
        value={method}
        onChange={onInput}
        checked={selectedMethod === method}
      ></input>
      <label htmlFor={method}>{method}</label>
    </>
  );
}

export default MethodInput;
