<template>
  <b-card
    :img-src="film.Poster"
    :header="film.Title"
    img-alt="Image"
    img-top
    tag="article"
    style="width:20em; margin:2.5px;"
    img-height="300px"
    class="mb-2"
  >
    <b-card-text>
      {{ (film.Year)? 'mon texte true' : 'est false' }}
    </b-card-text>

    

    <b-button 
      :href="`#/infos/${film.imdbID}`" 
      variant="primary"
    >
      Informations
    </b-button>
  </b-card> 
</template>

<script>

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    name: 'Film',
    props: {
        film: {
            type :Object,
            default: null
        },
        method: { 
            type: Function,
            default: null
        },
    },
    state: {
        favorites: ''
    },
    methods: {
        handleFavorite: function(event) {
            this.$store.commit('change', event)
        }
    }
}
</script>

<style>
</style>