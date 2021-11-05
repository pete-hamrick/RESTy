import React from 'react';

function MethodInput({ method, onInput }) {
  return (
    <>
      <input
        id={method}
        type="radio"
        name="methodSelection"
        value={method}
        onChange={onInput}
      ></input>
      <label htmlFor={method}>{method}</label>
    </>
  );
}

export default MethodInput;
