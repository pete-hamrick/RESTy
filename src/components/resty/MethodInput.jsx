import React from 'react';

function MethodInput({ method, onInput, selectedMethod }) {
  return (
    <>
      <input
        id={method}
        type="radio"
        name={method}
        value={method}
        onChange={onInput}
        checked={selectedMethod === method}
      ></input>
      <label htmlFor={method}>{method}</label>
    </>
  );
}

export default MethodInput;
