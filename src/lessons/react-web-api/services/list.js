export const getList = () => {
  return fetch('http://localhost:3333/list')
    .then(data => data.json())
    .catch(error => console.log(error));
}

export const setItem = (item) => {
  return fetch('http://localhost:3333/list', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ item }) })
    .then(data => data.json())
    .catch(error => console.log(error));
}