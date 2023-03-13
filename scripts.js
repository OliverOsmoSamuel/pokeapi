async function fetchData() {
  let data;

  const res = await fetch(
    "https://pokeapi.co/api/v2/ability/?limit=20&offset=20"
  );
  data = await res.json();
  console.log(data);
}

fetchData();
