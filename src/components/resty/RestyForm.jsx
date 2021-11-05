import React from 'react';
import MethodInput from './MethodInput';
import '../../Containers/styles/RestyContainer.css';

function RestyForm({ onSubmit, onInput, urlInput, selectedMethod, jsonInput }) {
  const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];
  return (
    <form onSubmit={onSubmit} className="form">
      <label htmlFor="urlInput">Add Url Here: </label>
      <input
        id="urlInput"
        name="urlInput"
        value={urlInput}
        onChange={onInput}
        placeholder="URL"
      ></input>

      {methods.map((method) => (
        <MethodInput method={method} key={method} onInput={onInput} />
      ))}

      <button aria-label="goButton">Go</button>

      <textarea
        name="jsonInput"
        value={jsonInput}
        placeholder="Raw JSON Body"
        onChange={onInput}
      ></textarea>
    </form>
  );
  // could break radio inputs into component and pass props
}

export default RestyForm;
