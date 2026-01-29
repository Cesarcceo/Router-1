<script setup>
    import axios from 'axios';
    import { ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';

    const route = useRoute()
    const router = useRouter()

    const back = () => {
        router.push("/pokemons")
    }

    const poke = ref({});

    const getData = async () => {
        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
            console.log(data);
            poke.value = data;
            console.log()
        } catch (error) {
            console.log(error)
            poke.value = null
        }
    }

    getData()

</script>

<template>
    <div v-if="poke">
        <img :src="poke.sprites?.other['official-artwork'].front_default" alt="">
        <h1>Pokemon Name: {{ $route.params.name }}</h1>
    </div>
    <h1 v-else>Ese pokeon no existe</h1>
    <button type="button" class="btn btn-primary" @click="back" >Back</button>
</template>