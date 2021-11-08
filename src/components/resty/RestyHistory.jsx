import React from 'react';

function RestyHistory({ history }) {
  return (
    <section>
      {history.map((item) => {
        <div>
          <h6>{item.method}</h6>
          <p>{item.url}</p>
        </div>;
      })}
    </section>
  );
}

export default RestyHistory;
