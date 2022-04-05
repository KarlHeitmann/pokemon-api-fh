<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quién es este pokemon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
    <PokemonOptions
      :pokemons="pokemonArr"
      @selection="checkAnswer"
      />

      <template v-if="showAnswer">
        <h2>{{message}}</h2>
        <button @click="newGame">
          Nuevo juego
        </button>
      </template>
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
      showAnswer: false,
      message: '',
    }
  },
  methods: {
    async mixPokemonsArr() {
      this.pokemonArr = await getPokemonOptions()
      console.table(this.pokemonArr)
      const rndInt = Math.floor( Math.random() * 4)
      this.pokemon = this.pokemonArr[rndInt]
      console.log("pokemon", this.pokemon, this.pokemon.id)
    },
    checkAnswer(pokemonId) {
      this.showPokemon = true
      this.showAnswer = true
      if (this.pokemon.id == pokemonId) this.message = "GANASTE"
      else this.message = "No lo era, es " + this.pokemon.name
    },
    async newGame() {
      this.pokemon = null
      this.pokemonArr = await getPokemonOptions()
      const rndInt = Math.floor( Math.random() * 4 )
      this.pokemon = this.pokemonArr[rndInt]
      this.showPokemon = false
      this.showAnswer = false
    }
  },
  mounted() {
    console.log("Mounted")
    this.mixPokemonsArr()
  }

}
</script>