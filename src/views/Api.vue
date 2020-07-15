<template>
     <div id="id">

        <!-- <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Vtest</div>
                        <div class="card-body">
                           <form @submit="formSubmit">
                                <strong>Role:</strong>
                                <input type="text" class="form-control" v-model="role">
                                <strong>Surname:</strong>
                                <textarea class="form-control" v-model="surname"></textarea>
                                <button >Submit</button>
                            </form>
                            <strong>Output:</strong>
                           <pre>
                           {{output}}
                           </pre>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
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

        <div class="halo-stamp" v-for="name in names" :key="name.id">
            <h1>{{name.role}}</h1>
            <h2 style="color:red">{{name.surname}}</h2>
            <!-- <button @click="deleteAddress(name.id)">Delete</button> -->
        </div>
    </div>
</template>

<script>

import $ from 'jquery';

export default {
    name: "id",
    props: ['names'],
    data() {
        return {
            number: ''
        }
    },
    methods: {
        nan() {
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
    // data() {
    //    return {
    //         role: '',
    //         surname: '',
    //         output: ''
    //     }
    // },
    // methods: {
    //
    // formSubmit(e) {
    //     e.preventDefault();
    //     var currentObj = this;
    //     this.axios.post('http://127.0.0.1:8000/api/players', {
    //         role: this.role,
    //         surname: this.surname,
    //         headers: {
    //         'Authorization': 'Bearer '+ '',
    //         "Content-Type": "application/json",
    //         }
    //         })
    //         .then(response => {
    //             console.log(response);
    //             currentObj.output = response.data;
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //             currentObj.output = error;
    //         });
    //     },
    //
    // deleteAddress(id){
    //     this.axios.delete('http://127.0.0.1:8000/api/players/'+ id, {
    //         headers: {
    //         'Authorization': 'Bearer '+ '',
    //         "Content-Type": "application/json",
    //         }
    //         })
    //         .then(function(response){
    //         console.log(response)
    //         })
    //        .catch(function (error) {
    //         console.log(error);
    //         });
    //     }
    // }
}

</script>

<style lang="scss">
</style>
