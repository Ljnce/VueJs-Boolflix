<template>
  <div id="app">
    <router-view :names="names"/>
  </div>
</template>

<script>

import axios from 'axios';
// import Navigation from '@/components/navigations.vue'

    export default {
    name: "App",
    data () {
      return {
        names: null,
        // films: null
      }
    },
    mounted () {
        axios
            .get('http://127.0.0.1:8000/api/players', {
            headers: {
            'Authorization': 'Bearer '+ '',
            "Content-Type": "application/json",
            }
        })
        .then(response => {
            this.names = response.data
            console.log(response.data);
        })
        // var apiBaseUrl = 'https://api.themoviedb.org/3';
        // axios
        //     .get(apiBaseUrl + '/search/tv', {
        //     params: {
        //     'api_key': 'ccb9c8ef6b3a33f07b7be007336fd3e2',
        //     'query': 'halo',
        //     'language': 'en-EN'
        //     },
        //     headers: {
        //     "Content-Type": "application/json"
        //     }
        // })
        // .then(response => {
        //     this.films = response.data.results
        //     console.log(response.data);
        // })
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .halo-stamp {
      height: 200px;
      width: 100vw;
      border: 1px solid black;
  }
}


</style>
