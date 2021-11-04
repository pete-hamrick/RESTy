import React from 'react';
import ReactJson from 'react-json-view';

function RestyDisplay({}) {
  return (
    <section aria-label="resultsDisplay">
      {/* TODO add src to ReactJson */}
      <ReactJson />
    </section>
  );
}

export default RestyDisplay;
