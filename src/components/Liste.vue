<template>
  <div >
    <h2>Détails : {{ $route.params.id }}</h2>
    <div
          v-for="film in info"
          :key="film.imdbID"
        >

          <p>{{film.Title}}</p>
        </div>
  </div>
  
</template>

<script>

const axios = require('axios').default;
export default {
    name: 'Liste',

     data() {
        return {
            info: null,
        }
    },
    mounted () {
        axios
            .get('http://www.omdbapi.com/?i=&apikey=904eed5c')
            .then(response => (this.info = response.data.Search ))
    },
}

</script>

<style scoped>

</style>