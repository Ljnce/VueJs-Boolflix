<template>
   <div id="films">
       <div id="film-search">
           <input type="text" v-model="filmSearch" v-on:keyup.enter="searchFilm">
           <button v-on:click.prevent="searchFilm"> cerca</button>

           <div class="for" v-for="film in films" :key="film.id">
               <h1>{{film.name}}</h1>
               <h2>{{film.lang}}</h2>
               <p>{{film.overview}}</p>
               <img :src="'https://image.tmdb.org/t/p/w342' + film.poster_path" alt="" style="height:200px">
           </div>
       </div>
       <div id="telefilm-search">
           <input type="text" v-model="telefilmSearch" v-on:keyup.enter="searchTelefilm">
           <button v-on:click.prevent="searchTelefilm"> cerca</button>

           <div class="for" v-for="telefilm in telefilms" :key="telefilm.id">
               <h1>{{telefilm.name}}</h1>
               <h2>{{telefilm.lang}}</h2>
               <p>{{telefilm.overview}}</p>
               <img :src="'https://image.tmdb.org/t/p/w342' + telefilm.poster_path" alt="" style="height:200px">
           </div>
       </div>

   </div>
</template>

<script>

import axios from 'axios';
// import $ from 'jquery';

export default {
    name:"film",
    // props:['films'],
    data () {
        return {
            films: null,
            telefilms: null,
            filmSearch: '',
            telefilmSearch: ''
        }
    },
    created() {
       this.searchFilm();
       this.searchTelefilm();
    },
    methods: {
         searchFilm: function () {
            var apiBaseUrl = 'https://api.themoviedb.org/3';
            axios
                .get(apiBaseUrl + '/search/movie', {
                params: {
                'api_key': '',
                'query': this.filmSearch,
                'language': 'en-EN'
                },
                headers: {
                "Content-Type": "application/json"
                }
            })
            .then(response => {
                this.films = response.data.results
                console.log(response.data);
            })
        },
        // photo() {
        //     if (this.film.poster_path == null) {
        //         console.log('none');
        //     }
        // },
         searchTelefilm: function () {
            var apiBaseUrl = 'https://api.themoviedb.org/3';
            axios
                .get(apiBaseUrl + '/search/tv', {
                params: {
                'api_key': '',
                'query': this.telefilmSearch,
                'language': 'it-IT'
                },
                headers: {
                "Content-Type": "application/json"
                }
            })
            .then(response => {
                this.telefilms = response.data.results
                console.log(response.data);
            })
        }
        // photo() {
        //     if (this.film.poster_path == null) {
        //         console.log('none');
        //     }
        // }
    }
    // mounted() {
    //     var apiBaseUrl = 'https://api.themoviedb.org/3';
    //     // var foto = 'https://image.tmdb.org/t/p/w342';
    //     axios
    //         .get(apiBaseUrl + '/search/tv', {
    //         params: {
    //         'api_key': 'ccb9c8ef6b3a33f07b7be007336fd3e2',
    //         'query': 'avengers',
    //         'language': 'en-EN'
    //         },
    //         headers: {
    //         "Content-Type": "application/json"
    //         }
    //     })
    //     .then(response => {
    //         this.films = response.data.results
    //         console.log(response.data);
    //     })
    // }
}

</script>

<style lang="scss">
   #films {
        width: 100vw;
        display: flex;
        justify-content: space-around;
       #film-search {
           min-height: 100vh;
            width: 40%;
            float: left;
            border: 1px solid red;
       }
       #telefilm-search {
           min-height: 100vh;
           width: 40%;
           float: right;
           border: 1px solid green;
       }
   }
</style>
