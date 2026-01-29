<script setup>
import { useRouter } from 'vue-router';
import { useFavoritoStore } from '@/store/favoritos';
import { storeToRefs } from 'pinia';

const router = useRouter()
const useFavorito = useFavoritoStore()

const {remove} = useFavorito
const {favoritos} = storeToRefs(useFavorito)

const back = name => {
    router.push(`/pokemons/${name}`)
}
</script>

<template>
    <h1>Pokemons Favoritos</h1>
    <ul class="list-group">
        <li class="list-group-item" v-for="poke in favoritos" :key="poke.id">
            <div>
                {{ poke.name }}
            </div>
            <div>
                <button class="btn btn-sm btn-danger me-2" @click="remove(poke.id)">Eliminar</button>
                <button class="btn btn-sm btn-primary" @click="back(poke.name)" >Mas informacion</button>
            </div>
        </li>
    </ul>
</template>