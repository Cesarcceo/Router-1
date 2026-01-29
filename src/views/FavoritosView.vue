<script setup>
import { useFavoritoStore } from '@/store/favoritos';
import { storeToRefs } from 'pinia';

const useFavorito = useFavoritoStore()

const {remove} = useFavorito
const {favoritos} = storeToRefs(useFavorito)
</script>

<template>
    <h1>Pokemons Favoritos</h1>
    <ul class="list-group">
        <li class="list-group-item" v-for="poke in favoritos" :key="poke.id">
            <div>
                {{ poke.name }}
            </div>
            <div>
                <button class="btn btn-sm btn-danger" @click="remove(poke.id)">Eliminar</button>
            </div>
        </li>
    </ul>
</template>