<template>
     <div id="id">
        <div class="input">
            <h2> Inserisci un numero </h2>
            <input type="text" v-model="number">
            <div class="show"  v-if="number.length > 2">
                <button v-on:click="nan">click</button>
            </div>
            <button type="button" v-on:click="loop"> LOOP</button>
            <div class="loop">

            </div>
        </div>
    </div>
</template>

<script>

import $ from 'jquery';

export default {
    name: "id",
    data() {
        return {
            number: ''
        }
    },
    created() {
       this.nan();
   },
    methods: {
        nan: function() {
            if (isNaN(this.number)) {
                alert('non è un numero')
            } else {
                $('.input').append('<h1>' + this.number + '</h1>')
            }
        },
        loop() {
            for (var i = 0; i < 100; i++) {
                if (i % 2 == 0) {
                    console.log('fizz');
                } else if (i % 3 == 0) {
                    console.log('buzz');
                } else {
                    console.log(i);
                }
            }
        }
    }
}

</script>

<style lang="scss">
</style>
