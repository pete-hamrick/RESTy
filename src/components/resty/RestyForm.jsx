import React from 'react';
import MethodInput from './MethodInput';

function RestyForm({ onSubmit, onInput, urlInput, selectedMethod, jsonInput }) {
  const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="urlInput">Add Url Here: </label>
      <input
        id="urlInput"
        name="urlInput"
        value={urlInput}
        onChange={onInput}
        placeholder="URL"
      ></input>

      {methods.map((method) => (
        <MethodInput
          method={method}
          onInput={onInput}
          selectedMethod={selectedMethod}
        />
      ))}
      {/* <input id="GET" type="radio" name="methodSelector" value={method}></input>
      <label htmlFor="GET">GET</label>
      <input id="POST" type="radio" name="methodSelector"></input>
      <label htmlFor="POST">POST</label>
      <input id="PUT" type="radio" name="methodSelector"></input>
      <label htmlFor="PUT">PUT</label>
      <input id="PATCH" type="radio" name="methodSelector"></input>
      <label htmlFor="PATCH">PATCH</label>
      <input id="DELETE" type="radio" name="methodSelector"></input>
      <label htmlFor="DELETE">DELETE</label> */}

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
