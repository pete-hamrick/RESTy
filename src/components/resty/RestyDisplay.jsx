import React from 'react';
import ReactJson from 'react-json-view';

function RestyDisplay({ response }) {
  return (
    <section aria-label="resultsDisplay">
      <ReactJson src={response} />
    </section>
  );
}

export default RestyDisplay;
