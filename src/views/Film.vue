<template>
   <div id="films">
       <!-- Login -->
       <div id="login" v-if="!click">
           <div class="heroflix-login">
               <div class="logo">
                   <img class="logo-heroflix" alt="Vue logo" src="../assets/logo copia.png" />
               </div>
               <div class="user-choice">
                   <img alt="Ironman" class="iron" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e13eb438650505.598fa118c8eab.jpg" @click="click = true" />
                   <img alt="Wonder"  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/61b37438650505.598fa7a1c8da3.jpg" @click="click = true" />
                   <img alt="Tchalla"  src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1454d038650505.598fa118c9674.jpg" @click="click = true" />
               </div>
           </div>
       </div>
       <!-- Header -->
       <div class="header">
           <!-- Alternativa Header utilizzando App.vue e importanto <Header /> e <Navigation /> -->
            <img alt="Vue logo" src="../assets/hero.png" />
       </div>
       <!-- Main -->
       <div id="heroflix">

            <div id="film-search" v-if="click">
                <div class="input">
                    <h1> Film </h1>
                    <input type="text" v-model="filmSearch" v-on:keyup.enter="searchFilm(); showFilm();" placeholder="Cerca un film">
                    <button v-on:click.prevent="searchFilm(); showFilm();"> cerca</button>
                </div>
                <div class="default-film">
                    <h1>La tua top 3</h1>
                    <img src="https://image.tmdb.org/t/p/w1280/oqvx02LqhXcdlbFDhbMcuSFxzir.jpg" alt="">
                     <small>Avengers Infinity War</small>
                </div>
                <div class="default-film">
                   <img src="https://image.tmdb.org/t/p/w1280/gj0fKa4jjwxZLmVq7I8tv13V45.jpg" alt="">
                    <small>Avengers End Game</small>
                </div>
                <div class="default-film">
                    <img src="https://image.tmdb.org/t/p/w1280/fVKewiBPcY2dQujYEsnQmQ7lfRZ.jpg" alt="">
                    <small>Lord of the Rings</small>
                </div>
                <div class="cards" v-for="film in films" :key="film.id">
                    <h1>{{film.title}}</h1>
                    <small>Lang {{film.original_language}}</small>
                    <img :src="'https://image.tmdb.org/t/p/w342' + film.poster_path" alt="">
                    <div class="hover">
                        <h5> {{film.vote_average | decimalFilm}} </h5>
                    </div>
                    <p>{{film.overview}}</p>
                </div>
            </div>
            <div id="telefilm-search">
                <div class="input">
                    <h1> Serie Tv </h1>
                    <input type="text" v-model="telefilmSearch" v-on:keyup.enter="searchTelefilm(); showTelefilm();" placeholder="Cerca una serie tv">
                    <button v-on:click.prevent="searchTelefilm(); showTelefilm();"> cerca</button>
                </div>
                <div class="default-telefilm">
                    <h1>La tua top 3</h1>
                    <img src="https://image.tmdb.org/t/p/w1280/wSS25kvLxYNLGEYbmWVEF4aoGPt.jpg" alt="">
                    <small>The Witcher</small>
                </div>
                <div class="default-telefilm">
                    <img src="https://image.tmdb.org/t/p/w1280/9l6cJGkqBiV0CpWESbPZGvI8szP.jpg" alt="">
                    <small>Punisher</small>
                 </div>
                <div class="default-telefilm">
                     <img src="https://image.tmdb.org/t/p/w1280/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg" alt="">
                      <small>Game of Thrones</small>
                </div>
                <div class="cards" v-for="telefilm in telefilms" :key="telefilm.id">
                    <h1>{{telefilm.name}}</h1>
                    <small>Lang {{telefilm.original_language}}</small>
                    <img :src="'https://image.tmdb.org/t/p/w342' + telefilm.poster_path" alt="">
                    <div class="hover">
                        <h5>{{telefilm.vote_average | decimalTelefilm }}</h5>
                    </div>
                    <p>{{telefilm.overview}}</p>
                 </div>
            </div>
            <!-- Footer -->
            <div class="footer">
                       <!-- Alternativa Footer utilizzando App.vue e importanto <Footer /> -->
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';
import $ from 'jquery';

export default {
    name:"film",
    // props:['films'],
    data () {
        return {
            click: false,
            films: null,
            telefilms: null,
            filmSearch: '',
            telefilmSearch: ''
        }
    },
    // Creo funzioni derivanti da @click
    created() {
       this.searchFilm();
       this.searchTelefilm();
       this.showFilm();
       this.showTelefilm();
    },
    // Return/ utilizzo funzioni
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
        },
        showFilm()  {
            $('.default-film').css({"display": "none"});
        },
        showTelefilm: function () {
            $('.default-telefilm').css({"display": "none"});
        }
    },
    filters: {
        decimalFilm(value) {
           return parseInt(Math.ceil(value/ 2));
       },
        decimalTelefilm(value) {
            return parseInt(Math.ceil(value/ 2));
        }
    }
}

</script>

<style lang="scss">

$primary_color: #f28400;
   #films {
        width: 100vw;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        #login {
            height: 100vh;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: black;
            z-index:1;
            .heroflix-login {
                .logo {
                    margin-bottom: 50px;
                    .logo-heroflix {
                        height: 100px;
                        width: 400px;
                        object-fit: cover;
                    }
                }
                .user-choice {
                    img {
                        height: 200px;
                        width: 200px;
                        &:nth-child(2) {
                            margin: 0 20px;
                        }
                        &:hover {
                            cursor: pointer;
                            transform: scale(1.2);
                            border: 1px solid $primary_color;
                        }
                    }
                }
            }
        }
        .header {
            height: 100px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                height: 80px;
            }
        }
        #heroflix {
            display: flex;
            justify-content: space-around;
            #film-search {
                height: 100vh;
                width: 40%;
                float: right;
                overflow-y: auto;
                .input {
                    height: 120px;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    h1 {
                        font-size: 23px;
                    }
                    input {
                        margin-bottom: 10px;
                    }
                }
                .default-film {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    margin: 10px;
                    margin-bottom: 30px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.14);
                    border-radius: 15px;
                    padding: 0 15px;
                    small {
                        margin-bottom: 10px;
                    }
                    img {
                        height: 300px;
                        margin: 20px 0;
                    }
                }
                .cards {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    margin: 10px;
                    margin-bottom: 30px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.14);
                    border-radius: 15px;
                    padding: 0 15px;
                    &:hover {
                        .hover {
                            display: block;
                        }
                    }
                    small {
                        margin-bottom: 10px;
                    }
                    img {
                        height: 300px;
                    }
                    .hover {
                        display: none;
                        position: absolute;
                        font-size: 20px;
                        color: #FFFFFF;
                    }
                }
            }
            #telefilm-search {
                height: 100vh;
                width: 40%;
                float: right;
                overflow-y: auto;
                .input {
                    height: 120px;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    h1 {
                        font-size: 23px;
                    }
                    input {
                        margin-bottom: 10px;
                    }
                }
                .default-telefilm {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    margin: 10px;
                    margin-bottom: 30px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.14);
                    border-radius: 15px;
                    padding: 0 15px;
                    z-index:0;
                    small {
                        margin-bottom: 10px;
                    }
                    img {
                        height: 300px;
                        margin: 20px 0;
                    }
                }
                .cards {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    margin: 10px;
                    margin-bottom: 30px;
                    box-shadow: 0 5px 20px rgba(0,0,0,0.14);
                    border-radius: 15px;
                    padding: 0 15px;
                    &:hover {
                        .hover {
                            display: block;
                        }
                    }
                    small {
                        margin-bottom: 10px;
                    }
                    img {
                        height: 300px;
                    }
                    .hover {
                        display: none;
                        position: absolute;
                        font-size: 20px;
                        color: #FFFFFF;
                    }
                }
            }
        }
    }


   @media (max-width: 768px) {
       #films {
           #login {
               flex-direction: row;
               .heroflix-login {
                    .logo {
                        .logo-heroflix {
                            height: 70px;
                            width: 230px;
                        }
                    }
                   .user-choice {
                       img {
                            height: 100px;
                            width: 100px;
                        }
                   }
               }
           }
           .header {
               height: 80px;
               width: 100%;
               img {
                   height: 70px;
               }
           }
           #heroflix {
               #film-search {
                    width: 50%;
                    .input {
                        height: 110px;
                        width: 100%;
                        h1 {
                            font-size: 20px;
                        }
                        input {
                            width: 120px;
                            margin-bottom: 8px;
                        }
                    }
                    .default-film {
                        h1 {
                            font-size: 20px;
                        }
                        img {
                            height: 200px;
                        }
                        p{
                            text-overflow: ellipsis;
                           overflow: hidden;
                           display: -webkit-box;
                           -webkit-line-clamp: 2; /* number of lines to show */
                           -webkit-box-orient: vertical;
                            margin-bottom: 1.5em;
                           color: #898989;
                        }
                    }
                    .cards {
                        h1 {
                            font-size: 20px;
                        }
                        img {
                            height: 200px;
                        }
                         p {
                            text-overflow: ellipsis;
		     			    overflow: hidden;
		     				display: -webkit-box;
		     				-webkit-line-clamp: 2; /* number of lines to show */
		     				-webkit-box-orient: vertical;
		          			margin-bottom: 1.5em;
		     			    color: #898989;
                        }
                    }
                }
                #telefilm-search {
                     width: 50%;
                    .input {
                        height: 110px;
                        width: 100%;
                        h1 {
                            font-size: 20px;
                        }
                        input {
                            width: 120px;
                            margin-bottom: 8px;
                        }
                    }
                    .default-telefilm {
                        h1 {
                            font-size: 20px;
                        }
                        img {
                            height: 200px;
                        }
                        p {
                            text-overflow: ellipsis;
                            overflow: hidden;
                            display: -webkit-box;
                            -webkit-line-clamp: 2; /* number of lines to show */
                            -webkit-box-orient: vertical;
                            margin-bottom: 1.5em;
                           color: #898989;
                        }
                    }
                    .cards {
                        h1 {
                            font-size: 20px;
                        }
                        img {
                            height: 200px;
                        }
                        p {
                            text-overflow: ellipsis;
                            overflow: hidden;
                            display: -webkit-box;
                            -webkit-line-clamp: 2; /* number of lines to show */
                            -webkit-box-orient: vertical;
                            margin-bottom: 1.5em;
                            color: #898989;
                        }
                    }
                }
            }
        }
    }

</style>
