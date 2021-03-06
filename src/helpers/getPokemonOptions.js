import pokemonApi from "@/api/pokemonApi"

const getPokemons = () => {
  const pokemonsArr = Array.from( Array(650) )
  return pokemonsArr.map((_, i) => i + 1)
}

const getPokemonOptions = async () => {
  const  mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
  const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4))
  console.table(pokemons)
  return pokemons
}

// const getPokemonNames = (pokemons = []) => {
const getPokemonNames = async ([a,b,c,d] = []) => {
  /*
  console.log("pokemonApi", pokemonApi)
  const resp = await pokemonApi.get(`https://pokeapi.co/api/v2/pokemon/1`)
  console.log(resp.data.name , resp.data.id)
  console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)
  */
  const promiseArr = [
    pokemonApi.get(`https://pokeapi.co/api/v2/pokemon/${a}`),
    pokemonApi.get(`https://pokeapi.co/api/v2/pokemon/${b}`),
    pokemonApi.get(`https://pokeapi.co/api/v2/pokemon/${c}`),
    pokemonApi.get(`https://pokeapi.co/api/v2/pokemon/${d}`),
  ]
  // const responses = await Promise.all(promiseArr)
  // console.log(responses)
  const [p1,p2,p3,p4] = await Promise.all(promiseArr)
  // console.log(responses)
  return [
    {name: p1.data.name, id: p1.data.id},
    {name: p2.data.name, id: p2.data.id},
    {name: p3.data.name, id: p3.data.id},
    {name: p4.data.name, id: p4.data.id},
  ]
}

export default getPokemonOptions;
