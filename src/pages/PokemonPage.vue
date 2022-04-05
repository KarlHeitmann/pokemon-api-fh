<template>
  <h1>¿Quién es este pokemon?</h1>
  <PokemonPicture :pokemonId="4" :showPokemon="true"/>
  <PokemonOptions :pokemons="pokemonArr"/>
  
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
      pokemonArr: []
    }
  },
  methods: {
    async mixPokemonsArr() {
      this.pokemonArr = await getPokemonOptions()
      console.table(this.pokemonArr)
    }
  },
  mounted() {
    console.log("Mounted")
    this.mixPokemonsArr()
  }

}
</script>