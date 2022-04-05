<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quién es este pokemon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
    <PokemonOptions :pokemons="pokemonArr"/>
  </div>
  
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions'

// console.log( getPokemonOptions() )
export default {
  components: { PokemonPicture, PokemonOptions, },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
    }
  },
  methods: {
    async mixPokemonsArr() {
      this.pokemonArr = await getPokemonOptions()
      console.table(this.pokemonArr)
      const rndInt = Math.floor( Math.random() * 4)
      this.pokemon = this.pokemonArr[rndInt]
      console.log("pokemon", this.pokemon, this.pokemon.id)
    }
  },
  mounted() {
    console.log("Mounted")
    this.mixPokemonsArr()
  }

}
</script>