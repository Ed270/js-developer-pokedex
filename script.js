async function buscarPokemon() {
  const nome = document.getElementById("pokemon-name").value.toLowerCase().trim();
  const card = document.getElementById("pokemon-card");

  if (!nome) {
    card.innerHTML = "<p>Digite um nome ou número válido!</p>";
    return;
  }

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
    if (!response.ok) throw new Error("Pokémon não encontrado");

    const data = await response.json();

    card.innerHTML = `
      <h2>${data.name.toUpperCase()} (#${data.id})</h2>
      <img src="${data.sprites.front_default}" alt="${data.name}">
      <p><b>Tipo:</b> ${data.types.map(t => t.type.name).join(", ")}</p>
      <p><b>Peso:</b> ${data.weight / 10} kg</p>
      <p><b>Altura:</b> ${data.height / 10} m</p>
    `;
  } catch (error) {
    card.innerHTML = "<p>Pokémon não encontrado!</p>";
  }
}
