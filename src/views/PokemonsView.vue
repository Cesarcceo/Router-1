<script setup>
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    import { useGetData } from '@/composables/getData'

    // const pokemons = ref([])

    const {data, loading, getData, error} = useGetData()

    // const getData = async () => {
    //     try {
    //         const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon")
    //         pokemons.value = data.results
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    getData("https://pokeapi.co/api/v2/pokemon")

</script>

<template>
    <h1>Pokemons</h1>
    <p v-if="loading" class="h1">Loading...</p>
    <div class="alert alert-danger" v-if="error">{{ error }}</div>
    <div v-if="data">
        <ul class="list-group">
            <li v-for="poke in data.results" :key="poke" class="list-group-item">
                <router-link :to="`/pokemons/${poke.name}`">{{ poke.name }}</router-link>
            </li>
        </ul>
        <button :disabled="!data.previous" class="btn btn-secondary me-2" @click="getData(data.previous)">Previous</button>
        <button :disabled="!data.next" class="btn btn-secondary" @click="getData(data.next)">Next</button>
    </div>
</template>