const getPokemons = () => {
  const pokemonsArr = Array.from( Array(650) )
  return pokemonsArr.map((_, i) => i + 1)
}

const getPokemonOptions = () => {
  const  mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
  getPokemonNames(mixedPokemons.splice(0, 4))
  return mixedPokemons
}

// const getPokemonNames = (pokemons = []) => {
const getPokemonNames = ([a,b,c,d] = []) => {
  console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)
}

export default getPokemonOptions;
