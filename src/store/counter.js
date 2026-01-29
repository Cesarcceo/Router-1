import { defineStore } from "pinia";

export const usercounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
    }),
    actions: {
        increment() {
            this.count++
        }
    },
    getters: {
        double: state => state.count * 2
    }
}) 