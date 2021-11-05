import React from 'react';
import ReactJson from 'react-json-view';
import '../../Containers/styles/RestyContainer.css';

function RestyDisplay({}) {
  return (
    <section aria-label="resultsDisplay" className="results">
      <ReactJson />
    </section>
  );
}
// TODO add src to ReactJson

export default RestyDisplay;
