<script setup>
    // import axios from 'axios';
    // import { ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { useGetData } from '@/composables/getData'
    import { useFavoritoStore } from '@/store/favoritos';

    const route = useRoute()
    const router = useRouter()
    const useFavorito = useFavoritoStore()

    const {add, findPoke} = useFavorito

    const back = () => {
        router.push("/pokemons")
    }

    // const poke = ref({});

    // const getData = async () => {
    //     try {
    //         const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
    //         console.log(data);
    //         poke.value = data;
    //         console.log()
    //     } catch (error) {
    //         console.log(error)
    //         poke.value = null
    //     }
    // }

    const {data, loading, getData, error} = useGetData()

    getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)

</script>

<template>
    <p v-if="loading">Loading...</p>
    <div class="alert alert-danger" v-if="error">{{ error }}</div>
    <div v-if="data">
        <img :src="data.sprites?.other['official-artwork'].front_default" alt="">
        <h1>Pokemon Name: {{ $route.params.name }}</h1>
        <button :disabled="findPoke(data.name)" class="btn btn-primary my-2" @click="add(data)"> 
            Agregar a favoritos</button>
    </div>
    <h1 v-else>Ese pokeon no existe</h1>
    <button type="button" class="btn btn-primary" @click="back" >Back</button>
</template>