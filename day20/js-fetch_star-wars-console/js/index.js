console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

fetchData(url)
  .then((data) => console.log(data))
  .catch((error) => console.error("Error", error));
