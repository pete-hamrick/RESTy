import React from 'react';
import ReactJson from 'react-json-view';
import '../../Containers/styles/RestyContainer.css';

function RestyDisplay({ response }) {
  return (
    <section aria-label="resultsDisplay" className="results">
      <ReactJson src={response} />
    </section>
  );
}

export default RestyDisplay;
