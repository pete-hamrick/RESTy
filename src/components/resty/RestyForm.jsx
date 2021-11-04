import React from 'react';

function RestyForm() {
  return (
    <form>
      <label htmlFor="urlInput">Add Url Here: </label>
      {/* TODO Add value and onChange to this input */}
      <input id="urlInput" name="urlInput" placeholder="URL"></input>

      <input id="GET" type="radio" name="methodSelector"></input>
      <label htmlFor="GET">GET</label>
      <input id="POST" type="radio" name="methodSelector"></input>
      <label htmlFor="POST">POST</label>
      <input id="PUT" type="radio" name="methodSelector"></input>
      <label htmlFor="PUT">PUT</label>
      <input id="PATCH" type="radio" name="methodSelector"></input>
      <label htmlFor="PATCH">PATCH</label>
      <input id="DELETE" type="radio" name="methodSelector"></input>
      <label htmlFor="DELETE">DELETE</label>

      <button aria-label="goButton">Go</button>

      <textarea placeholder="Raw JSON Body"></textarea>
    </form>
  );
  // could break radio inputs into component and pass props
}

export default RestyForm;
