// import needs: method, url, jsonBody if necessary
// async import what is needed
// fetch
// add method and jsonInput to the fetch header
// await res.json
// return variable that awaits res.json
export const fetchRequest = async (method, urlInput, jsonInput) => {
  const res = await fetch(urlInput, {
    method,
    headers: {
      'Content-Type': 'application/json',
      [jsonInput.length ? 'body' : null]: [jsonInput.length ? jsonInput : null],
    },
  });
  const response = await res.json();
  return response;
};
