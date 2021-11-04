import React from 'react';

function RestyForm() {
  return (
    <form>
      <label htmlFor="urlInput">Add Url Here: </label>
      {/* TODO Add value and onChange to this input */}
      <input id="urlInput" name="urlInput" placeholder="URL"></input>

      <input id="GET" type="radio" name="methodSelector"></input>
      <label for="GET">GET</label>
      <input id="POST" type="radio" name="methodSelector"></input>
      <label for="POST">POST</label>
      <input id="PUT" type="radio" name="methodSelector"></input>
      <label for="PUT">PUT</label>
      <input id="PATCH" type="radio" name="methodSelector"></input>
      <label for="PATCH">PATCH</label>
      <input id="DELETE" type="radio" name="methodSelector"></input>
      <label for="DELETE">DELETE</label>

      <button aria-label="goButton">Go</button>

      <textarea></textarea>
    </form>
  );
  // Input
  // Radio Button Methods
  // Button
  // Text Area for JSON
}

export default RestyForm;
